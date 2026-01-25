// ====================================================================
// OBJECT ORIENTED PROGRAMMING (OOP) - MASTERCLASS
// ====================================================================

/*
 * OOP is a programming paradigm (style of writing code) that focuses on 
 * creating objects which are instances of classes.
 * 
 * FOUR PILLARS OF OOP:
 * 1. ENCAPSULATION - Bundling data and methods together (boxing them)
 * 2. INHERITANCE - Borrowing properties/methods from parent classes
 * 3. POLYMORPHISM - Same method behaving differently in different contexts
 * 4. ABSTRACTION - Hiding implementation details, showing only essentials
 * 
 * NOTE: In JavaScript, everything is an object (even classes are objects under the hood)
 */

// ====================================================================
// 1. OBJECT LITERALS - The Simplest Form
// ====================================================================

console.log("\n=== 1. OBJECT LITERALS ===\n");

// Creating a simple object literal
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    
    // Methods in object literals
    start: function() {
        return `${this.make} ${this.model} car got started in ${this.year}`;
    }
};

console.log(car.start());
console.log("Car details:", car);

// LIMITATION: We cannot easily create multiple copies of this object
// This is where constructor functions come in handy


// ====================================================================
// 2. CONSTRUCTOR FUNCTIONS - Creating Multiple Objects
// ====================================================================

console.log("\n=== 2. CONSTRUCTOR FUNCTIONS ===\n");

/*
 * Constructor functions allow us to create multiple objects with the same structure
 * Convention: Constructor function names start with a CAPITAL letter
 * We use the 'new' keyword to create instances
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Adding method (NOT recommended - see prototype section below)
    this.greet = function() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
    };
}

// Creating instances using 'new' keyword
const john = new Person("John", 20);
const jane = new Person("Jane", 25);
const bob = new Person("Bob", 30);

console.log(john.greet());
console.log(jane.greet());
console.log("John's name:", john.name);


// ====================================================================
// 3. PROTOTYPES AND PROTOTYPAL CHAIN
// ====================================================================

console.log("\n=== 3. PROTOTYPES AND PROTOTYPAL CHAIN ===\n");

/*
 * PROTOTYPE: Every object in JavaScript has a prototype
 * PROTOTYPAL CHAIN: The chain of prototypes that JavaScript follows to find properties/methods
 * 
 * Why use prototypes?
 * - Methods defined on prototype are shared across all instances
 * - Saves memory (only one copy of the method exists)
 */

function Animal(type) {
    this.type = type;
}

// Adding method to prototype (RECOMMENDED way)
Animal.prototype.speak = function() {
    return `${this.type} makes a sound`;
};

Animal.prototype.describe = function() {
    return `This is a ${this.type}`;
};

const dog = new Animal("Dog");
const cat = new Animal("Cat");

console.log(dog.speak());
console.log(cat.speak());
console.log(dog.describe());


// ====================================================================
// 4. EXTENDING BUILT-IN PROTOTYPES (Use with Caution!)
// ====================================================================

console.log("\n=== 4. EXTENDING BUILT-IN PROTOTYPES ===\n");

/*
 * WARNING: Extending built-in prototypes is generally NOT recommended
 * But it's important to understand how it works
 */

// Adding custom method to Array prototype
Array.prototype.customMethod = function() {
    console.log(`Custom method called on array:`, this);
    return `Array has ${this.length} elements`;
};

const myArray = [1, 2, 3];
const myNewArray = [4, 5, 6];

console.log(myArray.customMethod());
console.log(myNewArray.customMethod());


// ====================================================================
// 5. ES6 CLASSES - Modern Syntax
// ====================================================================

console.log("\n=== 5. ES6 CLASSES ===\n");

/*
 * Classes are "syntactic sugar" over constructor functions and prototypes
 * Under the hood, they still use prototypes
 * 
 * Benefits:
 * - Cleaner, more readable syntax
 * - Easier to understand for developers from other OOP languages
 * - Better tooling support
 */

class Vehicle {
    // Constructor method - called when creating new instance
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    
    // Methods (automatically added to prototype)
    start() {
        return `${this.model} is a car from ${this.make}`;
    }
    
    stop() {
        return `${this.make} ${this.model} has stopped`;
    }
    
    getInfo() {
        return `Vehicle: ${this.make} ${this.model}`;
    }
}

// Creating instances - MUST use 'new' keyword
const myCar = new Vehicle("Toyota", "Corolla");
console.log(myCar.start());
console.log(myCar.getInfo());

