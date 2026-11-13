// ============================================================
// Mi cuenta (Supabase)
// ------------------------------------------------------------
// Opcional: se puede comprar sin entrar. Quien entra (con Google o con
// correo y contraseña) guarda en la nube su carrito y sus datos de
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
  const vistaNueva = $('cuenta-form-nueva');
  const aviso = $('cuenta-aviso');
  const VUELTA = window.location.origin + '/';
  let usuario = null;
  let perfil = null;
  let modo = 'entrar';

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

  // Los mensajes de Supabase vienen en inglés: aquí los más comunes.
  function traducir(error) {
    const m = (error && error.message) || '';
    if (/invalid login credentials/i.test(m)) return 'El correo o la contraseña no coinciden.';
    if (/email not confirmed/i.test(m)) return 'Primero confirma tu correo: te enviamos un enlace al crear la cuenta.';
    if (/already registered|already exists/i.test(m)) return 'Ese correo ya tiene cuenta. Toca "Entrar".';
    if (/password.*(at least|short|weak)/i.test(m)) return 'La contraseña debe tener al menos 8 caracteres.';
    if (/rate|seconds|limit/i.test(m)) return 'Muchos intentos seguidos. Espera un minuto y vuelve a intentar.';
    return 'Algo salió mal. Intenta otra vez.';
  }

  // --- Entrar / Crear cuenta ---
  function ponerModo(nuevo) {
    modo = nuevo;
    const crear = modo === 'crear';
    $('tab-entrar').setAttribute('aria-selected', String(!crear));
    $('tab-crear').setAttribute('aria-selected', String(crear));
    $('campo-nombre').hidden = !crear;
    $('cuenta-enviar').textContent = crear ? 'Crear mi cuenta' : 'Entrar';
    $('cuenta-clave').setAttribute('autocomplete', crear ? 'new-password' : 'current-password');
    $('cuenta-olvide').hidden = crear;
    mostrarAviso('');
  }
  modal.querySelectorAll('[data-modo]').forEach(t => t.addEventListener('click', () => ponerModo(t.dataset.modo)));

  $('cuenta-ver-clave').addEventListener('click', (e) => {
    const campo = $('cuenta-clave');
    const ver = campo.type === 'password';
    campo.type = ver ? 'text' : 'password';
    e.currentTarget.textContent = ver ? 'Ocultar' : 'Ver';
    e.currentTarget.setAttribute('aria-pressed', String(ver));
  });

  $('cuenta-google').addEventListener('click', async () => {
    mostrarAviso('Abriendo Google…');
    const { error } = await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: VUELTA } });
    if (error) mostrarAviso('No se pudo abrir Google. Intenta con tu correo.', 'error');
  });

  const correoValido = (c) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);

  $('cuenta-form-correo').addEventListener('submit', async (e) => {
    e.preventDefault();
    const correo = $('cuenta-correo').value.trim();
    const clave = $('cuenta-clave').value;
    if (!correoValido(correo)) { mostrarAviso('Escribe un correo válido.', 'error'); return; }
    if (clave.length < 8) { mostrarAviso('La contraseña debe tener al menos 8 caracteres.', 'error'); return; }

    const enviar = $('cuenta-enviar');
    enviar.disabled = true;
    let resultado;
    if (modo === 'crear') {
      const nombre = $('cuenta-nombre').value.trim().slice(0, 120);
      resultado = await sb.auth.signUp({
        email: correo, password: clave,
        options: { emailRedirectTo: VUELTA, data: nombre ? { full_name: nombre } : {} }
      });
    } else {
      resultado = await sb.auth.signInWithPassword({ email: correo, password: clave });
    }
    enviar.disabled = false;

    if (resultado.error) { mostrarAviso(traducir(resultado.error), 'error'); return; }
    // Con confirmación de correo activada, la cuenta queda creada sin sesión.
    if (modo === 'crear' && !resultado.data.session) {
      mostrarAviso('¡Cuenta creada! Te enviamos un correo a ' + correo + ' para confirmarla.', 'ok');
      return;
    }
    $('cuenta-clave').value = '';
  });

  $('cuenta-olvide').addEventListener('click', async () => {
    const correo = $('cuenta-correo').value.trim();
    if (!correoValido(correo)) { mostrarAviso('Escribe tu correo arriba y vuelve a tocar "¿Olvidaste tu contraseña?".', 'error'); return; }
    const { error } = await sb.auth.resetPasswordForEmail(correo, { redirectTo: VUELTA });
    if (error) { mostrarAviso(traducir(error), 'error'); return; }
    mostrarAviso('Te enviamos un correo a ' + correo + ' para crear una contraseña nueva.', 'ok');
  });

  vistaNueva.addEventListener('submit', async (e) => {
    e.preventDefault();
    const clave = $('cuenta-nueva').value;
    if (clave.length < 8) { mostrarAviso('La contraseña debe tener al menos 8 caracteres.', 'error'); return; }
    const { error } = await sb.auth.updateUser({ password: clave });
    if (error) { mostrarAviso(traducir(error), 'error'); return; }
    vistaNueva.hidden = true;
    pintarSesion();
    mostrarAviso('Contraseña guardada.', 'ok');
  });

  // --- Perfil ---
  const campos = ['nombre', 'telefono', 'ciudad', 'direccion'];

  function pintarPerfil() {
    const nombre = (perfil && perfil.nombre) || '';
    // "VICTOR MANUEL" o "victor" -> "Victor"
    const primero = nombre.trim().split(/\s+/)[0] || '';
    const bonito = primero ? primero.charAt(0).toUpperCase() + primero.slice(1).toLowerCase() : '';
    $('cuenta-nombre-actual').textContent = bonito ? 'Hola, ' + bonito : 'Hola';
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
    pintarPerfil();
    pintarSesion();
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
    const unido = new Map();
    nube.concat(carritoLocal()).forEach(item => {
      if (!item || !item.id) return;
      const k = clave(item);
      const previo = unido.get(k);
      unido.set(k, previo ? Object.assign({}, item, { cantidad: Math.max(previo.cantidad || 1, item.cantidad || 1) }) : item);
    });
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(Array.from(unido.values())));
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
    const recuperando = !vistaNueva.hidden;
    vistaEntrar.hidden = dentro || recuperando;
    vistaPerfil.hidden = !dentro || recuperando;
    $('cuenta-sub').textContent = 'Compra más rápido la próxima vez';
    modal.classList.toggle('con-sesion', dentro);
    boton.classList.toggle('con-sesion', dentro);
    boton.setAttribute('aria-label', dentro ? 'Mi cuenta' : 'Entrar a mi cuenta');
    const nombre = (perfil && perfil.nombre) || (usuario && usuario.email) || '';
    const inicial = dentro ? nombre.trim().charAt(0).toUpperCase() : '';
    $('cuenta-inicial').textContent = inicial;
    $('cuenta-avatar').textContent = inicial;
    // Con Google llega la foto del cliente; si no carga, queda la inicial.
    const meta = (usuario && usuario.user_metadata) || {};
    const foto = dentro && /^https:\/\/lh3\.googleusercontent\.com\//.test(meta.avatar_url || meta.picture || '') ? (meta.avatar_url || meta.picture) : '';
    ['cuenta-foto', 'cuenta-avatar-foto'].forEach(id => {
      const img = $(id);
      if (!img) return;
      img.hidden = !foto;
      if (foto && img.getAttribute('src') !== foto) {
        img.onerror = () => { img.hidden = true; boton.classList.remove('con-foto'); };
        img.src = foto;
      }
    });
    boton.classList.toggle('con-foto', !!foto);
  }

  sb.auth.onAuthStateChange((evento, sesion) => {
    if (evento === 'PASSWORD_RECOVERY') {
      vistaNueva.hidden = false;
      usuario = sesion ? sesion.user : null;
      pintarSesion();
      abrir();
      return;
    }
    const antes = usuario && usuario.id;
    usuario = sesion ? sesion.user : null;
    if (!usuario) { perfil = null; pintarSesion(); return; }
    if (antes === usuario.id) return;
    // Fuera del callback: Supabase recomienda no esperar otras llamadas aquí.
    setTimeout(async () => {
      await cargarPerfil();
      pintarSesion();
      await unirCarritos();
      if (evento === 'SIGNED_IN') {
        if (/[?&]code=/.test(window.location.search)) history.replaceState(null, '', window.location.pathname + window.location.hash);
        if (!modal.classList.contains('hidden')) mostrarAviso('¡Listo! Ya entraste. Guarda tus datos de envío aquí abajo.', 'ok');
        else if (typeof mostrarNotificacion === 'function') mostrarNotificacion('¡Listo! Tu carrito y tus datos quedan guardados.', 'success');
      }
    }, 0);
  });

  ponerModo('entrar');
  pintarSesion();
})();
