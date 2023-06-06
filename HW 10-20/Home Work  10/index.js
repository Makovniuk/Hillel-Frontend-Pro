do {
    arithmeticOperand = prompt(
        'Please choose which mathematical operation you want to do! ( +, -, *, / )');  
} while (arithmeticOperand !== '+' && arithmeticOperand !== '-' 
    && arithmeticOperand !== '*' && arithmeticOperand !== '/');
    
do {
    numberOfOperands = parseInt(prompt(
        'How many operands do you want to use? (Enter more than 1 and less than 7)'));

} while (isNaN(numberOfOperands) || numberOfOperands < 2  || numberOfOperands > 6);

count = 0;
result = 0;

do {
    count++;

    do {
        number = parseInt(prompt('Please, enter number!'));
    } while (isNaN(number));

    switch (arithmeticOperand) {
        case '+':
            result += number;
            break;
        case '-':
            result = count === 1 ? number : result - number;
            break;
        case '*':
            result = count === 1 ? number : result * number;
            break;
        case '/':
            result = count === 1 ? number : result / number;
            break;
    }

} while (count < numberOfOperands);

alert(result);
