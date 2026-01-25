/******************************************************************************************
 * JAVASCRIPT PROTOTYPES & OOP – CLEAN NOTES
 *
 * GOAL OF THIS FILE:
 * 1. Understand WHAT prototype is
 * 2. Understand WHY JavaScript is prototype-based
 * 3. Understand HOW classes are just "syntax sugar"
 * 4. Learn inheritance the JS way
 *
 * Read this slowly. Re-run code snippets. This is FOUNDATION.
 ******************************************************************************************/

/*
===========================================================================================
PART 1: WHAT IS OBJECT-ORIENTED PROGRAMMING (OOP)?
===========================================================================================

OOP is a way of organizing code using:
- Classes (blueprints)
- Objects (real instances)
- Inheritance (sharing features)

REAL WORLD ANALOGY:
Blueprint → House
Class     → Blueprint
Object    → Actual house built from blueprint
*/

/*
===========================================================================================
PART 2: JAVASCRIPT IS NOT TRULY CLASS-BASED
===========================================================================================

JavaScript was NEVER class-based originally.

It is:
❌ NOT Java-style OOP
✅ PROTOTYPE-based

Classes were added later (ES6) ONLY to make syntax familiar.
Behind the scenes → everything still works via PROTOTYPES.
*/

/*
===========================================================================================
PART 3: WHAT IS A PROTOTYPE?
===========================================================================================

Prototype = a hidden object that stores:
- shared properties
- shared methods

Every JS object has an internal link to a prototype.

When you access a property:
1. JS looks in the object itself
2. If not found → looks in its prototype
3. Keeps going up (prototype chain)
*/

/*
===========================================================================================
PART 4: BASIC PROTOTYPE EXAMPLE
===========================================================================================
*/

const computer = {
  cpu: 12
};

// Even though you only defined `cpu`, this object has MANY methods
console.log(computer.__proto__);
/*
This prototype contains:
toString, valueOf, hasOwnProperty, etc.
These come from Object.prototype
*/

/*
===========================================================================================
PART 5: PROTOTYPE INHERITANCE (CORE IDEA)
===========================================================================================

Instead of copying properties,
JS objects SHARE them via prototype links.
*/

const genericCar = {
  wheels: 4
};

const tesla = {
  driver: "AI"
};

// Link tesla → genericCar
Object.setPrototypeOf(tesla, genericCar);

console.log(tesla.driver); // "AI"   (own property)
console.log(tesla.wheels); // 4      (from prototype)

/*
IMPORTANT:
- tesla does NOT have wheels directly
- JS finds wheels via prototype chain
*/

/*
===========================================================================================
PART 6: HOW PROPERTY LOOKUP WORKS (VERY IMPORTANT)
===========================================================================================

tesla.wheels →

1️⃣ Does tesla have wheels? ❌
2️⃣ Check prototype (genericCar) → ✅
3️⃣ Return value

This is called PROTOTYPE CHAIN
*/

/*
===========================================================================================
PART 7: hasOwnProperty (INTERVIEW FAVORITE)
===========================================================================================

Used to check:
"Is this property OWNED by the object, or inherited?"
*/

console.log(tesla.hasOwnProperty("driver")); // true
console.log(tesla.hasOwnProperty("wheels")); // false

/*
driver → own property
wheels → inherited from prototype
*/

/*
===========================================================================================
PART 8: WHY __proto__ IS DISCOURAGED
===========================================================================================

__proto__ works, but:
❌ old
❌ slower
❌ not recommended in production

Better:
Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj, proto)
*/

console.log(Object.getPrototypeOf(tesla)); // genericCar

/*
===========================================================================================
PART 9: FUNCTIONS ALSO USE PROTOTYPES
===========================================================================================

Functions are special objects.
They have a `.prototype` property.
*/

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, I'm ${this.name}`;
};

const u1 = new User("Alex");
console.log(u1.sayHi());

/*
What happens:
u1 → User.prototype → Object.prototype → null
*/

/*
===========================================================================================
PART 10: CLASSES ARE JUST SYNTAX SUGAR
===========================================================================================

THIS:
*/

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const p1 = new Person("Sam");
console.log(p1.greet());

/*
IS INTERNALLY THE SAME AS:
*/

function PersonOld(name) {
  this.name = name;
}

PersonOld.prototype.greet = function () {
  return `Hello ${this.name}`;
};

/*
Classes DO NOT remove prototypes.
They only hide them.
*/

/*
===========================================================================================
PART 11: PROTOTYPE CHAIN SUMMARY
===========================================================================================

Array → Array.prototype → Object.prototype → null
Function → Function.prototype → Object.prototype → null
Object → Object.prototype → null

Everything eventually ends at null.
*/

/*
===========================================================================================
PART 12: WHEN SHOULD YOU CARE ABOUT PROTOTYPES?
===========================================================================================

You MUST understand prototypes to:
✅ Understand classes
✅ Understand inheritance
✅ Debug weird property access bugs
✅ Answer interview questions
*/

/*
===========================================================================================
FINAL MENTAL MODEL (REMEMBER THIS)
===========================================================================================

JavaScript does NOT copy behavior.
JavaScript LINKS objects via prototypes.

"Give me access to your abilities" — not "copy your abilities".
******************************************************************************************/
