/*let slideIndex = 0;
let slides, dots;

function initSlides() {
    slides = document.getElementsByClassName("testimonial");
    dots = document.getElementsByClassName("dot");
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(true);
}

function showSlides(manual = false) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
    if (!manual) {
        setTimeout(showSlides, 3000); // Muda o slide a cada 3 segundos
    }
}

document.addEventListener("DOMContentLoaded", initSlides);*/

function handleScrollAnimations() {
  const leftElements = document.querySelectorAll('.lado-esquerdo');
  const rightElements = document.querySelectorAll('.lado-direito');
  const cardItems = document.querySelectorAll('.card-item'); // Seleciona os cards
  
  const animateElement = (element, animationClass) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
      element.classList.add(animationClass);
      element.style.visibility = 'visible'; // Garante que o elemento fique visível
    }
  };

  leftElements.forEach(el => animateElement(el, 'slide-in-left'));
  rightElements.forEach(el => animateElement(el, 'slide-in-right'));
  cardItems.forEach(el => animateElement(el, 'slide-in-card')); // Animação para card-item
}

// Executa na abertura da página
handleScrollAnimations();

// Continua verificando durante o scroll
window.addEventListener('scroll', handleScrollAnimations);
