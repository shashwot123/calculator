function add(){
    return num1+num2;
}

function subtract(){
    return num1-num2;
}

function multiply(){
    return num1*num2;
}

function divide(){
    return num1/num2;
}

// To display the numbers
function display(number){
    const dis = document.querySelector('.display');
    dis.textContent = number;
}

function operate(operator){
    if (operator == '+'){
        num1 = add();
    }
    if (operator == '-'){
        num1 = subtract();
    }
    if (operator == 'X'){
        num1 = multiply();
    }
    if (operator == '/'){
        num1 = divide();
    }
    display(num1);
    num2 = null;
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
        // Display every number pressed
        display(parseInt(number));
    });
});

// What to do when operator buttons are clicked
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        if (num1 !== null){
            num2 = parseInt(number);
            if (operator != ''){
                operate(operator);
            }
            number = '';
        }else{
            num1 = parseInt(number);
            number = '';
        }
        
        operator = button.textContent;
    });
});

// What to do when equals button is clicked
const equals = document.querySelector('.equals');
equals.addEventListener('click', () =>{
    if (!num2){
        num2 = parseInt(number);
        number = '';
    }
    operate(operator);
});