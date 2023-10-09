// Obtener elementos HTML
var mostrarModalBtn = document.getElementById('mostrarModal');
var modal = document.getElementById('miModal');

// Mostrar la ventana modal cuando se hace clic en el botón
mostrarModalBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// Cerrar la ventana modal cuando se hace clic fuera de ella
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
