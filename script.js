let operand1 = "";
let operand2 = "";
let operator = "";

function operate(operator, operand1, operand2) {
    function add(operand1, operand2) {
        return operand1 + operand2;
    }
    
    function subtract(operand1, operand2) {
        return operand1 - operand2;
    }
    
    function multiply(operand1, operand2) {
        return operand1 * operand2;
    }
    
    function divide(operand1, operand2) {
        return operand1 / operand2;
    }

    switch (operator) {
        case '+':
            return add(operand1, operand2);
        case '-':
            return subtract(operand1, operand2);
        case '*':
            return multiply(operand1, operand2);
        case '/':
            if (operand2 === 0) {
                alert("You can't divide by zero!");
            }
            return divide(operand1, operand2);
    }
}

let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            let number = button.textContent;
            if (operator === '') {
                if (operand1 === '0') {
                    operand1 = number;
                } else {
                    operand1 += number;
                }
                display.textContent = operand1;
            } else {
                if (operand2 === '') {
                    operand2 = number;
                } else {
                    operand2 += number;
                }
                display.textContent = operand2;
            }
        } else if (button.classList.contains('operator')) {
            switch (button.textContent) {
                case '+':
                    operator = '+';
                    break;
                case '-':
                    operator = '-';
                    break;
                case '*':
                    operator = '*';
                    break;
                case '/':
                    operator = '/';
                    break;
            }
        } else if (button.classList.contains('equal')) {
            let result = operate(operator, parseInt(operand1), parseInt(operand2));
            operand1 = "" + result;
            operand2 = "";
            operator = "";
            display.textContent = operand1;

            if (result === Infinity || result === -Infinity || isNaN(result)) {
                operand1 = "";
                display.textContent = "0";
            }
        } else if (button.classList.contains('clear')) {
            operand1 = "";
            operand2 = "";
            operator = '';
            display.textContent = "0";
        }
    });
});