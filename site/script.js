let slideIndex = 0;

function mostrarSlide(n) {
    const slides = document.querySelectorAll('.carrossel-item');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    const container = document.querySelector('.carrossel-container');
    container.style.transform = translateX(-${slideIndex * 100}%);
}

function mudarSlide(n) {
    mostrarSlide(slideIndex + n);
}

// Inicializa o carrossel
mostrarSlide(slideIndex);