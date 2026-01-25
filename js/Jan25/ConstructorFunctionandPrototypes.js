/******************************************************************************************
 * CONSTRUCTOR FUNCTIONS & PROTOTYPES (JS OOP FOUNDATIONS)
 *
 * READ THIS FILE TOP → BOTTOM.
 * Run snippets individually if needed.
 *
 * GOAL:
 * - Understand constructor functions
 * - Understand `new` keyword
 * - Understand `this`
 * - Understand prototype methods
 * - Know WHEN & WHY to use them
 ******************************************************************************************/

/*
===========================================================================================
1️⃣ WHAT IS A CONSTRUCTOR FUNCTION?
===========================================================================================

A constructor function is a NORMAL function
used as a BLUEPRINT to create multiple objects.

👉 It is NOT special syntax
👉 It BECOMES special when used with `new`

NAMING CONVENTION:
Constructor function names start with CAPITAL letters
(Person, Car, Tea, Animal)
*/

// Example: Person blueprint
function Person(name, age) {
  // `this` refers to the NEW object being created
  this.name = name;
  this.age = age;
}

/*
===========================================================================================
2️⃣ WHAT DOES `new` KEYWORD DO?
===========================================================================================

When you call a function with `new`, JavaScript does 4 things:

1. Creates a NEW empty object
2. Sets `this` → that new object
3. Links the object to the function's prototype
4. Returns the object automatically

WITHOUT `new` → everything breaks
*/

// Creating objects (instances)
const p1 = new Person("Alex", 25);
const p2 = new Person("Sam", 30);

console.log(p1); // { name: 'Alex', age: 25 }
console.log(p2); // { name: 'Sam', age: 30 }

/*
===========================================================================================
3️⃣ WHY `this` IS IMPORTANT
===========================================================================================

`this` allows EACH object to have its OWN data.

p1.name !== p2.name
Same blueprint, different data.
*/

/*
===========================================================================================
4️⃣ ADDING METHODS THE WRONG WAY (IMPORTANT LESSON)
===========================================================================================

If you define methods INSIDE constructor,
every object gets its OWN copy → memory waste ❌
*/

function BadTea(type) {
  this.type = type;

  this.describe = function () {
    return `This is ${this.type} tea`;
  };
}

/*
⚠️ Every BadTea object creates a NEW describe() function
Not scalable
*/

/*
===========================================================================================
5️⃣ ADDING METHODS USING PROTOTYPE (CORRECT WAY)
===========================================================================================

Prototype methods are SHARED across all instances ✅
*/

function Tea(type) {
  this.type = type;
}

// Shared method
Tea.prototype.describe = function () {
  return `This is a cup of ${this.type} tea`;
};

const lemonTea = new Tea("Lemon");
const gingerTea = new Tea("Ginger");

console.log(lemonTea.describe());
console.log(gingerTea.describe());

/*
WHY THIS IS GOOD:
- Only ONE describe() exists in memory
- All Tea objects reuse it
*/

/*
===========================================================================================
6️⃣ PROTOTYPE CHAIN (VERY IMPORTANT)
===========================================================================================

lemonTea → Tea.prototype → Object.prototype → null

When JS looks for describe():
1. lemonTea ❌
2. Tea.prototype ✅
*/

/*
===========================================================================================
7️⃣ VIDEO-STYLE EXAMPLE (ANIMAL)
=========================================================================================== */

function Animal(species) {
  this.species = species;
}

// Shared behavior
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

const dog = new Animal("Dog");
const cat = new Animal("Cat");

console.log(dog.sound());
console.log(cat.sound());

/*
KEY POINT:
- sound() is NOT copied
- it is SHARED via prototype
- `this` changes based on caller
*/

/*
===========================================================================================
8️⃣ REAL-WORLD OUTSIDE EXAMPLE (BANK ACCOUNT)
===========================================================================================

WHY constructor functions exist:
You need MANY similar objects with same behavior
*/

function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const acc1 = new BankAccount("Ravi", 5000);
const acc2 = new BankAccount("Neha", 10000);

acc1.deposit(1000);
acc2.withdraw(2000);

console.log(acc1.balance); // 6000
console.log(acc2.balance); // 8000

/*
===========================================================================================
9️⃣ WHY NOT JUST USE OBJECT LITERALS?
===========================================================================================

Object literals ❌
- Good for 1–2 objects
- Bad for scale

Constructor + prototype ✅
- Memory efficient
- Structured
- Reusable
*/

/*
===========================================================================================
🔟 SAFETY CHECK: ENSURE `new` IS USED
=========================================================================================== */

function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with `new` keyword");
  }
  this.name = name;
}

const teaDrink = new Drink("Tea");
// Drink("Coffee"); ❌ throws error

/*
===========================================================================================
11️⃣ WHEN SHOULD YOU USE CONSTRUCTOR FUNCTIONS?
===========================================================================================

USE WHEN:
✔ You need many similar objects
✔ Shared behavior is required
✔ Performance & memory matter
✔ You want pre-ES6 or low-level understanding

DON'T USE WHEN:
❌ Single object
❌ Simple config data
*/

/*
===========================================================================================
12️⃣ RELATION TO CLASSES (IMPORTANT)
===========================================================================================

THIS:
class User {
  constructor(name) {
    this.name = name;
  }
}

IS INTERNALLY:
function User(name) {
  this.name = name;
}

Classes = prettier syntax
Prototypes = real engine
*/

/*
===========================================================================================
🎯 CHALLENGE (NO SOLUTION – DO IT YOURSELF)
===========================================================================================

Create a constructor function `Employee` with:
- name
- role
- salary

Add prototype methods:
1. getDetails() → "Name: X, Role: Y"
2. incrementSalary(percent)

Create 2 employees and test methods.

RULES:
❌ No arrow functions inside prototype
❌ Must use prototype, not inline methods
❌ Must use `new`

(Do NOT look for solution. Write it.)
===========================================================================================
*/

/******************************************************************************************
END OF FILE
******************************************************************************************/
function Employee(name, role, salary) {
    this.name = name;
    this.role = role;
    this.salary = salary;
}

Employee.prototype.getDetails = function () {
    return `Name: ${this.name}, Role: ${this.role}`;
};

Employee.prototype.incrementSalary = function (percent) {
    this.salary += (percent / 100) * this.salary;
    return this.salary;
};

let emp1 = new Employee("Shiva Sai", "SDE", 100000);
let emp2 = new Employee("Sai", "SDE", 2000000);

console.log(emp1.getDetails());
console.log(emp1.incrementSalary(20));
console.log(emp1.salary); 