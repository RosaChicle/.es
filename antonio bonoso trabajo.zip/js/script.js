// script.js

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const avisoCookies = document.getElementById('aviso-cookies');
  const btnAceptarCookies = document.getElementById('btn-aceptar-cookies');

  // Mostrar/ocultar el menú en móvil
  menuToggle.addEventListener('click', function () {
    mainNav.classList.toggle('activo');
  });

  // Validación del formulario de contacto o presupuesto
  const formulario = document.querySelector('form');
  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      if (!formulario.checkValidity()) {
        e.preventDefault();
        alert('Por favor, rellena el formulario correctamente antes de enviar.');
      }
    });
  }

  // Gestión del aviso de cookies
  if (avisoCookies && btnAceptarCookies) {
    // Verificar si ya se aceptaron cookies
    if (localStorage.getItem('cookies-aceptadas') === 'true') {
      avisoCookies.style.display = 'none';
    }

    // Aceptar cookies
    btnAceptarCookies.addEventListener('click', function () {
      avisoCookies.style.display = 'none';
      localStorage.setItem('cookies-aceptadas', 'true');
    });
  }
});

