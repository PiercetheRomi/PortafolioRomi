// Toggle del menú hamburguesa en pantallas pequeñas
function toggleMenu() {
    const menuList = document.getElementById("menu-list");
    menuList.classList.toggle("show");
}

// Toggle del submenú en el botón Proyectos
function toggleDropdown() {
    const dropdownContent = document.querySelector(".dropdown .dropdown-content");
    dropdownContent.classList.toggle("show-dropdown");
}
