# 🎓 Jan 25 - OOP Foundations: Classes, Prototypes & Inheritance (Beginner's Revision Guide)

## 📚 What You Learned This Month

You learned how to **create blueprints** (classes and constructors) that generate multiple objects and how JavaScript's **prototype** system makes inheritance work.

---

## 🔑 Key Concepts (Made Simple)

### 1. **Real-World Analogy**

Think of classes and constructors like a **cookie cutter**:
- The **cookie cutter** = class/constructor
- **Each cookie** = instance/object created from it
- **All cookies** have same shape but can have different toppings

```javascript
// The blueprint (cookie cutter)
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

// Creating instances (making cookies)
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2022);

console.log(car1); // { brand: 'Toyota', model: 'Camry', year: 2020 }
console.log(car2); // { brand: 'Honda', model: 'Civic', year: 2022 }
```

---

### 2. **Constructor Functions - Creating Multiple Objects**

A constructor function is a normal function used with `new` keyword to create objects.

```javascript
// Constructor function (capital letter by convention!)
function Person(name, age) {
  this.name = name;      // "this" = new object being created
  this.age = age;
}

// Create objects
const john = new Person("John", 25);
const jane = new Person("Jane", 23);

console.log(john.name); // "John"
console.log(jane.name); // "Jane"
```

**What does `new` do?**
1. Creates a new empty object
2. Sets `this` to point to that object
3. Runs the constructor function
4. Returns the object automatically

```javascript
// Same thing happening inside:
// 1. const john = {};
// 2. Person.call(john, "John", 25);
// 3. return john;
```

---

### 3. **The Problem: Methods in Constructors**

❌ **Don't do this:**
```javascript
function BadPerson(name) {
  this.name = name;
  this.greet = function() {
    return `Hi, I'm ${this.name}`;
  };
}

const person1 = new BadPerson("Alice");
const person2 = new BadPerson("Bob");

// ❌ PROBLEM: Each person has their OWN greet() function in memory!
// This wastes memory!
```

---

### 4. **Solution: Prototype Methods (THE RIGHT WAY)**

✅ **Do this instead:**
```javascript
function Person(name) {
  this.name = name;  // Instance property (each person has their own)
}

// Shared method (all people share ONE greet function)
Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

console.log(person1.greet()); // "Hi, I'm Alice"
console.log(person2.greet()); // "Hi, I'm Bob"
```

**Why prototype methods are better:**
- Only ONE copy of the method exists in memory
- All instances share it
- More efficient, especially with many objects

---

### 5. **Understanding Prototypes**

Every JavaScript object has a hidden `__proto__` that points to its constructor's prototype.

```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  return `${this.name} says woof!`;
};

const myDog = new Dog("Buddy");

// How JavaScript finds properties:
console.log(myDog.name);  // Found in myDog itself ✓
console.log(myDog.bark); // Not found in myDog, check prototype ✓

// The lookup chain (prototype chain):
// myDog → Dog.prototype → Object.prototype → null
```

---

### 6. **Inheritance - Sharing Behavior**

One class/constructor can inherit from another.

```javascript
// Parent constructor
function Animal(type) {
  this.type = type;
}

Animal.prototype.describe = function() {
  return `This is a ${this.type}`;
};

// Child constructor
function Dog(name) {
  Animal.call(this, "Dog"); // Call parent constructor
  this.name = name;
}

// Link Dog's prototype to Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Dog's own method
Dog.prototype.bark = function() {
  return `${this.name} barks!`;
};

// Creating instance
const myDog = new Dog("Buddy");

console.log(myDog.name);     // "Buddy" (own property)
console.log(myDog.describe()); // "This is a Dog" (inherited)
console.log(myDog.bark());   // "Buddy barks!" (own method)
```

---

### 7. **Modern Way: ES6 Classes**

Classes are "syntactic sugar" - they look nicer but work the same way as constructors + prototypes.

```javascript
// Modern ES6 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {  // This method goes on prototype automatically!
    return `Hi, I'm ${this.name}`;
  }
}

