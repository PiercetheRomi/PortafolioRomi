let slideIndex = 0;
showSlide(slideIndex);

// Función para cambiar el slide
function moveSlide(n) {
    showSlide(slideIndex += n);
}

// Función para mostrar el slide actual
function currentSlide(n) {
    showSlide(slideIndex = n - 1);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const dots = document.querySelectorAll('.dot');

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Ocultar todas las imágenes
    slides.forEach((slide) => slide.style.display = 'none');

    // Quitar la clase activa de todos los puntos
    dots.forEach((dot) => dot.classList.remove('active'));

    // Mostrar la imagen actual y activar el punto correspondiente
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

// Avanzar automáticamente cada 3 segundos
setInterval(() => moveSlide(1), 3000);