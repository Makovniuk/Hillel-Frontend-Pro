const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
	arrayKeys= [];
	for (let i = 0; i < length; i++) {
		arrayKeys.push(characters.split('')[(Math.round(Math.random() * ((characters.length - 1) - 0) + 0))]);
	}
	return arrayKeys.join('');
}

const key = generateKey(10, characters);
console.log(key);
