cardSuit = ['clubs','spades','diamonds','hearts'];
cardPictures = ['jack','queen','king','ace'];
cards = [];

for (i = 2; i <= 10; i++) {
  for (j = 0; j < cardSuit.length; j++) {
	cardInfo = `<div class="card__info">${i}<img src="images/${cardSuit[j]}.svg" alt="${cardSuit[j]}"></div>`;
	
	cards.push(`<div class="card">${cardInfo}${cardInfo}</div>`);
  }
}
	
for(i= 0; i < cardPictures.length; i++) {
  for(j = 0; j < cardSuit.length; j++) {
	cardInfo = `<div class="card__info">${cardPictures[i][0].toUpperCase()}
	<img src="images/${cardSuit[j]}.svg" alt="${cardSuit[j]}"></div>`;
	
	centerImg = cardPictures[i] !== 'ace' ? cardPictures[i] : cardSuit[j];
	
	cards.push(`<div class="card card--person">${cardInfo}
	<img class="person" src="images/${centerImg}.svg" alt="${centerImg}">${cardInfo} </div>`);
  }
}
	
document.write(`<div class=wrapper>${cards.join(``)}</div>`);
