let screen = document.getElementById('screen');
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    screen.value = '';
});
let button = document.getElementsByTagName('button');

function calculate(input) {
    /* Replacing the operators with a comma and the operator. */
    const text = input.replace(/[\^+*\/-]/g, (x) => {
        return `,${x},`;
    })
    console.log(text);
    /* Splitting the string into an array. */
    const tokens = text.split(",");

    // Initialize the result variable to 0
    let result = 0;

    // Initialize the operator variable to null
    let operator = null;
    console.log(tokens);
    // Loop through the tokens
    for (const token of tokens) {
        // Check if the token is an operator
        if (token === '/' || token === '*' || token === '+' || token === '-' || token === '^') {
            // If it is, set the operator variable to the token
            operator = token;
        } else {
            // If it's not an operator, it's a number
            // Convert the token to a number and store it in a variable
            const num = Number(token);

            // If the operator variable is null, set the result to the number
            if (operator === null) {
                result = num;
            } else {
                // If the operator variable is not null, perform the operation
                // and set the result to the result of the operation
                if (operator === '/') {
                    result /= num;
                } else if (operator === '*') {
                    result *= num;
                } else if (operator === '+') {
                    result += num;
                } else if (operator === '-') {
                    result -= num;
                } else if (operator === '^') {
                    result **= num;
                }

                // Reset the operator variable to null
                operator = null;
            }
        }
    }
    // Return the result
    return result;
}

equals.addEventListener('click', () => {
    let input = calculate(screen.value);
    screen.value = input;
})

screen.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        let input = calculate(screen.value);
        screen.value = input;
    } else if (e.key === "Escape") {
        screen.value = "";
    }
})