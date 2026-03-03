/*
========================================
Destructuring Assignment in JavaScript
========================================

Destructuring is an ES6 feature that allows you to extract
values from arrays or properties from objects into variables.

There are two main types:
1. Array destructuring
2. Object destructuring
*/


// --------------------------------------
// 1. Array Destructuring (Basic)
// --------------------------------------

const numbers = [10, 20, 30];

// Old way:
// const first = numbers[0];
// const second = numbers[1];

// Destructuring way:
const [first, second] = numbers;

console.log(first);   // 10
console.log(second);  // 20


// --------------------------------------
// 2. Skipping Array Elements
// --------------------------------------

const [one, , three] = [1, 2, 3];

console.log(one);   // 1
console.log(three); // 3


// --------------------------------------
// 3. Default Values in Arrays
// --------------------------------------

const [a = 5, b = 10] = [7];

console.log(a); // 7  (value from array)
console.log(b); // 10 (default used)


// --------------------------------------
// 4. Rest Operator with Arrays
// --------------------------------------
// Collect remaining elements into a new array

const [head, ...tail] = [100, 200, 300, 400];

console.log(head); // 100
console.log(tail); // [200, 300, 400]


// --------------------------------------
// 5. Swapping Variables
// --------------------------------------

let x = 1;
let y = 2;

// Swap values without using a temp variable
[x, y] = [y, x];

console.log(x); // 2
console.log(y); // 1


// --------------------------------------
// 6. Object Destructuring (Basic)
// --------------------------------------

const user = {
  name: "Sara",
  age: 28,
  country: "USA"
};

// Old way:
// const name = user.name;
// const age = user.age;

const { name, age } = user;

console.log(name); // Sara
console.log(age);  // 28


// --------------------------------------
// 7. Renaming Variables
// --------------------------------------

const { country: userCountry } = user;

console.log(userCountry); // USA


// --------------------------------------
// 8. Default Values in Objects
// --------------------------------------

const { profession = "Developer" } = user;

console.log(profession); // Developer


// --------------------------------------
// 9. Nested Object Destructuring
// --------------------------------------

const person = {
  fullName: "Mike",
  address: {
    city: "New York",
    zip: 10001
  }
};

const {
  address: { city, zip }
} = person;

console.log(city); // New York
console.log(zip);  // 10001


// --------------------------------------
// 10. Destructuring in Function Parameters
// --------------------------------------

function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet(user);
// Output: Hello Sara, you are 28 years old.


// --------------------------------------
// 11. Important Warning
// --------------------------------------
// Destructuring from undefined or null causes an error

// const { test } = undefined; // ❌ TypeError

// Safer approach:
const data = undefined;
const { test } = data || {};

console.log(test); // undefined


/*
========================================
Key Takeaways
========================================

- Array destructuring matches values by position.
- Object destructuring matches properties by name.
- Supports default values.
- Supports renaming variables.
- Supports nested structures.
- Very common in modern JavaScript (especially frameworks like React).

Destructuring makes code cleaner, shorter, and easier to read.
*/