
/********************************************************************
 *  JAVASCRIPT ARRAY map() — COMPLETE NOTES
 *
 *  Purpose of this file:
 *  - Clear understanding of map()
 *  - Difference between map(), filter(), forEach()
 *  - Real-world use cases
 *  - Common mistakes
 *  - Interview-ready challenge
 *
 *  NOTE:
 *  All examples are executable JavaScript.
 ********************************************************************/

/* ================================================================
   1️⃣ WHAT IS map() ?
   ================================================================

map() is a HIGHER-ORDER ARRAY METHOD.

Definition:
- map() TRANSFORMS each element of an array
- Returns a NEW array
- Length of new array === original array
- Original array is NOT modified

Syntax:
array.map((element, index, array) => newValue)
*/


/* ================================================================
   2️⃣ BASIC EXAMPLE — DOUBLE NUMBERS
   ================================================================ */

let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // original unchanged

/*
INTERNAL WORKING:
- map() loops over every element
- For each element, it returns a new value
- Returned value is placed at SAME index
*/


/* ================================================================
   3️⃣ map() vs filter() vs forEach()
   ================================================================

map():
- Transforms values
- Returns new array
- Same length as original

filter():
- Selects values
- Returns new array
- Length <= original

forEach():
- Side effects only
- Returns nothing
*/


/* ================================================================
   4️⃣ REAL-WORLD USE CASES
   ================================================================ */

/* ---------- USE CASE 1: Extract Fields from Objects ---------- */

const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Sam" },
  { id: 3, name: "John" }
];

const userNames = users.map(user => user.name);

console.log(userNames); // ["Alex", "Sam", "John"]

/* WHY map():
- Convert API response to UI-friendly data
*/


/* ---------- USE CASE 2: Price Calculation ---------- */

const prices = [100, 200, 300];

const pricesWithTax = prices.map(price => price * 1.18);

console.log(pricesWithTax);

/* WHY map():
- Used in billing systems
- No mutation, safe transformation
*/


/* ---------- USE CASE 3: Format Data ---------- */

const products = ["laptop", "phone", "tablet"];

const formatted = products.map(item => item.toUpperCase());

console.log(formatted);


/* ================================================================
   5️⃣ COMMON MISTAKES (VERY IMPORTANT)
   ================================================================ */

/* ❌ Mistake 1: Forgetting return */

let wrongMap = numbers.map(num => {
  num * 2; // nothing returned
});

console.log(wrongMap); // [undefined, undefined, ...]

/* ✔ FIX */
let correctMap = numbers.map(num => num * 2);


/* ❌ Mistake 2: Using map instead of filter */

// ❌ WRONG: map used for condition
let wrongUse = numbers.map(num => num > 2);
// [false, false, true, true]

// ✔ RIGHT: use filter
let correctUse = numbers.filter(num => num > 2);


/* ================================================================
   6️⃣ map() DOES NOT MODIFY ORIGINAL ARRAY
   ================================================================ */

const original = [10, 20, 30];

const modified = original.map(n => n + 5);

console.log(original); // [10, 20, 30]
console.log(modified); // [15, 25, 35]


/* ================================================================
   7️⃣ INTERVIEW-LEVEL INSIGHT
   ================================================================

Time Complexity: O(n)
Space Complexity: O(n)

map() is PURE FUNCTION friendly
(no side effects recommended)
*/


/* ================================================================
   8️⃣ CHALLENGE (DO THIS SERIOUSLY)
   ================================================================

Given the array below:

const orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 150, status: "pending" },
  { id: 3, amount: 800, status: "completed" }
];

TASK:
1. Create a new array named orderAmounts
2. Extract ONLY the amount values
3. Do NOT modify original array
4. Do NOT use loops

EXPECTED OUTPUT:
[500, 150, 800]
*/


/* ================================================================
   9️⃣ CHALLENGE SOLUTION (CHECK AFTER TRYING)
   ================================================================ */

const orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 150, status: "pending" },
  { id: 3, amount: 800, status: "completed" }
];

const orderAmounts = orders.map(order => order.amount);

console.log(orderAmounts);


/* ================================================================
   🔑 ONE-LINE REVISION RULE
   ================================================================

"Use map() when you want to CHANGE every element."
*/

/********************************************************************
 * END OF map() NOTES
 ********************************************************************/
/*
const students = [
  { name: "Alex", marks: 78 },
  { name: "Sam", marks: 45 },
  { name: "John", marks: 92 },
  { name: "Mia", marks: 60 }
];

Create a new array named studentResults using ONLY map() such that:

Each element becomes a new object

Each object should contain:

name

result

result rules:

"Pass" if marks ≥ 50

"Fail" if marks < 50

Original array must NOT be modified

No loops (for, forEach, while)

No filter, no reduce */

const students = [
  { name: "Alex", marks: 78 },
  { name: "Sam", marks: 45 },
  { name: "John", marks: 92 },
  { name: "Mia", marks: 60 }
];

const studentResults = students.map((stud)=>{
    return {
        name:stud.name,
        result:stud.marks>=50 ? "Pass" : "Fail"
    };
});
console.log(studentResults);