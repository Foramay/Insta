document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("open-offcanvas");
    const offcanvas = document.getElementById("offcanvas-notificaciones");

    // Abre el offcanvas cuando se hace clic en el botón "Abrir Notificaciones"
    openButton.addEventListener("click", function (event) {
        offcanvas.style.left = "0";
        event.stopPropagation(); // Evita que el clic se propague al documento
    });

    // Cierra el offcanvas cuando se hace clic en cualquier otro lugar del documento
    document.addEventListener("click", function () {
        offcanvas.style.left = "-300px";
    });

    // Evita que los clics dentro del offcanvas lo cierren
    offcanvas.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que el clic se propague al documento
    });
});
