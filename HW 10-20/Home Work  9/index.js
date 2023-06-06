//1) Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5//
number = 20;

while (number <= 30) {
    document.write(`
    ${number} 
`);
    number += 0.5;
}

//2) Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів//
dollarExchange = 27;
numberOfDollars = 10;

while (numberOfDollars <= 100) {
    console.log(`Cost ${numberOfDollars} USD is: ${dollarExchange * numberOfDollars} UAH`);
    numberOfDollars += 10;
}

//3) Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.//
wholeNumberN = +prompt('Please, enter any whole number!');
count = 1;
squareCount = count * count;

while (count <= 100 && squareCount <= wholeNumberN) {
    console.log(count);
    count++;
    squareCount = count * count;
}

/*4) Дане ціле число. З'ясувати, чи є воно простим.
(простим називається число, більше 1, які не мають інших дільників крім 1 і себе)*/
wholeNumber = +prompt('Please, enter any whole number!');
divisor = 2;

while (wholeNumber > 1 && divisor < wholeNumber && wholeNumber % divisor != 0 ) {
    divisor++;
}

answer = divisor === wholeNumber
     ? 'This number is prime!'  
     : 'This number is NOT prime!';

console.log(answer);

/* 5) Дане деяке число. Визначити, чи можна одержати це число,
шляхом зведення числа 3 у деякий ступінь.
(Наприклад, числа 9, 81 можна отримати, а 13 - не можна)*/
number = +prompt('Please, enter any whole number!');
numberPower = null;

while (number % 3 === 0) {
    number /= 3;
    numberPower++;
}

answer = number === 1
     ? `The number can be get by raising to ${numberPower} power! ` 
     : 'Number can\'t get!';

console.log(answer);
