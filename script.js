let operand1 = 0;
let operand2 = 0;
let operator = '';

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
            return divide(operand1, operand2);
    }
}