const precedence = (character) => {
    if (character === '+' || character === '-') {
        return 1;
    }else if (character === '*' || character === '/') {
        return 2;
    } else if (character === '^') {
        return 3;
    } else if(character === '(') {
        return 0;
    }
}

const precedenceDict = {
	'(':0,
	'+':1,
	'-':1,
	'*':2,
	'/':2
};

const operation = (operandA, operandB, operator) => {


    if (operator === '+') {
        return parseInt(operandA) + parseInt(operandB);
    }else if (operator === '-') {
        return parseInt(operandA) - parseInt(operandB);
    }else if (operator === '*') {
        return parseInt(operandA) * parseInt(operandB);
    }else if (operator === '/') {
        if(operandA === 0) return 0
        return parseInt(operandA) / parseInt(operandB);
    } else {
        return 1
    }
}

const isOperator = (character) => {
    return character === '*' || character === '/' || character === '-' || character === '+' || character === '^'
}


const convertInfixToPostFixExpression = (expression) => {
     expression = expression.replace(/\s/g, '');
    const operatorStack =  [];
    const postFixStack = [];

    for (let i = 0; i < expression.length; i++) {
        
        let character = expression[i];

        if (!isOperator(character) && character !== '(' && character !==')') {
            postFixStack.push(character)
        }
         if (character ==='(') {
            operatorStack.push(character)
        }
        if (isOperator(character) && operatorStack.length === 0) {
            operatorStack.push(character)
        }
         if (isOperator(character) && operatorStack.length > 0) {
            if (precedence(character) > precedence(operatorStack[operatorStack.length - 1])) {
                operatorStack.push(character)
            }

            if (precedence(character) <= precedence(operatorStack[operatorStack.length - 1])) {
                let pop = operatorStack.pop()
                while(precedence(character) < precedence(pop)) {
                    postFixStack.push(pop)
                }
                operatorStack.push(character)
            }

            
        }
         if (character === ')') {
            while(true) {
                let topElementOfOperatorStack = operatorStack.pop()
                if(topElementOfOperatorStack === '(') break;
                postFixStack.push(topElementOfOperatorStack)

            }
        }
        
    }

    return postFixStack.join('')

}


const evaluatePostFixExpression = (expression) => {
    expression = expression.replace(/\s/g, "")
    const operandStack = []
    for (let i = 0; i < expression.length; i++) {
        let character = expression[i]
        if (!isOperator(character)) {
            operandStack.push(character)
        }else {
            let [a, b] = operandStack.splice(-2)
            operandStack.push(operation(a, b, character))
        }
    }

    return operandStack.pop()
}





// const infixExpression = "(AX+(B*C))"
// const infixExpression2="( ( A + B ) * ( C + E ) ) "
// console.log(convertInfixToPostFixExpression(infixExpression))
// console.log(convertInfixToPostFixExpression(infixExpression2))
// console.log(convertInfixToPostFixExpression("((AX+(B*CY))/(DE))"))
// console.log(convertInfixToPostFixExpression("( ( H * ( ( ( ( A + ( ( B + C ) * D ) ) * F ) * G ) * E ) ) + J ) "))
// console.log(convertInfixToPostFixExpression("( AX * ( BX * ( ( ( CY + AY ) + BY ) * CX ) ) ) "))

//console.log(convertInfixToPostFixExpression('562+*1241'))

//console.log(convertInfixToPostFixExpression("9+3*5/(10-4)"))

console.log(convertInfixToPostFixExpression('(a/(b-c+d))*(e-a)*c'))