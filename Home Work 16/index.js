// arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// debugger
// function removeElement(array, item) {
// 	array.indexOf(item) === -1
// 	? console.log(`This array not changed, because element (${item}) not found in array! `)
// 	: array.splice(array.indexOf(item), 1);	
// }

// removeElement(arrayNumbers, 15);

// console.log(arrayNumbers);

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

function generateKey(length, characters) {
	arrayKey = [];
	for (i = 0; i < length; i++) {
		arrayKey.push(characters.split('')[(Math.round(Math.random() * (characters.length-1 - 0) + 0))]);
	}
	// return arrayKey.join('')
}
const key = generateKey(20, characters);
console.log(key);
// const key = generateKey(20, characters);
// console.log(key);
// kk = characters.split('')
// kk = characters.indexOf[(Math.round(Math.random() * (characters.length-1 - 0) + 0))]
// console.log(kk);


// function getRandomArbitrary(min, max) {
// 	return Math.round(Math.random() * (max - min) + min);
//   }
//   console.log(characters.length)
//   console.log (getRandomArbitrary(0, 4))


