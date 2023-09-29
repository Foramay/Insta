//Acá vamos a dejar todo el código JavaScript
// Obtén una referencia al elemento de búsqueda y al offcanvas


// Obtén una referencia al elemento de búsqueda y al offcanvas
const botonBuscar = document.querySelector('.abrir-offcanvas');
const offcanvas = document.querySelector('.offcanvas');

// Función para abrir el offcanvas
function abrirOffcanvas() {
    offcanvas.style.left = '0';
    document.body.style.overflow = 'hidden'; // Deshabilita el desplazamiento de fondo
}

// Función para cerrar el offcanvas
function cerrarOffcanvas() {
    offcanvas.style.left = '-300px';
    document.body.style.overflow = ''; // Habilita el desplazamiento de fondo nuevamente
}

// Agrega un controlador de clic al botón de búsqueda para abrir el offcanvas
botonBuscar.addEventListener('click', function (event) {
    event.stopPropagation(); // Evita que el clic se propague al contenedor del offcanvas
    abrirOffcanvas();
});

// Agrega un controlador de clic al documento para cerrar el offcanvas cuando se hace clic fuera de él
document.addEventListener('click', function (event) {
    if (!offcanvas.contains(event.target) && event.target !== botonBuscar) {
        cerrarOffcanvas();
    }
});




//Offcanvas de buscar
var textarea = document.querySelector(".textarea-offcanvas-buscar");

textarea.addEventListener("input", function () {
    this.style.paddingTop = "10px"; // Ajusta el valor según sea necesario
    this.style.lineHeight = "10px"; // Ajusta el valor para que coincida con el paddingTop
});

textarea.addEventListener("blur", function () {
    this.style.paddingTop = ""; // Restaura el valor predeterminado
    this.style.lineHeight = ""; // Restaura el valor predeterminado
});
