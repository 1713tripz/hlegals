let slides=document.querySelector(".fourth-section-slides"),dots=document.querySelectorAll(".control-dot"),currentIndex=0;function moveSlide(e){currentIndex=e,slides.style.transform=`translateX(-${100*e}%)`,dots.forEach(e=>e.classList.remove("active")),dots[e].classList.add("active")}moveSlide(0);