const imageBlock = document.querySelector('.image-block');
const renderButton = document.querySelector('.button'); 

function renderRandomImage() {
  const randomNumberImg = Math.floor(Math.random() * (9 - 1)) + 1;
  const randomImage = document.createElement('img');

  randomImage.classList.add('.image');
  randomImage.setAttribute('src', `imageJS/${randomNumberImg}.png`);

  imageBlock.append(randomImage);

  return randomImage;
};

renderButton.addEventListener('click', () => {
  imageBlock.innerHTML = '';

  renderRandomImage();
});
