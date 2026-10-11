/* ============================================================
   Elena Velas y Aromas — Movimiento
   ------------------------------------------------------------
   Tres cosas, todas baratas:
     1. Aparición al entrar en pantalla (IntersectionObserver).
     2. Ambiente del hero: motas de luz sobre un canvas pequeño.
     3. Estado de la cabecera al desplazarse.

   Reglas de rendimiento que sigue todo este archivo:
     · Nada se anima fuera de pantalla.
     · Sólo transform y opacity (no provocan reflow).
     · Un único rAF para el canvas, detenido cuando no se ve.
     · Se apaga solo si el equipo es modesto o el usuario pidió
       menos movimiento.
   ============================================================ */

(function () {
  'use strict';

  // matchMedia no está en todos los entornos; sin él se asume movimiento normal.
  const reducido = typeof window.matchMedia === 'function'
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : { matches: false, addEventListener: function () {} };

  // Equipo modesto: pocos núcleos, poca memoria o conexión ahorradora.
  function equipoModesto() {
    const nucleos = navigator.hardwareConcurrency || 8;
    const memoria = navigator.deviceMemory || 8;
    const red = navigator.connection || {};
    return nucleos <= 4 || memoria <= 4 || red.saveData === true ||
           /2g/.test(red.effectiveType || '');
  }

  const modesto = equipoModesto();

  /* ----------------------------------------------------------
     1. Aparición al entrar en pantalla
     ---------------------------------------------------------- */

  function initAparicion() {
    const objetivos = document.querySelectorAll('[data-revelar]');
    if (!objetivos.length) return;

    if (reducido.matches || !('IntersectionObserver' in window)) {
      objetivos.forEach(el => el.classList.add('visible'));
      return;
    }

    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        // El escalonado lo marca el propio elemento; tope bajo para que
        // el último no se haga esperar.
        const orden = Number(el.dataset.revelarOrden || 0);
        el.style.transitionDelay = Math.min(orden * 70, 350) + 'ms';
        el.classList.add('visible');
        obs.unobserve(el);   // una sola vez: no vuelve a costar nada
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    objetivos.forEach(el => obs.observe(el));
  }

  /* Marca automáticamente lo que debe aparecer, para no tener que
     tocar cada plantilla del catálogo a mano. */
  function marcarParaRevelar(raiz) {
    const ambito = raiz || document;
    const grupos = [
      ['.section-head', 1],
      ['.producto', 1],
      ['.video-card', 1],
      ['.promo-slide', 0],
      ['.panel', 1],
      ['.info-card', 1],
      ['.social-link', 1]
    ];
    grupos.forEach(([sel, escalonar]) => {
      const items = ambito.querySelectorAll(sel);
      items.forEach((el, i) => {
        if (el.hasAttribute('data-revelar')) return;
        el.setAttribute('data-revelar', '');
        if (escalonar) el.dataset.revelarOrden = String(i % 6);
      });
    });
  }


  /* ----------------------------------------------------------
     4. Carga diferida de imágenes
     ------------------------------------------------------------
     El catálogo arranca en display:none, y ahí el navegador no
     puede aplazar nada: pedía las 72 fotos de golpe. Con data-src
     sólo se descarga lo que se acerca a la pantalla.
     ---------------------------------------------------------- */

  let obsImagenes = null;

  function initImagenes(raiz) {
    const ambito = raiz || document;
    const pendientes = ambito.querySelectorAll('img[data-src]');
    if (!pendientes.length) return;

    if (!('IntersectionObserver' in window)) {
      pendientes.forEach(cargarImagen);
      return;
    }

    if (!obsImagenes) {
      obsImagenes = new IntersectionObserver((entradas) => {
        entradas.forEach(e => {
          if (!e.isIntersecting) return;
          cargarImagen(e.target);
          obsImagenes.unobserve(e.target);
        });
      }, { rootMargin: '300px 0px' });   // margen para que llegue ya pintada
    }

    pendientes.forEach(img => obsImagenes.observe(img));
  }

  function cargarImagen(img) {
    const src = img.dataset.src;
    if (!src) return;
    img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
    img.addEventListener('error', () => {
      img.classList.add('fallo');
      // Sin foto, la tarjeta pinta un marcador de marca en su lugar. Antes
      // se quedaba el rectángulo gris de carga parpadeando para siempre.
      const tarjeta = img.closest('.producto');
      if (tarjeta) tarjeta.classList.add('sin-foto');
    }, { once: true });
    img.src = src;
    img.removeAttribute('data-src');
  }

  /* ----------------------------------------------------------
     2. Ambiente del hero: motas de luz de vela
     ---------------------------------------------------------- */

  function initAmbiente() {
    const lienzo = document.getElementById('hero-ambiente');
    // En el celular no: las motas obligaban a repintar la página entera
    // en cada fotograma y el teléfono trabajaba al 55 % con la página
    // quieta. La portada conserva sus destellos y su halo, que no cuestan.
    const tactil = typeof window.matchMedia === 'function' &&
                   window.matchMedia('(pointer: coarse)').matches;
    if (!lienzo || reducido.matches || modesto || tactil) return;

    const ctx = lienzo.getContext('2d', { alpha: true });
    if (!ctx) return;

    let ancho = 0, alto = 0, dpr = 1;
    let motas = [];
    let rafId = null;
    let visible = true;

    function dimensionar() {
      const r = lienzo.getBoundingClientRect();
      // Se limita el dpr a 2: por encima no se nota y cuesta el doble.
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      ancho = r.width;
      alto = r.height;
      lienzo.width = Math.round(ancho * dpr);
      lienzo.height = Math.round(alto * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sembrar();
    }

    function sembrar() {
      // Densidad por área, con tope: en un monitor grande no se disparan.
      const cantidad = Math.min(26, Math.round((ancho * alto) / 26000));
      motas = new Array(cantidad).fill(0).map(() => nuevaMota(true));
    }

    function nuevaMota(inicial) {
      return {
        x: Math.random() * ancho,
        y: inicial ? Math.random() * alto : alto + 12,
        r: 0.7 + Math.random() * 1.9,
        vy: 0.06 + Math.random() * 0.20,       // suben despacio, como pavesas
        vx: (Math.random() - 0.5) * 0.10,
        fase: Math.random() * Math.PI * 2,
        vel: 0.008 + Math.random() * 0.014,
        alfa: 0.16 + Math.random() * 0.34
      };
    }

    // Cada mota es la misma luz a distinto tamaño y brillo: se dibuja una
    // vez en un lienzo aparte y luego sólo se copia. Antes se creaba un
    // degradado nuevo por mota en cada fotograma, y en el celular era lo
    // que más trabajo daba con la página quieta.
    const SPRITE = 64;
    const sprite = document.createElement('canvas');
    sprite.width = sprite.height = SPRITE;
    const sctx = sprite.getContext('2d');
    const luz = sctx.createRadialGradient(SPRITE / 2, SPRITE / 2, 0, SPRITE / 2, SPRITE / 2, SPRITE / 2);
    luz.addColorStop(0, 'rgba(199, 155, 74, 1)');
    luz.addColorStop(1, 'rgba(199, 155, 74, 0)');
    sctx.fillStyle = luz;
    sctx.fillRect(0, 0, SPRITE, SPRITE);

    // 30 fotogramas por segundo: las motas van tan despacio que no se nota
    // la diferencia con 60, y es la mitad de trabajo.
    const PASO = 1000 / 30;
    let ultimo = 0;

    function pintar(ahora) {
      rafId = requestAnimationFrame(pintar);
      if (ahora - ultimo < PASO) return;
      // Las velocidades estaban pensadas a 60 fps: a 30 cada paso cuenta doble.
      const k = ultimo ? Math.min((ahora - ultimo) / (1000 / 60), 4) : 1;
      ultimo = ahora;
      ctx.clearRect(0, 0, ancho, alto);
      for (let i = 0; i < motas.length; i++) {
        const m = motas[i];
        m.y -= m.vy * k;
        m.x += m.vx * k;
        m.fase += m.vel * k;
        if (m.y < -12) motas[i] = nuevaMota(false);

        // El parpadeo es lo que las hace parecer luz y no puntos.
        ctx.globalAlpha = m.alfa * (0.55 + 0.45 * Math.sin(m.fase));
        const d = m.r * 8;
        ctx.drawImage(sprite, m.x - d / 2, m.y - d / 2, d, d);
      }
      ctx.globalAlpha = 1;
    }

    function arrancar() {
      if (rafId === null) rafId = requestAnimationFrame(pintar);
    }
    function parar() {
      if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; ultimo = 0; }
    }

    dimensionar();
    arrancar();

    // Fuera de pantalla o en otra pestaña no se gasta un solo frame.
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((e) => {
        visible = e[0].isIntersecting;
        visible ? arrancar() : parar();
      }, { threshold: 0 }).observe(lienzo);
    }
    document.addEventListener('visibilitychange', () => {
      document.hidden || !visible ? parar() : arrancar();
    });

    let temporizador;
    window.addEventListener('resize', () => {
      clearTimeout(temporizador);
      temporizador = setTimeout(dimensionar, 180);
    }, { passive: true });

    reducido.addEventListener('change', e => {
      if (e.matches) { parar(); ctx.clearRect(0, 0, ancho, alto); } else arrancar();
    });
  }

  /* ----------------------------------------------------------
     3. Cabecera al desplazarse
     ---------------------------------------------------------- */

  function initCabecera() {
    const cab = document.querySelector('.site-header');
    if (!cab) return;
    let ticking = false;
    function revisar() {
      cab.classList.toggle('desplazada', window.scrollY > 12);
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(revisar); }
    }, { passive: true });
    revisar();
  }

  /* ---------------------------------------------------------- */

  function init() {
    if (modesto) document.documentElement.classList.add('equipo-modesto');
    marcarParaRevelar();
    initAparicion();
    initImagenes();
    initAmbiente();
    initCabecera();
  }

  // El catálogo se vuelve a pintar al filtrar: hay que marcar lo nuevo.
  window.refrescarMovimiento = function (raiz) {
    marcarParaRevelar(raiz);
    initAparicion();
    initImagenes(raiz);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ============================================================
   Elena Velas y Aromas — Detalles de agencia
   ------------------------------------------------------------
   Los mismos efectos que se ven en landings premium, escritos en
   JS plano: este sitio no usa React, así que no hay GSAP ni Lenis.
   Todo se apoya en transform/opacity y se apaga con
   prefers-reduced-motion.
   ============================================================ */

(function () {
  'use strict';

  const reducido = typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const punteroFino = typeof window.matchMedia === 'function' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ----------------------------------------------------------
     1. Titular que entra palabra a palabra
     ------------------------------------------------------------
     Cada palabra va en una máscara y sube desde abajo: el texto
     emerge de una línea invisible en vez de aparecer flotando.
     Si algo falla, el titular ya está en el HTML y se ve igual.
     ---------------------------------------------------------- */

  function partirEnPalabras(el) {
    if (!el || el.dataset.partido === 'si') return;
    const texto = el.textContent.trim();
    if (!texto) return;

    el.dataset.partido = 'si';
    el.textContent = '';

    texto.split(/\s+/).forEach((palabra, i, todas) => {
      const mascara = document.createElement('span');
      mascara.className = 'palabra-mascara';
      const interior = document.createElement('span');
      interior.className = 'palabra';
      interior.textContent = palabra + (i < todas.length - 1 ? '\u00A0' : '');
      interior.style.animationDelay = (i * 55) + 'ms';
      mascara.appendChild(interior);
      el.appendChild(mascara);
    });
  }

  function initTitulares() {
    if (reducido) return;   // con movimiento reducido el titular entra en bloque
    partirEnPalabras(document.querySelector('.hero-title'));
  }

  /* ----------------------------------------------------------
     2. Botones magnéticos
     ------------------------------------------------------------
     El contenido se desplaza hacia el puntero un 18% de la
     distancia al centro: lo justo para que se note vivo sin que
     parezca que el botón huye.
     ---------------------------------------------------------- */

  function initMagneticos() {
    if (reducido || !punteroFino) return;

    document.querySelectorAll('.hero-actions .btn, .btn-primary').forEach((btn) => {
      let raf = null;
      let destinoX = 0, destinoY = 0;

      const pintar = () => {
        raf = null;
        btn.style.transform = 'translate3d(' + destinoX + 'px,' + destinoY + 'px,0)';
      };

      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        destinoX = (e.clientX - (r.left + r.width / 2)) * 0.18;
        destinoY = (e.clientY - (r.top + r.height / 2)) * 0.18;
        if (raf === null) raf = requestAnimationFrame(pintar);
      });

      btn.addEventListener('pointerleave', () => {
        destinoX = destinoY = 0;
        if (raf === null) raf = requestAnimationFrame(pintar);
      });
    });
  }

  /* ----------------------------------------------------------
     3. Cursor de acompañamiento
     ------------------------------------------------------------
     Un círculo que sigue al puntero con inercia y crece sobre lo
     pulsable. Sólo escritorio: en táctil no hay puntero.
     ---------------------------------------------------------- */

  const PULSABLE = 'a, button, [role="button"], input, textarea, select, .producto, .reel';

  function initCursor() {
    if (reducido || !punteroFino) return;

    const punto = document.createElement('div');
    punto.className = 'cursor-elena';
    punto.setAttribute('aria-hidden', 'true');
    document.body.appendChild(punto);
    document.documentElement.classList.add('con-cursor');

    let ratonX = 0, ratonY = 0, x = 0, y = 0, escala = 1, escalaDestino = 1;
    let visible = false, raf = null;

    function bucle() {
      // Interpolación simple: 0.16 da la inercia sin sensación de retardo.
      x += (ratonX - x) * 0.16;
      y += (ratonY - y) * 0.16;
      escala += (escalaDestino - escala) * 0.18;
      punto.style.transform =
        'translate3d(' + x + 'px,' + y + 'px,0) translate(-50%,-50%) scale(' + escala.toFixed(3) + ')';
      // Si ya llegó a donde está el ratón, se para hasta el próximo
      // movimiento: antes seguía pintando 60 veces por segundo con el
      // ratón quieto.
      const quieto = Math.abs(ratonX - x) < 0.1 && Math.abs(ratonY - y) < 0.1 &&
                     Math.abs(escalaDestino - escala) < 0.001;
      raf = quieto ? null : requestAnimationFrame(bucle);
    }

    window.addEventListener('pointermove', (e) => {
      ratonX = e.clientX;
      ratonY = e.clientY;
      if (!visible) {
        visible = true;
        x = ratonX; y = ratonY;          // aparece donde está el ratón, sin viajar
        punto.classList.add('visible');
      }
      if (raf === null) raf = requestAnimationFrame(bucle);
    }, { passive: true });

    document.addEventListener('pointerleave', () => {
      visible = false;
      punto.classList.remove('visible');
    });

    // Delegación: un solo par de listeners, vale para lo que se monte después.
    document.addEventListener('pointerover', (e) => {
      if (e.target instanceof Element && e.target.closest(PULSABLE)) escalaDestino = 2.4;
      if (raf === null && visible) raf = requestAnimationFrame(bucle);
    }, { passive: true });
    document.addEventListener('pointerout', (e) => {
      if (e.target instanceof Element && e.target.closest(PULSABLE)) escalaDestino = 1;
      if (raf === null && visible) raf = requestAnimationFrame(bucle);
    }, { passive: true });
  }

  function arrancar() {
    initTitulares();
    initMagneticos();
    initCursor();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar);
  } else {
    arrancar();
  }
})();
