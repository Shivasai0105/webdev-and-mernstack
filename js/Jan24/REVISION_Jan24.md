# 🎓 Jan 24 - Functions & Array Methods (Beginner's Revision Guide)

## 📚 What You Learned This Month

You learned how to **create reusable code blocks** (functions) and **transform arrays** using powerful methods (map, filter, reduce).

---

## 🔑 Key Concepts (Made Simple)

### 1. **Functions - Reusable Code Blocks**

A function is like a recipe: write it once, use it many times.

```javascript
// Creating a function (writing the recipe)
function greet(name) {
  return `Hello, ${name}!`;
}

// Using the function (following the recipe)
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(greet("Bob"));    // "Hello, Bob!"
```

**Key parts:**
- `function` → keyword to create function
- `greet` → name of function
- `(name)` → parameters (inputs)
- `return` → output the result
- Called with `greet("Alice")` → pass inputs, get output

**Golden Rule:** Functions should **return** data, not **print** it!

```javascript
// ❌ Wrong (prints, doesn't return)
function bad(x) {
  console.log(x * 2);
}

// ✅ Right (returns data)
function good(x) {
  return x * 2;
}

const result = good(5); // result = 10
```

---

### 2. **Arrow Functions - Modern Shorthand**

ES6 introduced arrow functions for cleaner code:

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (same thing!)
const add = (a, b) => {
  return a + b;
};

// Ultra-short (implicit return)
const add = (a, b) => a + b;
```

**When to use implicit return (one-liner):**
- Single expression
- No curly braces
- Return is automatic

```javascript
const square = (x) => x * x;        // ✅ Clean
const square = (x) => { return x * x; }; // Also works, more verbose
```

---

### 3. **Higher-Order Functions**

A function that:
- Takes another function as input, OR
- Returns a function

```javascript
// Function that takes another function
function doTwice(fn, value) {
  fn(value);
  fn(value);
}

doTwice(console.log, "Hello"); // Prints "Hello" twice

// Function that returns a function
function makeMultiplier(n) {
  return function(x) {
    return x * n;
  };
}

const double = makeMultiplier(2);
console.log(double(5)); // 10
```

**Why this matters?** This is how array methods like `map` and `filter` work!

---

### 4. **Map - Transform Every Item**

`map()` transforms each element and creates a **new array** of same size.

```javascript
const numbers = [1, 2, 3, 4];

// Double each number
const doubled = numbers.map(num => num * 2);

console.log(doubled);  // [2, 4, 6, 8]
console.log(numbers);  // [1, 2, 3, 4] - original unchanged!
```

**Use map when:** You want to transform every item into something else.

```javascript
const products = ["Laptop", "Phone", "Tablet"];

// Make all uppercase
const upper = products.map(item => item.toUpperCase());
console.log(upper); // ["LAPTOP", "PHONE", "TABLET"]

// Extract prices from objects
const items = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 50 }
];

const prices = items.map(item => item.price);
console.log(prices); // [100, 50]
```

---

### 5. **Filter - Select Items That Match**

`filter()` creates a **new array** with only items where condition is `true`.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Keep only even numbers
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6]
```

**Use filter when:** You want to select items based on a condition.

```javascript
// Find active users
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];

const active = users.filter(user => user.active);
// [{ name: "Alice", active: true }, { name: "Charlie", active: true }]

// Find high scores
const scores = [45, 78, 92, 34, 88];
const passed = scores.filter(score => score >= 70);
console.log(passed); // [78, 92, 88]
```

---

### 6. **Reduce - Combine Into One Value**

`reduce()` processes the array and produces a **single result** (number, string, object, etc).

```javascript
const numbers = [1, 2, 3, 4];

// Sum all numbers
const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum); // 10
```

**How reduce works (step by step):**
```
Start: total = 0
Step 1: total = 0 + 1 = 1
Step 2: total = 1 + 2 = 3
Step 3: total = 3 + 3 = 6
Step 4: total = 6 + 4 = 10
Result: 10
```

**Use reduce when:** You want to combine items into ONE value.

```javascript
// Calculate total price
const items = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 }
];

const total = items.reduce((sum, item) => sum + item.price, 0);
console.log(total); // 1150

// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }
```

---

## 🎯 How to Use This in Projects

### Example 1: E-Commerce - Calculate Total Price
```javascript
const cartItems = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 100, quantity: 1 }
];

const total = cartItems.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);

console.log(`Total: $${total}`); // $1200
```

### Example 2: Filter Active Users and Get Names
```javascript
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

const activeNames = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeNames); // ["Alice", "Charlie"]
```

### Example 3: Process Student Grades
```javascript
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 65 },
  { name: "Charlie", score: 92 }
];

// Get passing students
const passing = students.filter(s => s.score >= 70);

// Get their names
const names = passing.map(s => s.name);

console.log(names); // ["Alice", "Charlie"]

// Get average score
const average = students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log(average); // 80.67
```

---

## ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right | Why |
|---------|---------|-----|
| `numbers.map(n => { n * 2 })` | `numbers.map(n => n * 2)` | Arrow with `{}` needs `return` |
| `numbers.map(n => { return n * 2 })` | `numbers.map(n => n * 2)` | Simpler without curly braces |
| Using `map` to filter | Use `filter` for conditions | map doesn't remove items |
| Expecting `reduce` to return array | `reduce` returns ONE value | Use `map` if you want array |
| Forgetting initial value in reduce | Always provide initial value | Prevents bugs on empty arrays |

---

## 📝 Quick Reference Card

```javascript
// === FUNCTIONS ===
function greet(name) {
  return `Hello, ${name}`;
}

// === ARROW FUNCTIONS ===
const greet = (name) => `Hello, ${name}`;

// === MAP (Transform) ===
const doubled = [1, 2, 3].map(n => n * 2);
// [2, 4, 6]

// === FILTER (Select) ===
const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);
// [2, 4]

// === REDUCE (Combine) ===
const sum = [1, 2, 3, 4].reduce((total, n) => total + n, 0);
// 10

// === CHAINING ===
const result = array
  .filter(item => item.active)
  .map(item => item.name)
  .reduce((sum, name) => sum + name.length, 0);
```

---

## 🚀 Practice Challenges

1. **Create a function** that takes a name and returns a greeting
2. **Use map:** Double all numbers in `[1, 3, 5, 7]`
3. **Use filter:** Get all numbers greater than 50 from `[30, 45, 67, 89, 23, 56]`
4. **Use reduce:** Calculate sum of `[10, 20, 30, 40]`
5. **Combined:** Filter numbers > 5, double them, then sum: `[2, 6, 8, 3, 7, 9]`

---

## 💡 Key Takeaway

**Functions make code reusable.** Map, filter, and reduce let you **process arrays elegantly** without loops. Understanding these three methods (especially for beginners) will make you a better programmer!

Next month: You'll learn **OBJECTS & PROTOTYPES** - the foundation of JavaScript's object-oriented programming! 🎉

