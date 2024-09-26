function add(a, b){
    let sum = 0;
    sum = a + b;
    return sum;
}

function subtract(a, b){
    return (a - b);
}

function multiply(a, b){
    return (a * b);
}

function divide(a, b){
    return (a / b);
}

let firstNum = 0;
let secondNum = 0;
let operator = '';

function operate(num1, num2, op){
    op = operator;
    num1 = firstNum;
    num2 = secondNum;

    if (operator === '+'){
        return add(firstNum,secondNum);
    }

    else if (operator === '*' || operator === 'x'){
        return multiply(firstNum,secondNum);
    }

    else if (operator === '-'){
        return subtract(firstNum,secondNum);
    }

    else if (operator === '/'){
        return divide(firstNum,secondNum);
    }

    else return 'erorr, not a valid operator'
}

let numbers = document.querySelector(".numbers")
for (let i = 9; i >= 0; i--){
    let number = document.createElement("button");
    number.textContent = i;
    number.className = "number";
    numbers.appendChild(number);
}