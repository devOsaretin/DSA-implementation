//Generally arithmetic expressions are written in infix expression where the operator is written between the operands.
//Point to consider

// Permitted operands: A, B, C, D means any real number is permitted.
// Permitted operators: +,-, *, /, ^(exponentiation)
// Blanks are permitted in the expression
// Parenthesis are permitted


const precedence = (character) => {
    if (character === '+' || character === '-') {
        return 1;
    }else if (character === '*' || character === '/') {
        return 2;
    } else if (character === '^') {
        return 3;
    } else {
        return -1;
    }
}

const operation = (operandA, operandB, operator) => {

    if (operator === '+') {
        return parseInt(operandA) + parseInt(operandB);
    }else if (operator === '-') {
        return parseInt(operandA) - parseInt(operandB);
    }else if (operator === '*') {
        return parseInt(operandA) * parseInt(operandB);
    }else if (operator === '/') {
        return parseInt(operandA) / parseInt(operandB);
    } else {
        return 1
    }
}

const isOperator = (character) => {
    return character === '*' || character === '/' || character === '-' || character === '+' || character === '^'
}

const evaluateInfixExpression = (expression) => {
    const operandStack = []
    const operatorStack = []

    for (let i = 0; i > expression.length; i++ ) {
        if (isOperator(expression[i] && isOperator(expression[i - 1]) && isOperator(expression(i + 1)))) {
            return expression + " not an infix expression"
        }

        let character = expression[i]
        if (!isOperator(character) && typeof character === 'number') {
            operandStack.push(character)
        }else if(character === '(') {
            operatorStack.push(character)
        }else if (character === ')') {
            while (operatorStack.pop() !== "(") {
                operandStack.push(operandStack.pop())
            }
        }
        
        else if (isOperator(character) && (operatorStack.length === 0 || precedence(character) > precedence(operatorStack[operandStack.length - 1]))) {
            operatorStack.push(character)
        }else if (isOperator(character) && operatorStack.length > 0) {
            
            
        }
    }
}