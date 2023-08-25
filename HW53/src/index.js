import Sum from "./components/sum.js";
import Multiplication from "./components/multiplication.js";
import Division from "./components/division.js";
import Subtraction from "./components/subtraction.js";

const calculatorSum = new Sum(20, 20);
const calculatorMulti = new Multiplication(2, 2);
const calculatorDiv = new Division(100, 20);
const calculatorSub = new Subtraction(100, 50);

console.log(`
   Result sum: ${calculatorSum.sum()};
   Result muliplication: ${calculatorMulti.multiplication()};
   Result division: ${calculatorDiv.division()};
   Result subtraction: ${calculatorSub.subtraction()};
`);