const john = new Person("John", 25);
console.log(john.greet()); // "Hi, I'm John"
```

**Equivalence:**
```javascript
// Old way (constructor + prototype)
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  return `Hi, I'm ${this.name}`;
};

// New way (class) - SAME THING!
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}
```

---

### 8. **Inheritance with Classes**

Much simpler with `extends` keyword:

```javascript
class Animal {
  constructor(type) {
    this.type = type;
  }

  describe() {
    return `This is a ${this.type}`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog");      // Call parent constructor
    this.name = name;
  }

  bark() {
    return `${this.name} barks!`;
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.describe()); // "This is a Dog"
console.log(myDog.bark());     // "Buddy barks!"
```

---

## 🎯 How to Use This in Projects

### Example 1: User Management
```javascript
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.posts = [];
  }

  createPost(content) {
    this.posts.push(content);
    return `Post created!`;
  }

  getPostCount() {
    return this.posts.length;
  }
}

const user1 = new User("alice", "alice@email.com");
user1.createPost("Hello World!");
console.log(user1.getPostCount()); // 1
```

### Example 2: Game Characters with Inheritance
```javascript
class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) this.health = 0;
  }

  describe() {
    return `${this.name} has ${this.health} health`;
  }
}

class Warrior extends Character {
  constructor(name, health, weapon) {
    super(name, health);
    this.weapon = weapon;
  }

  attack() {
    return `${this.name} attacks with ${this.weapon}!`;
  }
}

const hero = new Warrior("Conan", 100, "sword");
console.log(hero.describe()); // "Conan has 100 health"
console.log(hero.attack());   // "Conan attacks with sword!"
hero.takeDamage(20);
console.log(hero.describe()); // "Conan has 80 health"
```

### Example 3: Product Inventory
```javascript
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  restock(amount) {
    this.quantity += amount;
  }

  sellOne() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}

const laptop = new Product("Laptop", 1000, 5);
console.log(laptop.getTotalValue()); // 5000
laptop.sellOne();
console.log(laptop.quantity); // 4
```

---

## ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right | Why |
|---------|---------|-----|
| Methods in constructor | Methods on prototype/class | Saves memory |
| Forgetting `new` keyword | `new Dog("Buddy")` | Creates new instance |
| Not calling `super()` | `super(...)` in child class | Initializes parent |
| `this = new Object()` | Just use `new` keyword | JavaScript handles it |
| `Person.prototype = {}` | `Object.create(Parent.prototype)` | Maintains inheritance chain |

---

## 📝 Quick Reference Card

```javascript
// === CONSTRUCTOR FUNCTION ===
function Animal(type) {
  this.type = type;
}
Animal.prototype.describe = function() {
  return `I'm a ${this.type}`;
};
const dog = new Animal("Dog");

// === ES6 CLASS ===
class Animal {
  constructor(type) {
    this.type = type;
  }
  describe() {
    return `I'm a ${this.type}`;
  }
}
const dog = new Animal("Dog");

// === INHERITANCE ===
class Dog extends Animal {
  constructor(name) {
    super("Dog");
    this.name = name;
  }
  bark() {
    return `${this.name} barks!`;
  }
}

// === CREATING INSTANCES ===
const myDog = new Dog("Buddy");
myDog.bark();
myDog.describe();
```

---

## 🚀 Practice Challenges

1. **Create a class** `Student` with properties: `name`, `grade`, and method `study()`
2. **Inheritance:** Create `ElectronicsProduct` that extends `Product` with warranty info
3. **User accounts:** Create `BankAccount` with `deposit()` and `withdraw()` methods
4. **Game system:** Create `Enemy` class and `Boss` class (extends Enemy) with special abilities

---

## 💡 Key Takeaway

**OOP helps organize code into logical objects.** Instead of loose functions floating around, you group related data and behavior together in classes. This makes code easier to manage, especially in large projects!

**Two ways to do OOP in JavaScript:**
1. **Constructor functions + Prototypes** (traditional)
2. **ES6 Classes** (modern, recommended)

Both do the same thing - choose classes for new projects!

Next month: You'll learn about the **DOM** - how to interact with HTML from JavaScript! 🎉

