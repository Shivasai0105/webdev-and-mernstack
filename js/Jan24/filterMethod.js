/********************************************************************
 *  JAVASCRIPT ARRAY filter() — COMPLETE NOTES
 *
 *  What you will learn:
 *  - What filter() is
 *  - How it works internally
 *  - When to use it
 *  - Real-world use cases
 *  - Common mistakes
 *  - One solid challenge
 ********************************************************************/

/* ================================================================
   1️⃣ WHAT IS filter() ?
   ================================================================

filter() is a HIGHER-ORDER ARRAY METHOD.

Definition:
- filter() creates a NEW array
- It includes ONLY those elements for which the callback returns true
- Original array is NOT modified

Syntax:
array.filter((element, index, array) => condition)
*/


/* ================================================================
   2️⃣ BASIC EXAMPLE — FILTER EVEN NUMBERS
   ================================================================ */

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]

/*
HOW THIS WORKS INTERNALLY:
- filter() loops over every element
- For each element:
    if condition === true → keep element
    if condition === false → discard element
*/


/* ================================================================
   3️⃣ IMPORTANT RULES OF filter()
   ================================================================

✔ Always returns a NEW array
✔ Does NOT change original array
✔ Callback MUST return true or false
✔ Skipped elements are removed
*/


/* ================================================================
   4️⃣ REAL-WORLD USE CASES
   ================================================================ */

/* ---------- USE CASE 1: Remove invalid values ---------- */

let inputs = [10, "", null, 25, undefined, 0, 40];

let validNumbers = inputs.filter(value => typeof value === "number" && value > 0);

console.log(validNumbers); // [10, 25, 40]

/* WHY filter():
- Cleans API data
- Removes junk values safely
*/


/* ---------- USE CASE 2: Active Users ---------- */

let users = [
  { name: "Alex", active: true },
  { name: "Sam", active: false },
  { name: "John", active: true }
];

let activeUsers = users.filter(user => user.active);

console.log(activeUsers);

/* WHY filter():
- Common in dashboards
- Used in permissions & access control
*/


/* ---------- USE CASE 3: Search Feature ---------- */

let products = ["Laptop", "Phone", "Tablet", "Monitor"];

let searchResult = products.filter(item => item.toLowerCase().includes("o"));

console.log(searchResult); // ["Phone", "Monitor"]

/* WHY filter():
- Used in search bars
- Used in autocomplete
*/


/* ================================================================
   5️⃣ COMMON MISTAKES (VERY IMPORTANT)
   ================================================================ */

/* ❌ Mistake 1: Forgetting return */

let wrongFilter = numbers.filter(num => {
  num > 3; // ❌ nothing returned
});

console.log(wrongFilter); // []

/* FIX */
let correctFilter = numbers.filter(num => num > 3);


/* ❌ Mistake 2: Expecting modification of original array */

numbers.filter(num => num > 2);
console.log(numbers); // original array unchanged


/* ================================================================
   6️⃣ filter() vs map() vs forEach()
   ================================================================

filter():
- Selects elements
- Returns fewer or same elements

map():
- Transforms elements
- Returns same length

forEach():
- Side effects only
- Returns nothing
*/


/* ================================================================
   7️⃣ INTERVIEW-LEVEL INSIGHT
   ================================================================

filter() does NOT:
- Stop early
- Modify original array

Time Complexity:
- O(n)

Space Complexity:
- O(n) (new array)
*/


/* ================================================================
   8️⃣ CHALLENGE (IMPORTANT)
   ================================================================

CHALLENGE:
You have an array of orders:

const orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 150, status: "pending" },
  { id: 3, amount: 800, status: "completed" },
  { id: 4, amount: 100, status: "cancelled" }
];

TASK:
1. Create a new array named completedOrders
2. Include ONLY orders where:
   - status is "completed"
   - amount is greater than 300
3. Do NOT use loops

EXPECTED OUTPUT:
[
  { id: 1, amount: 500, status: "completed" },
  { id: 3, amount: 800, status: "completed" }
]
*/


/* ================================================================
   9️⃣ CHALLENGE SOLUTION (CHECK AFTER TRYING)
   ================================================================ */



const orders = [
  { id: 1, amount: 500, status: "completed" },
  { id: 2, amount: 150, status: "pending" },
  { id: 3, amount: 800, status: "completed" },
  { id: 4, amount: 100, status: "cancelled" }
];

let completedOrders = orders.filter((order)=>{
    return order.amount>300 && order.status==="completed";
});
console.log(completedOrders);

/* ================================================================
   🔑 ONE-LINE REVISION RULE
   ================================================================

"Use filter() when you want to KEEP some items and DROP the rest."
*/

/********************************************************************
 * END OF filter() NOTES
 ********************************************************************/

