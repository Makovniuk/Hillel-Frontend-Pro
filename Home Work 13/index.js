newArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(newArray);

//1)--------Знайти суму та кількість позитивних елементів.-------//
resultSumPositiNumber = 0;
countPositivNumber = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > 0) {
        resultSumPositiNumber += newArray[i];
        countPositivNumber++;
    }
}

console.log(`Sum of positive number of array is: ${resultSumPositiNumber}`);
console.log(`Count of positive number of array is: ${countPositivNumber}`);

//2)-----Знайти мінімальний елемент масиву та його порядковий номер.----//
minElement = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] < minElement) {
        minElement = newArray[i];
    }       
}

serialNumberMinElement = newArray.indexOf(minElement);

console.log(`Mimimal elenment of array is: ${minElement}`);
console.log(`Serial number minimal element of array is: ${serialNumberMinElement}`);

//3)----Знайти максимальний елемент масиву та його порядковий номер.----//
maxElement = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > maxElement) {
        maxElement = newArray[i];
    }       
}

serialNumberMaxElement = newArray.indexOf(maxElement);

console.log(`Maximum elenment of array is: ${maxElement}`);
console.log(`Serial number maximum element of array is: ${serialNumberMaxElement}`);

//4)---------Визначити кількість негативних елементів.--------//
countNegativeElements = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] < 0) {
        countNegativeElements++;
    }
}

console.log(`Count of negative elements of array is: ${countNegativeElements}`);

//5)---------Знайти кількість непарних позитивних елементів.--------//
countUnpairPositiveElements = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > 0 && newArray[i] % 2 !== 0) {
        countUnpairPositiveElements ++;
    }
}

console.log(`Count of positive unpair  elements of array is: ${countUnpairPositiveElements}`);

//6)---------Знайти кількість парних позитивних елементів.-------//
countPairPositiveElements = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > 0 && newArray[i] % 2 === 0) {
        countPairPositiveElements++;
    }
}

console.log(`Count of positive pair  elements of array is: ${countPairPositiveElements}`);

//7)---------Знайти суму парних позитивних елементів..-------//
sumPairPositiveElements = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > 0 && newArray[i] % 2 === 0) {
        sumPairPositiveElements += newArray[i];
    }
}

console.log(`Sum of positive pair  elements of array is: ${sumPairPositiveElements}`);

//8)---------Знайти суму непарних позитивних елементів.-------//
sumUnpairPositiveElements = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > 0 && newArray[i] % 2 !== 0) {
        sumUnpairPositiveElements += newArray[i];
    }
}

console.log(`Sum of positive unpair  elements of array is: ${sumUnpairPositiveElements}`);

//9)---------Знайти добуток позитивних елементів..-------//
multiplyPositiveElements = 1;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > 0) {
        multiplyPositiveElements *= newArray[i];
    }
}

console.log(`Sum of positive unpair  elements of array is: ${multiplyPositiveElements}`);

//10)---------Знайти найбільший серед елементів масиву, остальні обнулити.-------//
maxElement = 0;

for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > maxElement) {
        maxElement = newArray[i];
    }       
}

newArray2 = [];
for (i = 0; i < newArray.length; i++) {
    newArray[i] !== maxElement 
    ? newArray2.push(newArray[i] = 0)
    : newArray2.push(newArray[i]);         
}

console.log('Your new zeroed array:', newArray2);
