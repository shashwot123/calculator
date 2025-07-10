function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

let number = '';
let num1 = null;
let num2 = null;
let operator = '';

// What to do when number buttons are clicked
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        number += button.textContent;
    });
});

// What to do when operator buttons are clicked
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        if (button.textContent == '+'){
            operator = '+';
        } else if (button.textContent == '-'){
            operator = '-';
        } else if (button.textContent == 'X'){
            operator = 'X';
        } else if (button.textContent == '/'){
            operator = '/';
        } 
        if (num1){
            num2 = parseInt(number);
            number = '';
        }else{
            num1 = parseInt(number);
            number = '';
        }
        console.log(num1, num2);
    });
});

// What to do when equals button is clicked
const equals = document.querySelector('.equals');
equals.addEventListener('click', () =>{
    if (!num2){
        num2 = parseInt(number);
        number = '';
    }
    if (operator == '+'){
        num1 = add(num1,num2);
        num2 = null;
        console.log(num1);
    }
    if (operator == '-'){
        num1 = subtract(num1,num2);
        num2 = null;
        console.log(num1);
    }
    if (operator == 'X'){
        num1 = multiply(num1,num2);
        num2 = null;
        console.log(num1);
    }
    if (operator == '/'){
        num1 = divide(num1,num2);
        num2 = null;
        console.log(num1);
    }
});