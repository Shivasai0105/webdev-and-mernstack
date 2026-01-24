/********************************************************************
 *  JAVASCRIPT ADVANCED FUNCTIONS — REVISION NOTES
 *  Topic:
 *  - Functions as values
 *  - Higher-order functions
 *  - Returning functions
 *  - Inner execution behavior
 *
 *  Goal:
 *  Read this 6 months later and still understand EVERYTHING
 ********************************************************************/

/*
====================================================================
1️⃣ FUNCTIONS ARE FIRST-CLASS CITIZENS IN JAVASCRIPT
====================================================================

In JavaScript:
- Functions can be stored in variables
- Functions can be passed as arguments
- Functions can be returned from other functions

This is called:
👉 First-Class Functions
👉 Higher-Order Functions (when functions are involved)
*/


/*
====================================================================
2️⃣ BASIC FUNCTION — makeTea
====================================================================

This function:
- Takes a tea type
- Returns a string
- Does NOT print anything
*/

function makeTea(typeOfTea) {
  return `maketea : ${typeOfTea}`;
}

/*
NOTE:
- We return data
- We DO NOT console.log inside logic functions
*/


/*
====================================================================
3️⃣ HIGHER-ORDER FUNCTION — processTeaOrder
====================================================================

Definition:
A function is called a HIGHER-ORDER FUNCTION if it:
✔ Accepts a function as an argument
✔ OR returns a function

processTeaOrder:
- Takes another function as parameter (teaFunction)
- Calls that function internally
- Passes "earl grey" as argument
- Returns the result
*/

function processTeaOrder(teaFunction) {
  // teaFunction is NOT executed yet
  // It is just a reference to a function

  return teaFunction("earl grey");
}

/*
FLOW OF EXECUTION:

1. processTeaOrder(makeTea) is called
2. teaFunction now refers to makeTea
3. teaFunction("earl grey") executes makeTea("earl grey")
4. makeTea returns a string
5. processTeaOrder returns that string
*/


// Store final result
let order = processTeaOrder(makeTea);
console.log(order);

/*
OUTPUT:
maketea : earl grey
*/


/*
====================================================================
4️⃣ WHY THIS IS IMPORTANT (INTERVIEW + REAL CODE)
====================================================================

You have already used higher-order functions before:

Examples:
- forEach(fn)
- map(fn)
- filter(fn)
- setTimeout(fn)
- addEventListener(fn)

They ALL take functions as parameters.
*/


/*
====================================================================
5️⃣ FUNCTION RETURNING ANOTHER FUNCTION
====================================================================

Now we go one step deeper.

createTeaMaker:
- Returns a NEW function
- That returned function remembers its environment
*/

function createTeaMaker() {
  // Outer function execution context is created

  return function (teaType) {
    return `Making ${teaType}`;
  };

  // After return:
  // createTeaMaker execution context is destroyed
  // BUT returned function still exists
}


/*
====================================================================
6️⃣ STORING A RETURNED FUNCTION
====================================================================

teaMaker now HOLDS a function, not a value.
*/

let teaMaker = createTeaMaker();

/*
IMPORTANT:
teaMaker === function(teaType) { ... }
*/

// Calling the returned function
console.log(teaMaker("green Tea"));

/*
OUTPUT:
Making green Tea
*/


/*
====================================================================
7️⃣ WHAT ACTUALLY HAPPENS INTERNALLY (VERY IMPORTANT)
====================================================================

STEP 1:
createTeaMaker() is called
→ Execution context is created

STEP 2:
Inner function is created and RETURNED

STEP 3:
createTeaMaker execution context is destroyed

STEP 4:
Returned function is stored in teaMaker variable

STEP 5:
teaMaker("green Tea") executes the inner function

This behavior is the foundation of:
- Closures
- Data privacy
- Factory functions
*/


/*
====================================================================
8️⃣ KEY OBSERVATIONS (REVISION POINTS)
====================================================================

✔ Functions can be passed as arguments
✔ Functions can be returned from other functions
✔ Returned functions still remember outer variables
✔ JavaScript functions create execution contexts
✔ Inner functions can outlive outer functions
*/


/*
====================================================================
9️⃣ TERMINOLOGY YOU SHOULD REMEMBER
====================================================================

- First-Class Function
- Higher-Order Function
- Execution Context
- Function Reference vs Function Call
- Function Factory

(Closures will be officially named later 😉)
*/


/*
====================================================================
🔑 ONE-LINE MEMORY RULE
====================================================================

"If a function accepts or returns another function,
you are already in advanced JavaScript."
*/


/********************************************************************
 * END OF NOTES
 * You now understand a CORE JavaScript concept most people fear
 ********************************************************************/
