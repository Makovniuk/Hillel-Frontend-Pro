// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

function exponentiator(num, degree) {
  return (degree === 1) ? num : (num * exponentiator(num, degree - 1));
}
    
const resultExponent = exponentiator(3,6);
console.log(resultExponent);
