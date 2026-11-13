// ============================================================
// Mi cuenta (Supabase)
// ------------------------------------------------------------
// Opcional: se puede comprar sin entrar. Quien entra (con Google o
// con un enlace al correo) guarda en la nube su carrito y sus datos de
// envío, y los encuentra en cualquier celular. Los datos de envío se
// agregan solos al mensaje de WhatsApp del pedido.
//
// Tablas: public.perfiles y public.carritos, con RLS: cada cliente sólo
// lee y escribe lo suyo. La llave de abajo es la publicable: está hecha
// para ir en el navegador.
// ============================================================
(function () {
  const URL_SUPABASE = 'https://biriwiolaigmvgysvsnx.supabase.co';
  const LLAVE_PUBLICA = 'sb_publishable_ET6eHk9oBgI-CzFNfstuGA_1Jd6I9qT';
  const CLAVE_CARRITO = 'elena-velas-carrito';

  const boton = document.getElementById('cuenta-button');
  const modal = document.getElementById('cuenta-modal');
  if (!boton || !modal || !window.supabase || !window.supabase.createClient) {
    if (boton) boton.hidden = true;
    return;
  }

  const sb = window.supabase.createClient(URL_SUPABASE, LLAVE_PUBLICA, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'pkce' }
  });

  const $ = (id) => document.getElementById(id);
  const vistaEntrar = $('cuenta-entrar');
  const vistaPerfil = $('cuenta-perfil');
  const aviso = $('cuenta-aviso');
  let usuario = null;
  let perfil = null;

  function mostrarAviso(texto, tipo) {
    aviso.textContent = texto || '';
    aviso.dataset.tipo = tipo || '';
    aviso.hidden = !texto;
  }

  function abrir() {
    mostrarAviso('');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function cerrar() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
  boton.addEventListener('click', abrir);
  modal.querySelectorAll('[data-cerrar]').forEach(b => b.addEventListener('click', cerrar));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) cerrar(); });

  // --- Entrar ---
  $('cuenta-google').addEventListener('click', async () => {
    mostrarAviso('Abriendo Google…');
    const { error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/' }
    });
    if (error) mostrarAviso('No se pudo abrir Google. Intenta con tu correo.', 'error');
  });

  $('cuenta-form-correo').addEventListener('submit', async (e) => {
    e.preventDefault();
    const correo = $('cuenta-correo').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      mostrarAviso('Escribe un correo válido.', 'error');
      return;
    }
    const enviar = $('cuenta-enviar');
    enviar.disabled = true;
    const { error } = await sb.auth.signInWithOtp({
      email: correo,
      options: { emailRedirectTo: window.location.origin + '/' }
    });
    enviar.disabled = false;
    if (error) {
      mostrarAviso(/rate|seconds|limit/i.test(error.message)
        ? 'Ya te enviamos un enlace hace poco. Espera un minuto y vuelve a intentar.'
        : 'No pudimos enviar el enlace. Revisa el correo e intenta otra vez.', 'error');
      return;
    }
    mostrarAviso('Listo. Te enviamos un enlace a ' + correo + '. Ábrelo en este mismo celular para entrar.', 'ok');
  });

  // --- Perfil ---
  const campos = ['nombre', 'telefono', 'ciudad', 'direccion'];

  function pintarPerfil() {
    $('cuenta-correo-actual').textContent = usuario ? (usuario.email || '') : '';
    campos.forEach(c => { $('perfil-' + c).value = (perfil && perfil[c]) || ''; });
  }

  async function cargarPerfil() {
    const { data } = await sb.from('perfiles').select('nombre, telefono, ciudad, direccion').eq('id', usuario.id).maybeSingle();
    perfil = data || null;
    if (!perfil) {
      const meta = usuario.user_metadata || {};
      perfil = { nombre: meta.full_name || meta.name || '' };
    }
    pintarPerfil();
  }

  $('cuenta-form-perfil').addEventListener('submit', async (e) => {
    e.preventDefault();
    const datos = { id: usuario.id, actualizado: new Date().toISOString() };
    campos.forEach(c => { datos[c] = $('perfil-' + c).value.trim().slice(0, c === 'direccion' ? 200 : 120) || null; });
    const guardar = $('perfil-guardar');
    guardar.disabled = true;
    const { error } = await sb.from('perfiles').upsert(datos);
    guardar.disabled = false;
    if (error) { mostrarAviso('No se pudieron guardar tus datos. Intenta otra vez.', 'error'); return; }
    perfil = datos;
    mostrarAviso('Datos guardados. Saldrán solos en tus pedidos por WhatsApp.', 'ok');
  });

  $('cuenta-salir').addEventListener('click', async () => {
    await sb.auth.signOut();
    mostrarAviso('Cerraste sesión. Tu carrito sigue en este celular.', 'ok');
  });

  // --- Carrito en la nube ---
  const clave = (i) => [i.id, i.tipoCompra, i.tamano, i.presentacion].join('|');

  function carritoLocal() {
    try { return JSON.parse(localStorage.getItem(CLAVE_CARRITO) || '[]') || []; } catch (e) { return []; }
  }

  function refrescarVistaCarrito() {
    if (typeof cargarCarrito === 'function') cargarCarrito();
    if (typeof actualizarContadorCarrito === 'function') actualizarContadorCarrito();
    if (typeof renderCarrito === 'function') renderCarrito();
  }

  let temporizador = null;
  function subirCarrito() {
    if (!usuario) return;
    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
      sb.from('carritos').upsert({ user_id: usuario.id, items: carritoLocal(), actualizado: new Date().toISOString() })
        .then(({ error }) => { if (error) console.warn('No se guardó el carrito en la nube'); });
    }, 800);
  }

  // Cada vez que la página guarda el carrito, también va a la nube.
  if (typeof window.guardarCarrito === 'function') {
    const original = window.guardarCarrito;
    window.guardarCarrito = function () { original.apply(this, arguments); subirCarrito(); };
  }

  async function unirCarritos() {
    const { data } = await sb.from('carritos').select('items').eq('user_id', usuario.id).maybeSingle();
    const nube = (data && Array.isArray(data.items)) ? data.items : [];
    const local = carritoLocal();
    const unido = new Map();
    nube.concat(local).forEach(item => {
      if (!item || !item.id) return;
      const k = clave(item);
      const previo = unido.get(k);
      unido.set(k, previo ? Object.assign({}, item, { cantidad: Math.max(previo.cantidad || 1, item.cantidad || 1) }) : item);
    });
    const resultado = Array.from(unido.values());
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(resultado));
    refrescarVistaCarrito();
    subirCarrito();
  }

  // Lo usa comprarPorWhatsApp() para agregar los datos de envío al pedido.
  window.datosEnvioCliente = function () {
    if (!usuario || !perfil) return '';
    const lineas = [];
    if (perfil.nombre) lineas.push('Nombre: ' + perfil.nombre);
    if (perfil.telefono) lineas.push('Teléfono: ' + perfil.telefono);
    if (perfil.ciudad) lineas.push('Ciudad: ' + perfil.ciudad);
    if (perfil.direccion) lineas.push('Dirección: ' + perfil.direccion);
    return lineas.length ? '📦 Datos de envío:\n' + lineas.join('\n') + '\n\n' : '';
  };

  function pintarSesion() {
    const dentro = !!usuario;
    vistaEntrar.hidden = dentro;
    vistaPerfil.hidden = !dentro;
    boton.classList.toggle('con-sesion', dentro);
    boton.setAttribute('aria-label', dentro ? 'Mi cuenta' : 'Entrar a mi cuenta');
    const inicial = $('cuenta-inicial');
    if (inicial) {
      const nombre = (perfil && perfil.nombre) || (usuario && usuario.email) || '';
      inicial.textContent = dentro ? nombre.trim().charAt(0).toUpperCase() : '';
    }
  }

  sb.auth.onAuthStateChange((evento, sesion) => {
    const antes = usuario && usuario.id;
    usuario = sesion ? sesion.user : null;
    if (!usuario) { perfil = null; pintarSesion(); return; }
    if (antes === usuario.id) return;
    // Fuera del callback: Supabase recomienda no esperar otras llamadas aquí.
    setTimeout(async () => {
      await cargarPerfil();
      pintarSesion();
      await unirCarritos();
      if (evento === 'SIGNED_IN' && /[?&]code=/.test(window.location.search)) {
        history.replaceState(null, '', window.location.pathname + window.location.hash);
        if (typeof mostrarNotificacion === 'function') mostrarNotificacion('¡Listo! Tu carrito y tus datos quedan guardados.', 'success');
      }
    }, 0);
  });

  pintarSesion();
})();
