const slides = document.querySelector('.fourth-section-slides');
const dots = document.querySelectorAll('.control-dot');
let currentIndex = 0;

function moveSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

moveSlide(0); // Установить первый слайд активным