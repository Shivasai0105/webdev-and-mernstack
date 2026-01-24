/******************************************************************************************
 * JAVASCRIPT ARRAY METHOD: REDUCE
 *
 * reduce() is used to:
 * 👉 reduce an array into a SINGLE value
 *
 * That single value can be:
 * - a number (sum, total)
 * - a string
 * - an object
 * - an array
 *
 * SYNTAX:
 * array.reduce((accumulator, currentValue) => {
 *     return updatedAccumulator;
 * }, initialAccumulatorValue);
 *
 ******************************************************************************************/

/*
===========================================================================================
QUESTION 1: What is reduce?
===========================================================================================

reduce() loops over an array and keeps accumulating a result.

Think of it like:
- a running total
- a box that keeps getting updated

Example:
[1, 2, 3, 4] → 10
*/

/*
===========================================================================================
KEY TERMINOLOGY (VERY IMPORTANT)
===========================================================================================

accumulator (acc):
- The result collected so far
- Starts with the initial value

currentValue (curr):
- Current element in the array

initialValue:
- The starting value of the accumulator
- OPTIONAL, but HIGHLY RECOMMENDED
*/

/*
===========================================================================================
EXAMPLE 1: Sum of numbers
===========================================================================================
*/

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 10

/*
EXPLANATION (STEP BY STEP):

Initial acc = 0

Iteration 1: acc = 0, curr = 1 → acc = 1
Iteration 2: acc = 1, curr = 2 → acc = 3
Iteration 3: acc = 3, curr = 3 → acc = 6
Iteration 4: acc = 6, curr = 4 → acc = 10

Final result = 10
*/

/*
===========================================================================================
WHY initialValue IS IMPORTANT
===========================================================================================

If you DON'T give initial value:
- acc starts as first element
- curr starts from second element
- can cause bugs on empty arrays
*/

const nums = [];
// nums.reduce((acc, curr) => acc + curr); ❌ ERROR

// Always safer:
nums.reduce((acc, curr) => acc + curr, 0);

/*
===========================================================================================
EXAMPLE 2: Total amount from objects (REAL-WORLD)
===========================================================================================
*/

const orders = [
  { id: 1, amount: 500 },
  { id: 2, amount: 150 },
  { id: 3, amount: 800 }
];

const totalRevenue = orders.reduce((acc, order) => {
  return acc + order.amount;
}, 0);

console.log(totalRevenue); // 1450

/*
WHY reduce here?
- We want ONE number
- map would give array
- filter would give array
- reduce gives single value
*/

/*
===========================================================================================
EXAMPLE 3: Counting occurrences (INTERVIEW FAVORITE)
===========================================================================================
*/

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);
/*
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/

/*
WHY THIS WORKS:
- acc starts as {}
- each fruit becomes a key
- value increments
*/

/*
===========================================================================================
EXAMPLE 4: Grouping data (ADVANCED USE CASE)
===========================================================================================
*/

const students = [
  { name: "Alex", result: "Pass" },
  { name: "Sam", result: "Fail" },
  { name: "John", result: "Pass" }
];

const grouped = students.reduce((acc, student) => {
  if (!acc[student.result]) {
    acc[student.result] = [];
  }
  acc[student.result].push(student.name);
  return acc;
}, {});

console.log(grouped);
/*
{
  Pass: ["Alex", "John"],
  Fail: ["Sam"]
}
*/

/*
===========================================================================================
MAP vs FILTER vs REDUCE (VERY IMPORTANT)
===========================================================================================

map    → transforms → array → array
filter → selects    → array → array
reduce → accumulates → array → ANYTHING

If final output is NOT an array → reduce
*/

/*
===========================================================================================
COMMON MISTAKES ❌
===========================================================================================

1. Forgetting to return acc
2. Not giving initial value
3. Using reduce when map/filter is enough
4. Mutating external variables
*/

/*
===========================================================================================
WHEN SHOULD YOU USE REDUCE?
===========================================================================================

✔ Sum / Total
✔ Average
✔ Grouping
✔ Counting
✔ Building objects
✔ Converting array → object
✔ Replacing multiple loops
*/

/*
===========================================================================================
MINI CHALLENGE (TRY WITHOUT SOLUTION)
===========================================================================================

Given:
const cart = [
  { item: "Book", price: 200, qty: 2 },
  { item: "Pen", price: 20, qty: 5 },
  { item: "Bag", price: 500, qty: 1 }
];

Task:
1. Calculate total cart value using reduce
2. Output should be a single number
*/

/*
===========================================================================================
FINAL THOUGHT (IMPORTANT)
===========================================================================================

reduce is NOT scary.
It is just:
"Keep updating one value until array ends"

Once this clicks, reduce becomes your strongest tool.
******************************************************************************************/
const cart = [
  { item: "Book", price: 200, qty: 2 },
  { item: "Pen", price: 20, qty: 5 },
  { item: "Bag", price: 500, qty: 1 }
];

let initial = 0;
const myTotal = cart.reduce(function(acc,item){
    return acc+item.price*item.qty
},initial);
console.log(myTotal);