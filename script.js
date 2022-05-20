//variables & initialization
let firstValue = '';
let secondValue = '';
let operatorValue = '';
let decimalFlag = false;
let firstNumbDec = false;
let secondNumber = false;
let readoutValue = ' ';

function clear(){
    firstValue = '';
    secondValue = '';
    operatorValue = '';
    decimalFlag = false;
    secondNumber = false;
    firstNumbDec = false;
    readoutValue = ' ';
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
    secondValue = '';
    secondNumber = false;
    firstNumbDec == false? decimalFlag = false: decimalFlag = true;
    switch (operator) {
        case '+':
            firstValue = add(a, b);
            break;
        case '-':
            firstValue = subtract(a, b);
            break;
        case '*':
            firstValue = multiply(a, b);
            break;
        case '/':
            firstValue = divide(a, b);
    }
    firstValue *= 10000;
    Math.round(firstValue);
    firstValue /= 10000;
}

function director(e) {
    const dataType = this.dataset.type;
    console.log(dataType);
    switch (this.dataset.type) {
        case 'number':
            appendNumber(this.dataset.key);
            break;
        case 'operation':
            storeOperator(this.dataset.key);
            break;
        case 'decimal':
            appendDecimal()
            break;
        case 'eval':
            operate(firstValue, secondValue, operatorValue);
            console.log(firstValue);
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
            firstNumbDec = true;
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
        decimalFlag = false;
        console.log(operator);
    }
    else{
        operate(firstValue, secondValue, operatorValue);
        decimalFlag = false;
        operatorValue = operator;
        secondNumber = true;
    }
}

//listeners
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click',director));
buttons.forEach(button => button.addEventListener('click',fill));


//DOM editing

function fill(){
    
    
    if (secondNumber == false){
        readoutValue = firstValue;
    }
    else {
        readoutValue = secondValue;
    }
    document.getElementById('readout').innerHTML = readoutValue;
    
}