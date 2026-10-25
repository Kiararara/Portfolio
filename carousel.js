//Hamburger 
function myFunction(element) {
    element.classList.toggle("change");
    const mobileElement = document.querySelector("#mobile");
    mobileElement.classList.toggle("show");
  }
  
  const mobileElement = document.querySelector("#mobile");
  mobileElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        mobileElement.classList.remove("show");
        document.querySelector("#hamburger").classList.remove("change");
    }
  });
  
//Carousel
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);