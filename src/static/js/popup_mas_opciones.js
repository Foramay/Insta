// script.js
document.addEventListener("DOMContentLoaded", function() {
    const btnDropdown = document.getElementById("btnDropdown");
    const dropdown = document.getElementById("dropdown");

    function toggleDropdown() {
        dropdown.classList.toggle("show");
    }

    function closeDropdown(event) {
        if (!dropdown.contains(event.target) && event.target !== btnDropdown) {
            dropdown.classList.remove("show");
            document.removeEventListener("click", closeDropdown);
        }
    }

    btnDropdown.addEventListener("click", function(event) {
        event.stopPropagation(); // Evita que el clic llegue al documento
        toggleDropdown();
        document.addEventListener("click", closeDropdown);
    });
});
