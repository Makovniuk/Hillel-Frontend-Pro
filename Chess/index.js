TRs  = [];
alphabet = 'abcdefgh';
figures = ['rook', 'horse', 'bishop', 'queen', 'king'];
figures = figures.concat(figures.slice(0, 3).reverse())
console.log(figures);

for (tr = 10; tr >= 1; tr--) {
	TDs = [];
	color = tr > 5 ? 'black' : 'white';

	for (td = 1; td <= 10; td++) {
		data = '';
		if ((td === 1 || td === 10) && tr !== 1 && tr !== 10) {
			data = tr -1;
		}

		if ((tr ===1 || tr === 10) && td !== 1 && td !== 10 ) {
			data = alphabet[td-2]
		}

		if ((tr === 3 || tr === 8) && td !== 1 && td!== 10) {
			data = `<img src="images/chess/${color}/pawn.svg" alt="pawn">`
		}

		if ((tr === 2 || tr === 9) && td !== 1 && td!== 10) {
			data = `<img src="images/chess/${color}/${figures[td-2]}.svg" alt="pawn">`
		}
	 TDs.push(`<td>${data}</td>`);
	}

	TRs.push(`<tr>${TDs.join('')}</tr>`);
}

document.write(`<table class='chess'>${TRs.join('')}</table>`)
