/*
========================================
Template Literals in JavaScript (ES6)
========================================

Template literals use backticks (` `) instead of single (' ') or double (" ") quotes.

They allow:
1. String interpolation (embedding variables)
2. Multi-line strings
3. Embedded expressions
4. Tagged template literals (advanced)
*/


// --------------------------------------
// 1. Basic Template Literal
// --------------------------------------

const basicMessage = `Hello, World!`;

console.log(basicMessage);
// Output: Hello, World!


// --------------------------------------
// 2. String Interpolation
// --------------------------------------
// Using ${} to insert variables inside a string

const name = "Alice";
const age = 25;

const introduction = `My name is ${name} and I am ${age} years old.`;

console.log(introduction);
// Output: My name is Alice and I am 25 years old.


// --------------------------------------
// 3. Expressions Inside Template Literals
// --------------------------------------
// You can place any valid JavaScript expression inside ${}

const a = 10;
const b = 5;

const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);
// Output: The sum of 10 and 5 is 15.


// --------------------------------------
// 4. Multi-line Strings
// --------------------------------------
// No need for \n or string concatenation

const multiLine = `
This is line 1
This is line 2
This is line 3
`;

console.log(multiLine);


// --------------------------------------
// 5. Using Functions Inside ${}
// --------------------------------------

function greet(user) {
  return `Hello, ${user.toUpperCase()}!`;
}

console.log(greet("john"));
// Output: Hello, JOHN!


// --------------------------------------
// 6. Conditional Expressions
// --------------------------------------

const score = 85;

const gradeMessage = `You have ${score >= 50 ? "passed" : "failed"} the exam.`;

console.log(gradeMessage);
// Output: You have passed the exam.


// --------------------------------------
// 7. Tagged Template Literals (Advanced)
// --------------------------------------
// A function can process a template literal

function tag(strings, ...values) {
  console.log("Strings:", strings);
  console.log("Values:", values);
}

const language = "JavaScript";

tag`I am learning ${language}!`;

// The function receives:
// 1. An array of string parts
// 2. The interpolated values separately


/*
========================================
Key Points
========================================

- Use backticks (` `)
- Use ${} to insert variables or expressions
- Supports multi-line strings
- More readable than string concatenation
- Very common in modern JavaScript

Best Practice:
Use template literals instead of string concatenation
for cleaner and more maintainable code.
*/


