const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const numberOfSlides = 9;
let slideIndex = 1;

prevButton.style.display = 'none';

function renderSlideImage(slideIndex) {
  const slideImage = document.createElement('img');

  slideImage.setAttribute('src', `imageJS/${slideIndex}.png`);
  slider.append(slideImage);
};

function checkForButton() {
    if(slideIndex !== numberOfSlides) {
        nextButton.style.display = 'block'; 
    }

    if(slideIndex === 1) {
        prevButton.style.display = 'none'; 
    }

    if(slideIndex === numberOfSlides) {
        nextButton.style.display = 'none'; 
    }

    if(slideIndex > 1) {
        prevButton.style.display = 'block'; 
    } 
};

function showPreviousSlide() { 
    slider.innerHTML = '';
    slideIndex = (slideIndex - 1);

    renderSlideImage(slideIndex);
    checkForButton();
};

function showNextSlide() {
    slider.innerHTML = '';
    slideIndex = (slideIndex + 1);

    renderSlideImage(slideIndex);
    checkForButton(); 
};

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

renderSlideImage(slideIndex);
