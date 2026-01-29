/************************************************************
 * 📌 PROTOTYPAL INHERITANCE IN JAVASCRIPT – NOTES
 * File: prototypal-inheritance-notes.js
 *
 * These notes explain:
 * - What prototypal inheritance is
 * - Why JavaScript uses it
 * - How it works internally
 * - How to explain it in interviews
 ************************************************************/


/************************************************************
 * 1️⃣ What is Prototypal Inheritance?
 *
 * In JavaScript, objects do NOT copy properties.
 * Instead, they INHERIT properties from other objects
 * using something called a PROTOTYPE.
 *
 * This mechanism is called PROTOTYPAL INHERITANCE.
 ************************************************************/


/************************************************************
 * 2️⃣ One-Line Definition (Interview Ready)
 *
 * "In JavaScript, objects inherit properties and methods
 * from other objects through the prototype chain."
 ************************************************************/


/************************************************************
 * 3️⃣ Constructor Function Example
 *
 * Constructor functions are normal functions
 * used to create objects using the `new` keyword.
 ************************************************************/


function Person(name) {
    // This property belongs to each object created
    this.name = name;
}


/************************************************************
 * 4️⃣ Adding Methods using Prototype
 *
 * Instead of defining methods inside the constructor
 * (which wastes memory),
 * we attach methods to the prototype.
 ************************************************************/


Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};


/************************************************************
 * 5️⃣ Creating an Object
 *
 * `new` keyword does 4 things internally:
 * 1. Creates a new empty object
 * 2. Links it to the constructor's prototype
 * 3. Binds `this` to the new object
 * 4. Returns the object
 ************************************************************/


let hitesh = new Person("Hitesh");

// Calling prototype method
hitesh.greet(); // Hello, my name is Hitesh


/************************************************************
 * 6️⃣ Why does this work?
 *
 * JavaScript looks for properties in this order:
 *
 * 1. Object itself
 * 2. Its prototype
 * 3. Prototype’s prototype
 * 4. Until it reaches null
 *
 * This lookup path is called the PROTOTYPE CHAIN.
 ************************************************************/


/************************************************************
 * 7️⃣ Prototype Chain (Visual)
 *
 * hitesh
 *   ↓
 * Person.prototype
 *   ↓
 * Object.prototype
 *   ↓
 * null
 ************************************************************/


/************************************************************
 * 8️⃣ Important Hidden Property
 *
 * Every JavaScript object has a hidden internal property:
 *
 * [[Prototype]]
 *
 * In browsers, it is often shown as:
 * __proto__   (DO NOT use in production code)
 ************************************************************/


/************************************************************
 * 9️⃣ Why JavaScript uses Prototypes (Key Reason)
 *
 * ✔ Memory efficient
 * ✔ Methods shared across all instances
 * ✔ Dynamic (can add methods even later)
 ************************************************************/


/************************************************************
 * 🔟 Common Interview Question
 *
 * Q: Is JavaScript class-based or prototype-based?
 *
 * A: JavaScript is prototype-based.
 *    Classes are just syntactic sugar over prototypes.
 ************************************************************/


/************************************************************
 * 1️⃣1️⃣ Same Example using Class (Behind the Scenes)
 *
 * This:
 *
 * class Person {
 *   constructor(name) {
 *     this.name = name;
 *   }
 *   greet() {
 *     console.log("Hello " + this.name);
 *   }
 * }
 *
 * Internally still uses:
 * Person.prototype.greet
 ************************************************************/


/************************************************************
 * 1️⃣2️⃣ Common Mistakes (Avoid in Interviews ❌)
 *
 * ❌ Saying JavaScript copies properties
 * ❌ Saying prototypes are classes
 * ❌ Confusing __proto__ with prototype
 ************************************************************/


/************************************************************
 * 1️⃣3️⃣ Correct Mental Model
 *
 * Objects DO NOT own all methods.
 * They BORROW them from their prototype.
 ************************************************************/


/************************************************************
 * 1️⃣4️⃣ Final Summary (Must Remember)
 *
 * ✔ Prototypal inheritance means objects inherit from objects
 * ✔ Methods live on prototype, not inside constructor
 * ✔ Prototype chain handles property lookup
 ************************************************************/
