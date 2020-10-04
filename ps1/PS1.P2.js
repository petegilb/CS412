//ps1 problem 2

//determine the operator within the string (digit, operator, digit)
const evaluate = (expression) => {
    let operator = expression.slice(1,2);
    //since the string is fixed length we can just get the second index and use switch statement to see which one it is
    //based off the piazza post I am doing the second option: 'Don't parse the string fully, just return a function that matches the operator, and then later parse the string again and pass the values'
    //we return a function using that operator
    switch (operator){
        case '+':
            return (left, right) => left + right;
            break;

        case '-':
            return (left, right) => left - right;
            break;

        case '*':
            return (left, right) => left * right;
            break;

        case '^':
            return (left, right) => left ** right;
            break;

        case '/':
            return (left, right) => left / right;
            break;

        case '%':
            return (left, right) => left % right;
            break;
    }
    //otherwise return null
    return null;
}
module.exports = {evaluate};

//simple test
//const expression = '4+2';
//let operator = evaluate(expression);
//console.log(`${expression} = ${operator(4,2)}`);