// script.js

const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

let currentInput = '0';
let lastOperator = '';
let result = null;

function updateScreen() {
    currentOperationScreen.textContent = currentInput;
}

function handleButtonClick(value) {
    if (value === 'C') {
        currentInput = '0';
    } else if (value === '=') {
        // Implement calculation logic (add, subtract, multiply, divide)
        // Example: Evaluate the expression and update currentInput
        // You can use eval() for simplicity, but consider safer alternatives
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = 'Error';
        }
    } else {
        currentInput += value;
    }
    updateScreen();
}

// Add event listeners to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        handleButtonClick(button.textContent);
    });
});
