// Arithmetic functions
function add(){
    return Math.round((num1+num2)*100)/100;
}

function subtract(){
    return Math.round((num1-num2)*100)/100;
}

function multiply(){
    return Math.round((num1*num2)*100)/100;
}

function divide(){
    return Math.round((num1/num2)*100)/100;
}

// To display the numbers
function display(number){
    const dis = document.querySelector('.display');
    dis.textContent = number;
}

// Operate function to call the arithmetic functions based on the operator
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

let number = ''; // To store input digits
let num1 = null; // To store first operand
let num2 = null; // To store second operand
let operator = ''; // To store the operator (+,-,X,/)

// What to do when number buttons are clicked
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        number += button.textContent;
        // Display every number pressed
        display(number);
    });
});

// What to do when operator buttons are clicked
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        // If the user has typed a number, convert it into a number
        if (number !== ''){
            // If num1 exists, assign the number provided by the user to num2
            if (num1 !== null){
                num2 = parseFloat(number);
                // The previous operation is done if it exists
                if (operator !== ''){
                    operate(operator);
                }
                // Clear input
                number = '';
            }else{
                // If num1 doesnot exist, assign the number to num1
                num1 = parseFloat(number);
                // Clear input
                number = '';
            }
        }
        // Store the operator based on the button pressed
        operator = button.textContent;
    });
});

// What to do when equals button is clicked
const equals = document.querySelector('.equals');
equals.addEventListener('click', () =>{
    // If the user has entered a number, store it in num2
    if (number !== ''){
        num2 = parseFloat(number);
    }
    // If there is an operator and a second number, do the operation
    if (operator && num2 !== null){
        operate(operator);
        // Clear the input and the operator after operation done
        number = '';
        operator = '';
    }  
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () =>{
    number = '';
    num1 = null;
    num2 = null;
    operator = '';
    display(0);
})