// 1)Дано масив з елементами різних типів. 
// // Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// newArray = [25, 60, true, 'string', false, 15, null, undefined, 500, -360];

// function calcArithmeticMean(array) {
//    let count = 0;
//    let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//       count++;
//       sum += array[i];
//     }
//   }

//   return sum / count;
// }

// const ArithmeticMean = calcArithmeticMean(newArray);
// console.log(ArithmeticMean);


//2)Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// //Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
// debugger

// function doMath(x, znak, y) {
//  x = +prompt('Enter first number!');
//  znak = prompt('Enter  mathematical operation: +, -, *, /, %, ^ ');
//  y = +prompt('Enter second number!');

//  let result;

//   switch (znak) {
//       case "+":
//           result = x + y;
//           break;
//       case "-":
//           result = x - y;
//           break;
//       case "*":
//           result = x * y;
//           break;
//       case "/":
//           result = x / y;
//           break;  
//       case "%":
//           result = x % y;
//           break;
//       case "^":
//           result = Math.pow(x,y);
//           break; 
//       default:
//         result = 'Sorry, you entered not correct values!'       
//   }

//   return result;
// }

// let resultDoMath = doMath();
// console.log(resultDoMath);

// 3)Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач. 
// // Значення всіх елементів всіх масивів задає користувач.


// function sum(number) {
//     let values = number;
//     function ader() {


//     }
// 