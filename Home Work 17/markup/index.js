cardSuit = ['clubs','spades','diamonds','hearts'];
// pictures = ['jack','queen','king','ace'];
// cards = [];

// TDs = [];
// for (i = 2; i <)
TRs  = [];
for (tr = 1; tr <= 7; tr++) {
	TDs = [];
	cardSuit = ['clubs','spades','diamonds','hearts'];
    pictures = ['jack','queen','king','ace'];
    cards = [];

	for (td = 2; td < 10; td++) {
		if ( td ===2 || td===6){
	cardInfo = `<div class="card__info">${td}<img src="images/${cardSuit[0]}.svg" alt="${cardSuit[0]}"></div>`;	
		}
	 TDs.push(`<td><div class="card">
	          ${cardInfo}
	          ${cardInfo}
	     </div></td>`);
	}

	TRs.push(`<tr>${TDs.join('')}</tr>`);
	}


document.write(`<table class="wrapper"'>${TRs.join('')}</table>`)

// suit =['clubs','spades','diamonds','hearts'];
// picture = ['jack','queen','king','ace'];
// cards = [];
// TRs = [];

// for (i = 2; i< = 10; i++) {
//     for (j = 0; j < suit.length; j++) {
//         cardInfo = `<div class="card__info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`;

//     cards.push(`<div class="card">
//         ${cardInfo}
//         ${cardInfo}
//     </div>`);
//     }
// }

// for(i=0; i<picture.length; i++){
//     for(j=0; j<suit.length; j++){
//         cardInfo=`<div class="card__info">
//             ${picture[i][0].toUpperCase()}
//             <img src="images/${suit[j]}.svg" alt="${suit[j]}">
//         </div>`;

//         centerImg = picture[i] !== 'ace' ? picture[i] : suit[j];

//         cards.push(`<div class="card card--person">
//             ${cardInfo}
//             <img class="person" src="images/${centerImg}.svg" alt="${centerImg}">
//             ${cardInfo}
//         </div>`);
//     }
// }

// document.write(`<div class=wrapper>${cards.join(``)}</div>`);