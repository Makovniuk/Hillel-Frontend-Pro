function culculationSum() {
     let result = 0; 

     function addToResult(number) {
          result += number;
          return result;
     } 
     return addToResult;
}

let resultSumClosure = culculationSum();

console.log(resultSumClosure(10));
console.log(resultSumClosure(100));
console.log(resultSumClosure(150));
