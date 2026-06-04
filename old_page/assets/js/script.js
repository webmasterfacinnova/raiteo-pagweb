// Funciones simples para la pagina Raiteo
// Muestra y oculta el menu en pantallas pequenas
function toggleMenu() {
  var nav = document.getElementById('main-nav');
  if (nav.style.display === 'block') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
}
