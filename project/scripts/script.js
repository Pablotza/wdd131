const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function updateCarousel() {
    const offset = -currentSlide * 100;
    slides.forEach(slide => slide.style.transform = `translateX(${offset}%)`);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

setInterval(nextSlide, 3000);