// Without 'new' keyword - will throw error
// const wrongCar = Vehicle("Honda", "Civic"); // TypeError!


// ====================================================================
// 6. INHERITANCE - The 'extends' Keyword
// ====================================================================

console.log("\n=== 6. INHERITANCE ===\n");

/*
 * INHERITANCE allows a class to inherit properties and methods from another class
 * 
 * Terms:
 * - Parent Class / Base Class / Super Class
 * - Child Class / Derived Class / Sub Class
 * 
 * Use 'extends' keyword to inherit from a parent class
 */

class Car extends Vehicle {
    // Constructor is optional if you don't need additional properties
    constructor(make, model, doors) {
        // MUST call super() before using 'this'
        super(make, model);  // Calls parent constructor
        this.doors = doors;
    }
    
    // Child class can have its own methods
    drive() {
        return `${this.make} ${this.model} is driving - Inheritance example`;
    }
    
    // Child can access parent methods
    honk() {
        return `${this.model} goes beep beep!`;
    }
    
    // Overriding parent method (Polymorphism)
    getInfo() {
        return `Car: ${this.make} ${this.model} with ${this.doors} doors`;
    }
}

const toyotaCar = new Car("Toyota", "Corolla", 4);
console.log(toyotaCar.drive());
console.log(toyotaCar.honk());

// Accessing inherited method from parent
console.log(toyotaCar.start());

// Overridden method
console.log(toyotaCar.getInfo());


// ====================================================================
// 7. MULTI-LEVEL INHERITANCE
// ====================================================================

console.log("\n=== 7. MULTI-LEVEL INHERITANCE ===\n");

class ElectricCar extends Car {
    constructor(make, model, doors, batteryCapacity) {
        super(make, model, doors);
        this.batteryCapacity = batteryCapacity;
    }
    
    charge() {
        return `${this.make} ${this.model} is charging. Battery: ${this.batteryCapacity}kWh`;
    }
    
    // Overriding parent method
    drive() {
        return `${this.make} ${this.model} is driving silently (Electric!)`;
    }
}

const tesla = new ElectricCar("Tesla", "Model 3", 4, 75);
console.log(tesla.charge());
console.log(tesla.drive());
console.log(tesla.start());  // From Vehicle class (grandparent)


// ====================================================================
// 8. THE 'super' KEYWORD
// ====================================================================

console.log("\n=== 8. THE 'super' KEYWORD ===\n");

/*
 * 'super' keyword is used to:
 * 1. Call parent constructor: super(args)
 * 2. Call parent methods: super.methodName()
 */

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    getDetails() {
        return `Employee: ${this.name}, Salary: $${this.salary}`;
    }
    
    work() {
        return `${this.name} is working`;
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);  // Call parent constructor
        this.department = department;
    }
    
    getDetails() {
        // Calling parent method using super
        const parentDetails = super.getDetails();
        return `${parentDetails}, Department: ${this.department}`;
    }
    
    manage() {
        return `${this.name} is managing ${this.department} department`;
    }
}

const manager1 = new Manager("Alice", 75000, "IT");
console.log(manager1.getDetails());
console.log(manager1.manage());
console.log(manager1.work());  // Inherited from Employee


// ====================================================================
// 9. STATIC METHODS AND PROPERTIES
// ====================================================================

console.log("\n=== 9. STATIC METHODS ===\n");

/*
 * STATIC methods/properties belong to the class itself, not to instances
 * Called directly on the class, not on objects
 * Useful for utility functions
 */

class MathHelper {
    static PI = 3.14159;
    
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static circleArea(radius) {
        return this.PI * radius * radius;
    }
}

// Call static methods on the class itself
console.log("5 + 3 =", MathHelper.add(5, 3));
console.log("5 * 3 =", MathHelper.multiply(5, 3));
console.log("Circle area (r=5):", MathHelper.circleArea(5));
console.log("PI value:", MathHelper.PI);

// Cannot call on instances
// const helper = new MathHelper();
// helper.add(1, 2); // ERROR! Static method


// ====================================================================
// 10. GETTERS AND SETTERS
// ====================================================================

console.log("\n=== 10. GETTERS AND SETTERS ===\n");

/*
 * GETTERS: Get a property value (with optional logic)
 * SETTERS: Set a property value (with validation/logic)
 */

class Rectangle {
    constructor(width, height) {
        this._width = width;   // Convention: _ prefix for private-ish properties
        this._height = height;
    }
    
