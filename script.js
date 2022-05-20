//variables & initialization
let firstValue = '';
let secondValue = '';
let operatorValue = '';
let decimalFlag = false;
let secondNumber = false;

function clear(){
    firstValue = '';
    secondValue = '';
    operatorValue = '';
    decimalFlag = false;
    secondNumber = false;
}




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

function director(e) {
    const dataType = this.dataset.type;
    console.log(dataType);
    switch (this.dataset.type) {
        case 'number':
            appendNumber(this.dataset.key)
            break;
        case 'operation':
            storeOperator(this.dataset.key)
            break;
        case 'decimal':
            appendDecimal()
            break;
        case 'eval':
            operate(a, b, operatorValue)
            break;
        case 'clear':
            clear();
            break;
    }
}

function appendNumber(numb){
    if (secondNumber == false){
        firstValue += numb;
        console.log(firstValue);
    }
    else {
        secondValue += numb;
        console.log(secondValue);
    }
}

function appendDecimal(){
    if (decimalFlag == false){
        if (secondNumber == false){
            firstValue += '.';
            console.log(firstValue);
        }
        else {
            secondValue += '.';
        }
        decimalFlag = true;
    }
}

function storeOperator(operator){
    if (secondNumber == false){
    operatorValue = operator;
    secondNumber = true;
    console.log(operator);
    }
}


//listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',director));


//DOM editing



