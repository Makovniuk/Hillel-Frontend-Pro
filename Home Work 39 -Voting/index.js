const smileImg = [
    {
        img: "https://www.svgrepo.com/show/382367/angry-emoji-emoticon-emoticons-expression-mad.svg",
    },
    {
        img: "https://www.svgrepo.com/show/382332/emoticon-emotion-expression-face-feeling-2.svg",
    },
    {
        img: "https://www.svgrepo.com/show/382342/emoticon-emotion-expression-face-glasses.svg",
    },
    {
        img: "https://www.svgrepo.com/show/382348/business-dollar-emoji-emoticon-finance-money.svg",
    },
    {
        img: "https://www.svgrepo.com/show/382339/emoticon-emoticons-emotion-expression-face-2.svg",
    },    
];

const block = document.querySelector('.block');

function renderSmile(array) {
  let allSmile = array
 .map((items) => {
    return `<div class="emoticons">
      <img class="img" src="${items.img}" alt="smile" height="100">
      <div class="counter">0</div>
    </div>`}).join('');

    block.innerHTML = allSmile;
};

renderSmile(smileImg);

const renderCouter = (counter, counter_element) => counter_element.innerText = counter;

function renderAfterClick() {
  const smile = document.querySelectorAll(".emoticons");
  smile.forEach((emoticons) => {
    const image = emoticons.querySelector(".img");
    const counter_element = emoticons.querySelector(".counter");
    let counter = 0;

    image.addEventListener("click", () => {
      renderCouter(++counter, counter_element);
    });
  });
}

renderAfterClick();