    // Getter - accessed like a property
    get area() {
        return this._width * this._height;
    }
    
    get perimeter() {
        return 2 * (this._width + this._height);
    }
    
    // Setter - set like a property
    set width(value) {
        if (value > 0) {
            this._width = value;
        } else {
            console.log("Width must be positive!");
        }
    }
    
    set height(value) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log("Height must be positive!");
        }
    }
    
    get width() {
        return this._width;
    }
    
    get height() {
        return this._height;
    }
}

const rect = new Rectangle(10, 5);
console.log("Area:", rect.area);           // Accessed like property
console.log("Perimeter:", rect.perimeter);

rect.width = 20;  // Using setter
console.log("New width:", rect.width);
console.log("New area:", rect.area);

rect.width = -5;  // Validation in setter


// ====================================================================
// 11. PRIVATE FIELDS (ES2022)
// ====================================================================

console.log("\n=== 11. PRIVATE FIELDS ===\n");

/*
 * Private fields start with #
 * Truly private - cannot be accessed outside the class
 */

class BankAccount {
    #balance;  // Private field
    
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        return "Invalid amount";
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.#balance}`;
        }
        return "Insufficient funds or invalid amount";
    }
    
    getBalance() {
        return `Current balance: $${this.#balance}`;
    }
}

const account = new BankAccount("John Doe", 1000);
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
// console.log(account.#balance);  // ERROR! Cannot access private field


// ====================================================================
// 12. PRACTICAL EXAMPLE - Complete OOP System
// ====================================================================

console.log("\n=== 12. PRACTICAL EXAMPLE ===\n");

// Base class
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    
    getInfo() {
        return `${this.name} - $${this.price} (${this.category})`;
    }
    
    applyDiscount(percentage) {
        this.price = this.price - (this.price * percentage / 100);
        return `New price after ${percentage}% discount: $${this.price.toFixed(2)}`;
    }
}

// Derived class
class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price, "Electronics");
        this.warranty = warranty;
    }
    
    getInfo() {
        return `${super.getInfo()} - Warranty: ${this.warranty} months`;
    }
}

// Another derived class
class Clothing extends Product {
    constructor(name, price, size) {
        super(name, price, "Clothing");
        this.size = size;
    }
    
    getInfo() {
        return `${super.getInfo()} - Size: ${this.size}`;
    }
}

const laptop = new Electronics("Dell Laptop", 1200, 24);
const shirt = new Clothing("Cotton Shirt", 30, "L");

console.log(laptop.getInfo());
console.log(shirt.getInfo());

console.log(laptop.applyDiscount(10));  // Inherited method
console.log(shirt.applyDiscount(20));   // Inherited method


// ====================================================================
// 13. UNDERSTANDING 'this' KEYWORD IN OOP
// ====================================================================

console.log("\n=== 13. THE 'this' KEYWORD ===\n");

/*
 * 'this' refers to the current object instance
 * In methods, 'this' refers to the object that called the method
 */

class Counter {
    constructor(name) {
        this.name = name;
        this.count = 0;
    }
    
    increment() {
        this.count++;
        return `${this.name} count: ${this.count}`;
    }
    
    decrement() {
        this.count--;
        return `${this.name} count: ${this.count}`;
    }
    
    reset() {
        this.count = 0;
        return `${this.name} reset to ${this.count}`;
    }
}

const counter1 = new Counter("Counter1");
const counter2 = new Counter("Counter2");

console.log(counter1.increment());  // this refers to counter1
console.log(counter1.increment());
console.log(counter2.increment());  // this refers to counter2
console.log(counter1.decrement());


// ====================================================================
// 14. METHOD CHAINING
// ====================================================================

console.log("\n=== 14. METHOD CHAINING ===\n");

/*
 * Method chaining: Return 'this' from methods to enable chaining
 */

class Calculator {
    constructor() {
        this.value = 0;
    }
    
    add(num) {
        this.value += num;
        return this;  // Return this for chaining
    }
    
    subtract(num) {
        this.value -= num;
        return this;
    }
    
    multiply(num) {
        this.value *= num;
        return this;
    }
    
    divide(num) {
        if (num !== 0) {
            this.value /= num;
        }
        return this;
    }
    
    getResult() {
        return this.value;
    }
}

const calc = new Calculator();
const result = calc.add(10).multiply(2).subtract(5).divide(3).getResult();
console.log("Chained calculation result:", result);


// ====================================================================
// 15. COMPOSITION OVER INHERITANCE
// ====================================================================

