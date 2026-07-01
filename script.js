// ===== TRACKER ANIMADO (solo index.html) =====
const iconosPasos = ['ti-check', 'ti-zoom-code', 'ti-tool', 'ti-package-export'];
let pasoActual = 1;

function animarTracker() {
  const ids = ['s1', 's2', 's3', 's4'];
  if (!document.getElementById('s1')) return; // solo corre en index
  pasoActual = (pasoActual + 1) % 4;
  ids.forEach(function(id, i) {
    const el  = document.getElementById(id);
    const dot = el.querySelector('.step-dot');
    if (i < pasoActual) {
      el.className = 'step done';
      dot.innerHTML = '<i class="ti ti-check"></i>';
    } else if (i === pasoActual) {
      el.className = 'step active';
      dot.innerHTML = '<i class="ti ' + iconosPasos[i] + '"></i>';
    } else {
      el.className = 'step idle';
      dot.innerHTML = '<i class="ti ' + iconosPasos[i] + '"></i>';
    }
  });
}
setInterval(animarTracker, 2200);

// ===== FORMULARIO DE RESERVAS =====
function enviarReserva() {
  const nombre   = document.getElementById('nombre')   ? document.getElementById('nombre').value.trim()   : '';
  const tel      = document.getElementById('tel')      ? document.getElementById('tel').value.trim()      : '';
  const servicio = document.getElementById('servicio') ? document.getElementById('servicio').value        : '';
  const fecha    = document.getElementById('fecha')    ? document.getElementById('fecha').value           : '';
  const horario  = document.getElementById('horario')  ? document.getElementById('horario').value         : '';

  if (!nombre)   { alert('Ingresá tu nombre.');           document.getElementById('nombre').focus();   return; }
  if (!tel)      { alert('Ingresá tu teléfono.');         document.getElementById('tel').focus();      return; }
  if (!servicio) { alert('Seleccioná el tipo de servicio.'); document.getElementById('servicio').focus(); return; }
  if (!fecha)    { alert('Seleccioná una fecha.');        document.getElementById('fecha').focus();    return; }
  if (!horario)  { alert('Seleccioná un horario.');       document.getElementById('horario').focus();  return; }

  document.getElementById('btn-reservar').style.display = 'none';
  document.getElementById('success-msg').style.display  = 'block';
}

// ===== FORMULARIO DE CONTACTO =====
function enviarContacto() {
  const nombre  = document.getElementById('nombre')  ? document.getElementById('nombre').value.trim()  : '';
  const tel     = document.getElementById('tel')     ? document.getElementById('tel').value.trim()     : '';
  const asunto  = document.getElementById('asunto')  ? document.getElementById('asunto').value         : '';
  const mensaje = document.getElementById('mensaje') ? document.getElementById('mensaje').value.trim() : '';

  if (!nombre)  { alert('Ingresá tu nombre.');    document.getElementById('nombre').focus();  return; }
  if (!tel)     { alert('Ingresá tu teléfono.');  document.getElementById('tel').focus();     return; }
  if (!asunto)  { alert('Seleccioná un asunto.'); document.getElementById('asunto').focus(); return; }
  if (!mensaje) { alert('Escribí tu mensaje.');   document.getElementById('mensaje').focus(); return; }

  document.getElementById('btn-contacto').style.display    = 'none';
  document.getElementById('success-contacto').style.display = 'block';
}