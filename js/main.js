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


//carrusel//

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Función para mover el carrusel
const moveToSlide = (track, currentIndex) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
};

// Evento de clic en "siguiente"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(track, currentIndex);
});

// Evento de clic en "anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(track, currentIndex);
});

// Ajuste del carrusel al redimensionar la ventana
window.addEventListener('resize', () => {
    moveToSlide(track, currentIndex);
});
