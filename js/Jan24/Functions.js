/************************************************************
 *  JAVASCRIPT FUNCTIONS & ARROW FUNCTIONS — COMPLETE NOTES
 *  Author: (You)
 *  Purpose: Revision-ready, executable notes with reasoning
 ************************************************************/

/*
------------------------------------------------------------
1️⃣ WHAT IS A FUNCTION?
------------------------------------------------------------

A function is a reusable block of code designed to perform
a specific task.

Why functions?
- Avoid repetition
- Improve readability
- Organize logic
- Make code reusable
*/

// ----------------------------------------------------------
// Challenge 1: Make Tea Function
// ----------------------------------------------------------

/*
Create a function named makeTea that:
- Takes one parameter: typeOfTea
- Returns a string like: "Making green tea"
- Do NOT use console.log inside the function
*/

function makeTea(typeOfTea) {
  // A function should RETURN data, not print it
  return `Making ${typeOfTea}`;
}

// Store returned value
let teaOrder = makeTea("green tea");

// Printing is done OUTSIDE the function
console.log(teaOrder);

/*
KEY TAKEAWAY:
- Functions return values
- console.log is for displaying, not logic
*/


/*
------------------------------------------------------------
2️⃣ NESTED FUNCTIONS (FUNCTIONS INSIDE FUNCTIONS)
------------------------------------------------------------

JavaScript allows functions inside other functions.

Important rules:
- Inner functions are PRIVATE
- They cannot be accessed outside
- Useful for structuring logic
*/

// ----------------------------------------------------------
// Example: Nested Function with Execution Flow
// ----------------------------------------------------------

function orderTea(teaType) {
  // Inner function (private)
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }

  // Call inner function and return its result
  return confirmOrder();
}

// Function call
let result = orderTea("Chai");
console.log(result);

/*
HOW THIS EXECUTES (VERY IMPORTANT):

1. orderTea("Chai") is called
2. JavaScript creates an EXECUTION CONTEXT for orderTea
3. Inside it:
   - confirmOrder is created
   - confirmOrder() is executed
4. confirmOrder returns a string
5. orderTea returns that string
6. Execution context is destroyed
7. Final value is stored in `result`

This is the foundation of:
- Closures
- Scope
- Call stack understanding
*/


/*
------------------------------------------------------------
3️⃣ ARROW FUNCTIONS (ES6)
------------------------------------------------------------

Arrow functions are a shorter way to write functions.

Introduced in ES6 (2015) to:
- Reduce boilerplate
- Improve readability
- Work better with callbacks
*/

// ----------------------------------------------------------
// Regular Function
// ----------------------------------------------------------

function add(a, b) {
  return a + b;
}

// ----------------------------------------------------------
// Arrow Function (Equivalent)
// ----------------------------------------------------------

const addArrow = (a, b) => {
  return a + b;
};

console.log(add(2, 3));
console.log(addArrow(2, 3));


/*
------------------------------------------------------------
4️⃣ IMPLICIT RETURN (IMPORTANT)
------------------------------------------------------------

If an arrow function has:
- ONLY ONE expression
- NO curly braces {}

Then `return` is IMPLICIT (automatic)
*/

// Explicit return
const multiplyExplicit = (x, y) => {
  return x * y;
};

// Implicit return
const multiplyImplicit = (x, y) => x * y;

console.log(multiplyExplicit(2, 4));
console.log(multiplyImplicit(2, 4));


/*
------------------------------------------------------------
5️⃣ CHALLENGE: calculateTotal (Arrow Function)
------------------------------------------------------------

Requirements:
- Arrow function named calculateTotal
- Takes price and quantity
- Returns price * quantity
- Store result in totalCost
*/

// Arrow function with explicit return
const calculateTotal = (price, quantity) => {
  return price * quantity;
};

// (Alternate implicit version)
// const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(2, 3);
console.log(totalCost);


/*
------------------------------------------------------------
6️⃣ CRITICAL DIFFERENCE: `this` IN ARROW FUNCTIONS
------------------------------------------------------------

Arrow functions:
- DO NOT have their own `this`
- They inherit `this` from surrounding scope

Regular functions:
- Have their own `this`
*/

// Regular function
function regularThis() {
  console.log("Regular function this:", this);
}

// Arrow function
const arrowThis = () => {
  console.log("Arrow function this:", this);
};

// In browser:
// regularThis() → window
// arrowThis()   → window (lexical)

// In objects / DOM, this difference becomes CRITICAL


/*
------------------------------------------------------------
7️⃣ WHEN TO USE ARROW FUNCTIONS
------------------------------------------------------------

✅ Use arrow functions when:
- Writing short utility functions
- Using callbacks (forEach, map, filter)
- `this` is NOT required
- Cleaner syntax is preferred

❌ Avoid arrow functions when:
- You need `this` (DOM events, object methods)
- Creating constructors
*/


/*
------------------------------------------------------------
8️⃣ ONE-LINE REVISION RULE
------------------------------------------------------------

"Use arrow functions for LOGIC,
 use regular functions for CONTEXT (`this`)."
*/


/************************************************************
 * END OF NOTES
 * This file is executable + revision-friendly
 ************************************************************/
