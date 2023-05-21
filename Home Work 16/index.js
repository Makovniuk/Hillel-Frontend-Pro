arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function removeElement(array, item) {
	array.splice(array.indexOf(item), 1);
	return array;
}

removeElement(arrayNumbers, 10);

console.log(arrayNumbers);
