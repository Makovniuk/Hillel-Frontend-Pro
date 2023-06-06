arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
debugger
function removeElement(array, item) {
	array.indexOf(item) === -1
	? console.log(`This array not changed, because element (${item}) not found in array! `)
	: array.splice(array.indexOf(item), 1);	
}

removeElement(arrayNumbers, 15);

console.log(arrayNumbers);



