const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  arrayKey= [];
  for (let i = 0; i < length; i++) {
	arrayKey.push(characters.split('')[(Math.round(Math.random() * ((characters.length - 1) - 0) + 0))]);
  }

  return arrayKey.join('');
}

const key = generateKey(10, characters);
console.log(key);
