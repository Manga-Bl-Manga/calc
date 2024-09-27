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

let currentShowed = '';
let textbar = document.querySelector(".result-bar")
textbar.textContent = currentShowed;
let firstNum = 0;
let secondNum = 0;
let operator = '';

let addButt = document.querySelector('.addButt')
addButt.addEventListener("click", () => {
    operator = '+';
    if (currentShowed !== ''){
        firstNum = parseInt(currentShowed);
    }
    currentShowed = ''
})

let minusButt = document.querySelector('.minusButt')
minusButt.addEventListener("click", () => {
    operator = '-';
    if (currentShowed !== ''){
        firstNum = parseInt(currentShowed);
    }
    currentShowed = ''
})

let multiButt = document.querySelector('.multiButt')
multiButt.addEventListener("click", () => {
    operator = '*';
    if (currentShowed !== ''){
        firstNum = parseInt(currentShowed);
    }
    currentShowed = ''
})

let divideButt = document.querySelector('.divideButt')
divideButt.addEventListener("click", () => {
    operator = '/';
    if (currentShowed !== ''){
        firstNum = parseInt(currentShowed);
    }
    currentShowed = ''
})


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

    else return currentShowed;
}

let numbers = document.querySelector(".numbers")

for (let i = 9; i >= 0; i--){
    let number = document.createElement("button");
    number.textContent = i;
    number.className = "number";
    number.addEventListener("click", () => {
        currentShowed += i;
        textbar.textContent = currentShowed;
        console.log(currentShowed);
        console.log("i was clicke" + i);
    })
    numbers.appendChild(number);
}

let clearButt = document.createElement("button")
clearButt.className = "number";
clearButt.textContent = "C";

let equalButt = document.createElement("button")
equalButt.className = "number";
equalButt.textContent = "=";

numbers.appendChild(clearButt)
numbers.appendChild(equalButt)



equalButt.addEventListener('click', () => {
    secondNum = parseInt(currentShowed);
    let result = operate(firstNum, secondNum, operator);
    currentShowed = result.toString();
    firstNum = result;
    textbar.textContent = currentShowed;
    console.log( 'current showed is: ' + currentShowed + ', firstNum is: ' + firstNum + ', secondNum is' + secondNum + operator)
    if(operator !== '')currentShowed = '';
    operator = ''; 
})

clearButt.addEventListener('click', () => {
    currentShowed = ''
    textbar.textContent = currentShowed;
    console.log(currentShowed + " " + textbar.textContent)
})