const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

// Función para actualizar el carrusel
function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
}

// Función para pasar a la siguiente imagen
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

// Iniciar el carrusel y actualizar cada 3 segundos
setInterval(nextSlide, 1500);

// Inicializar posición del carrusel
updateCarousel();
