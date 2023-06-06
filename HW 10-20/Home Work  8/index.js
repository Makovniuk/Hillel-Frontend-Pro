//------Вивести на сторінку в один рядок через кому числа від 10 до 20-------//
number = 10;

while (number <= 20) {
    document.write(`
    ${number},
`);
    number++;
}

// -------Вивести квадрати чисел від 10 до 20---------//
number = 10;

while (number <= 20) {
    console.log(` ${number * number}
`);
    number++;
}

//------------Вивести таблицю множення на 7 ---------//
firstNumber = 1;
secondNumber = 7;

while (firstNumber <= 10) {
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} `);
  firstNumber++
}

//-------Знайти суму всіх цілих чисел від 1 до 15---------//
number = 1;
sum = 0;

while (number <= 15) {
    sum = sum + number; 
    number++;  
}
console.log(sum);

//-----Знайти добуток усіх цілих чисел від 15 до 35------//
number = 15;
product = 1;

while (number <= 35) {
    product = product * number; 
    number++;
}
console.log(product);

//-----Знайти середнє арифметичне всіх цілих чисел від 1 до 500----//
number = 1;
sum = 0;

while (number <= 500) {
    sum = sum + number; 
    number++;
}
console.log(`Arithmetic mean is: ${sum / 500} `);

// // //-----Вивести суму лише парних чисел в діапазоні від 30 до 80.----//
number = 30;
sum = 0;

while (number <= 80) {
    if (number%2 === 0) {
    sum = sum + number; 
}
    number++;  
}
console.log(sum);

// //-----Вивести всі числа в діапазоні від 100 до 200 кратні 3..----//
count = 100;

while (count <= 200) {
    if (count%3 === 0) {
    console.log(count);  
}
    count++;  
}

//-----Дано натуральне число. Знайти та вивести на сторінку всі його дільники.----//
//-----Визначити кількість його парних дільників.---//
//---Знайти суму його парних дільників.----//
naturalNumber = prompt('Please, enter any natural number!');
divisor = 1;
sumEvenDivisor = 0;

while (divisor <= naturalNumber) {
   if (naturalNumber%divisor === 0 ) {
      document.write(`<p>${divisor} </p>`);
   }
   if (naturalNumber%divisor === 0 && divisor%2 === 0) {
      console.log(divisor);
      sumEvenDivisor = sumEvenDivisor + divisor;
   }
    divisor++;
}
console.log(`The sum of even divisors of a natural number ${naturalNumber} is ${sumEvenDivisor}`);

// //-Надрукувати повну таблицю множення від 1 до 10..----//
firstNumber = 1;
secondNumber = 1;
   
while (firstNumber <= 10) {
      console.log(`${firstNumber} * 1 = ${firstNumber}`);

    while (secondNumber < 10) {
        secondNumber++;
        multiply = firstNumber * secondNumber;
        console.log(`${firstNumber} * ${secondNumber} = ${multiply}`);
    }
      firstNumber++;
      secondNumber = 1;
      console.log(" ");
}
