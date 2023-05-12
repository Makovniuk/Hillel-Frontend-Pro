//-----Створити масив, довжину та елементи якого задає користувач---////
newArray = [];
newArrayLength = parseInt(prompt('Please, length  of array!'));

for (i = 0; i < newArrayLength; i ++) {
   newArray.push(parseInt(prompt(
    'Please, enter the  elements array! Only numeric value!'))); 
}

document.write(`<p>Your original array: ${newArray}</p>`);

//----------Відсортувати масив за зростанням-----------//
for (n = 0; n < newArray.length; n++)
for (j = 0; j < newArray.length - 1; j++) {
  if (newArray[j] > newArray[j + 1]) {
    temp = newArray[j];
    newArray[j] = newArray[j + 1];
    newArray[j + 1] = temp;
  }
}

document.write(`<p>Your sorted array: ${newArray}</p>`);

//--------Видалити елементи з масиву з 2 по 4 (включно!)-----//
newArray.splice(2, 3);
document.write(`<p>Your final modified array: ${newArray}</p>`);
