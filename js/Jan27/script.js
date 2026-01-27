while (true) {
    const op = prompt("Enter the operation (+, -, *, /) or type 'stop' to quit");

    if (!op || op.toLowerCase() === "stop") {
        break;
    }

    const num1 = prompt("Enter the first number");
    const num2 = prompt("Enter the second number");

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        console.log("Invalid number input");
        continue;
    }

    if (op === "+") {
        console.log(n1 + n2);
    } 
    else if (op === "-") {
        console.log(n1 - n2);
    } 
    else if (op === "*") {
        console.log(n1 * n2);
    } 
    else if (op === "/") {
        if (n2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(n1 / n2);
        }
    } 
    else {
        console.log("Invalid operation");
    }
}
