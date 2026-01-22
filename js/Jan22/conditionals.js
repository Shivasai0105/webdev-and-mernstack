
/*
 — JavaScript Conditionals (In-Depth Revision Notes)
==========================================================

This file contains:

* All conditionals learned today
* Each challenge with code
* In-depth explanations in comments
* Interview-oriented insights

---

1. WHAT ARE CONDITIONALS?

---

Conditionals allow the program to make decisions.
Based on a condition (true / false), different code paths execute.

JavaScript conditionals ALWAYS resolve to a boolean:

* true  → code inside `if` runs
* false → code inside `else` runs (if present)

Basic syntax:

if (condition) {
// runs if condition is true
} else {
// runs if condition is false
}

---

2. COMPARING NUMBERS

---

Challenge: Check which number is greater or if both are equal

Key operators:

> greater than
> <   less than
> ==  loose equality (value only)
> === strict equality (value + type) [recommended]

*/

// Challenge 1: Number comparison
let num1 = 5;
let num2 = 5;

if (num2 > num1) {
console.log(`${num2} is greater than ${num1}`);
} else if (num1 === num2) {
console.log(`${num1} and ${num2} are equal`);
} else {
console.log(`${num1} is greater than ${num2}`);
}

/*
Explanation:

* First condition checks if num2 is greater
* Second condition checks equality
* Else handles remaining case (num1 > num2)

---

3. NESTED CONDITIONALS (SAFE LOGIN GATE)

---

Used when multiple dependent conditions must be checked.

Important rule:
EVERY possible execution path must be handled.

*/

// Challenge 2: Safe login gate
let username = "admin";
let password = "1234";

if (username === "admin") {
if (password === "1234") {
console.log("Login successful");
} else {
console.log("Invalid credentials");
}
} else {
console.log("Invalid credentials");
}

/*
Explanation:

* First check validates username
* Second check validates password
* Nested if avoids using logical operators
* Strict equality prevents type coercion bugs

---

4. TYPE CHECKING USING typeof

---

`typeof` ALWAYS returns a string.

Common results:

* typeof 10        → "number"
* typeof "10"      → "string"
* typeof true      → "boolean"
* typeof []        → "object"

*/

// Challenge 3: Number validation
let value = "50";

if (typeof value === "number" && value > 0) {
console.log("Valid number");
} else {
console.log("Invalid input");
}

/*
Explanation:

* "50" is a string, not a number
* typeof check prevents implicit conversion bugs
* value > 0 ensures positive numbers only

---

5. STRING COMPARISON & CASE SENSITIVITY

---

JavaScript string comparison is CASE-SENSITIVE.

"Chai" !== "chai"

*/

// Challenge 4: Username availability
let existingUser = "Chai";
let newUser = "chai";

if (existingUser === newUser) {
console.log("Username taken");
} else {
console.log("Username available");
}

/*
Explanation:

* Strict equality compares exact characters
* Case differences mean different usernames
* Important for authentication systems

---

6. CHECKING EMPTY ARRAYS

---

Arrays have a `.length` property.

Rules:

* Empty array → length === 0
* Non-empty array → length > 0

*/

// Challenge 5: Empty data guard
let data = [];

if (data.length === 0) {
console.log("No data received");
} else {
console.log("Processing data");
}

/*
Explanation:

* `.length` works only on arrays and strings
* Objects do NOT have length
* Common in API response validation

---

7. BOOLEAN TRUTH TRAP (INTERVIEW CRITICAL)

---

Truthy values are NOT equal to true.

Truthy examples:

* "true"
* 1
* []

Falsy examples:

* false
* 0
* null
* undefined

*/

// Challenge 6: Boolean truth trap
let isLoggedIn = null;

if (isLoggedIn === true) {
console.log("Access granted");
} else {
console.log("Access denied");
}

/*
Explanation:

* Strict check ensures only boolean true passes
* Prevents accidental access due to truthy values
* Essential for security-sensitive logic

---

8. FINAL TAKEAWAYS

---

✔ Conditionals always resolve to true / false
✔ Use === instead of ==
✔ typeof returns strings
✔ Arrays are checked using length
✔ Truthy is NOT the same as true
✔ Nested if handles dependent conditions safely

=========================================================
*/

