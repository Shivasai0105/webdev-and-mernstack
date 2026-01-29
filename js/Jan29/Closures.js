// Closures — Readable Notes + Deep Examples
// -------------------------------------------------
// Definition (interview-friendly):
// A closure is a function that remembers the variables from the scope
// in which it was created, even after that outer scope has finished.

// Why closures matter
// - They let functions keep private state.
// - They are the basis for data hiding (encapsulation).
// - They are common in callbacks, event handlers, and async code.
// - They explain why inner functions can still access outer variables.

// Key idea
// - Every function carries a reference to its lexical environment.
// - That environment is created when the function is defined, not called.

// 1) Basic closure example (counter)
function outer() {
  let counter = 4;

  return function inner() {
    counter += 1;
    return counter;
  };
}

const increment = outer();
console.log(increment()); // 5
console.log(increment()); // 6
console.log(increment()); // 7

// Explanation:
// - outer() returns inner(), but the `counter` variable stays alive.
// - Each call to increment() reuses the same `counter`.

// 2) Multiple independent closures
function makeCounter(start = 0) {
  let count = start;
  return function () {
    count += 1;
    return count;
  };
}

const counterA = makeCounter(0);
const counterB = makeCounter(10);

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 11
console.log(counterB()); // 12

// Each call to makeCounter creates a new, separate closed-over `count`.

// 3) Data hiding / encapsulation example
function createUser(name) {
  let balance = 0; // private variable

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
    getName() {
      return name;
    }
  };
}

const user = createUser("Aisha");
console.log(user.getName()); // Aisha
console.log(user.deposit(500)); // 500
console.log(user.withdraw(200)); // 300
console.log(user.getBalance()); // 300

// Here, `balance` is not directly accessible from outside.
// It stays private inside the closure.

// 4) Closure with parameters (interview pattern)
function power(exponent) {
  return function (base) {
    return base ** exponent;
  };
}

const square = power(2);
const cube = power(3);

console.log(square(5)); // 25
console.log(cube(2)); // 8

// The returned function remembers `exponent`.

// 5) Common pitfall with loops + var
// Using var in a loop creates one shared variable, so closures all see the last value.
function loopWithVar() {
  const handlers = [];
  for (var i = 0; i < 3; i++) {
    handlers.push(function () {
      return i;
    });
  }
  return handlers;
}

const varHandlers = loopWithVar();
console.log(varHandlers[0]()); // 3
console.log(varHandlers[1]()); // 3
console.log(varHandlers[2]()); // 3

// Fix 1: Use let (block scope per iteration)
function loopWithLet() {
  const handlers = [];
  for (let i = 0; i < 3; i++) {
    handlers.push(function () {
      return i;
    });
  }
  return handlers;
}

const letHandlers = loopWithLet();
console.log(letHandlers[0]()); // 0
console.log(letHandlers[1]()); // 1
console.log(letHandlers[2]()); // 2

// Fix 2: Use an IIFE to capture a snapshot of i
function loopWithIIFE() {
  const handlers = [];
  for (var i = 0; i < 3; i++) {
    (function (value) {
      handlers.push(function () {
        return value;
      });
    })(i);
  }
  return handlers;
}

const iifeHandlers = loopWithIIFE();
console.log(iifeHandlers[0]()); // 0
console.log(iifeHandlers[1]()); // 1
console.log(iifeHandlers[2]()); // 2

// 6) Real-world uses of closures
// - Event handlers remember state
// - Debouncing and throttling functions
// - Module patterns for private variables
// - Async callbacks retain access to outer scope

// Final takeaway:
// Closures are just functions + remembered lexical environment.
// If you can explain that clearly with a counter example, you’re good for interviews.
