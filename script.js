//variables
let firstValue = '';
let secondValue = '';
let operatorValue = '';
let decimalFlag = false;


//functions

function add(a, b){
    decimalFlag = false;
    return a + b;
}

function subtract(a, b){
    decimalFlag = false;
    return a - b;
}

function multiply(a, b){
    decimalFlag = false;
    return a * b;
}

function divide(a, b){
    decimalFlag = false;
    if (b === 0){
        return "can't divide by 0";
    }
    return a / b;
}

function convert(a){
    let temp = parseFloat(a);
    return temp;
}


function operate(a, b, operator){
    a = convert(a);
    b = convert(b);
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
    }
}