console.log("\n=== 15. COMPOSITION OVER INHERITANCE ===\n");

/*
 * Sometimes composition is better than inheritance
 * Instead of extending, compose objects from smaller pieces
 */

// Helper objects (Mixins)
const canFly = {
    fly() {
        return `${this.name} is flying!`;
    }
};

const canSwim = {
    swim() {
        return `${this.name} is swimming!`;
    }
};

const canWalk = {
    walk() {
        return `${this.name} is walking!`;
    }
};

// Using composition
class Duck {
    constructor(name) {
        this.name = name;
    }
}

// Add abilities using Object.assign
Object.assign(Duck.prototype, canFly, canSwim, canWalk);

const duck = new Duck("Donald");
console.log(duck.fly());
console.log(duck.swim());
console.log(duck.walk());


// ====================================================================
// 16. INSTANCEOF OPERATOR
// ====================================================================

console.log("\n=== 16. INSTANCEOF OPERATOR ===\n");

/*
 * 'instanceof' checks if an object is an instance of a class
 */

console.log("tesla instanceof ElectricCar:", tesla instanceof ElectricCar);
console.log("tesla instanceof Car:", tesla instanceof Car);
console.log("tesla instanceof Vehicle:", tesla instanceof Vehicle);
console.log("tesla instanceof Object:", tesla instanceof Object);
console.log("tesla instanceof Array:", tesla instanceof Array);


// ====================================================================
// 17. IMPORTANT NOTES AND BEST PRACTICES
// ====================================================================

console.log("\n=== 17. KEY TAKEAWAYS ===\n");

/*
 * BEST PRACTICES:
 * 
 * 1. Use classes for cleaner syntax (ES6+)
 * 2. Always use 'new' keyword with constructor functions/classes
 * 3. Capitalize constructor function and class names (PascalCase)
 * 4. Use 'super()' in child constructor before using 'this'
 * 5. Prefer prototype methods over instance methods (memory efficiency)
 * 6. Use static methods for utility functions
 * 7. Use getters/setters for computed properties and validation
 * 8. Use private fields (#) for data encapsulation
 * 9. Don't extend built-in prototypes (Array, Object, etc.)
 * 10. Keep inheritance hierarchies shallow (2-3 levels max)
 * 11. Consider composition over inheritance when appropriate
 * 12. Return 'this' from methods to enable chaining
 * 
 * REMEMBER:
 * - OOP is a PARADIGM (way of organizing code)
 * - Classes in JS are syntactic sugar over prototypes
 * - Everything in JavaScript is an object
 * - Prototypal inheritance is different from classical inheritance
 * - Functions are also methods when inside a class
 * - Methods are automatically added to the prototype
 */

console.log("\n✅ FOUR PILLARS OF OOP:");
console.log("1. ENCAPSULATION - Boxing data and methods together");
console.log("2. INHERITANCE - Borrowing from parent classes");
console.log("3. POLYMORPHISM - Same method, different behavior");
console.log("4. ABSTRACTION - Hide details, show only essentials");

console.log("\n=== END OF OOP MASTERCLASS ===\n");


// ====================================================================
// EXERCISES FOR PRACTICE
// ====================================================================

/*
 * EXERCISE 1: Create a class hierarchy for Shapes
 * - Base class: Shape (with area and perimeter methods)
 * - Derived: Circle, Square, Triangle
 * - Use getters for area and perimeter
 * - Test with multiple instances
 * 
 * EXERCISE 2: Create a User Management System
 * - Base class: User (name, email, password)
 * - Derived: Admin, Customer, Moderator
 * - Use private fields for password
 * - Use getters/setters for email validation
 * - Add static method to count total users
 * 
 * EXERCISE 3: Create a Vehicle Rental System
 * - Base: Vehicle (brand, model, pricePerDay)
 * - Derived: Car (doors), Bike (type), Truck (capacity)
 * - Add methods: rent(), return(), calculateRent(days)
 * - Use static methods for rental calculations
 * - Implement method chaining
 * 
 * EXERCISE 4: Library Management
 * - Classes: Library, Book, Member
 * - Implement: borrowBook(), returnBook(), searchBook()
 * - Use inheritance where appropriate
 * - Add private fields for sensitive data
 * 
 * EXERCISE 5: E-commerce System
 * - Classes: Store, Product, Customer, Order
 * - Implement shopping cart functionality
 * - Use composition for cart items
 * - Add discount system with inheritance
 */
