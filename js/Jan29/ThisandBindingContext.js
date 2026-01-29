/************************************************************
 * 📌 THIS KEYWORD + BIND / CALL / APPLY – NOTES
 * File: this-bind-call-apply-notes.js
 *
 * These notes explain:
 * - What `this` means
 * - How context is decided
 * - Why context is lost
 * - How bind, call, apply fix it
 ************************************************************/


/************************************************************
 * 1️⃣ What is `this` in JavaScript?
 *
 * `this` does NOT mean the function itself.
 * `this` means:
 *
 * 👉 "Who is calling the function?"
 *
 * The value of `this` is decided at RUNTIME,
 * not when the function is written.
 ************************************************************/


/************************************************************
 * 2️⃣ Simple Object Example
 ************************************************************/

const person = {
    name: "Hitesh",
    greet: function () {
        console.log(`Hi, I am ${this.name}`);
    }
};

person.greet(); 
// Output: Hi, I am Hitesh
// Reason: person is calling greet → this = person


/************************************************************
 * 3️⃣ Context Loss Problem (VERY IMPORTANT)
 *
 * When you copy a function reference,
 * the context (`this`) is LOST.
 ************************************************************/

const greetFunction = person.greet;

// Now greetFunction is just a function reference
greetFunction();
// Output: Hi, I am undefined (or error in strict mode)

// Reason:
// No object is calling greetFunction
// so `this` is NOT person anymore


/************************************************************
 * 4️⃣ Why Context Is Lost (Real Reason)
 *
 * JavaScript does NOT remember the object.
 * It only checks:
 *
 * object.method()  → this = object
 * method()         → this = undefined / global
 ************************************************************/


/************************************************************
 * 5️⃣ SOLUTION: bind()
 *
 * bind() creates a NEW function
 * with `this` PERMANENTLY fixed.
 ************************************************************/

const boundGreet = person.greet.bind({ name: "John" });

boundGreet();
// Output: Hi, I am John


/************************************************************
 * 6️⃣ What bind() actually does
 *
 * ❌ Does NOT execute the function
 * ✅ Returns a new function
 * ✅ Locks `this` forever
 ************************************************************/


/************************************************************
 * 7️⃣ call()
 *
 * call() executes the function IMMEDIATELY
 * and sets `this` temporarily.
 *
 * Syntax:
 * function.call(context, arg1, arg2, ...)
 ************************************************************/

person.greet.call({ name: "Alice" });
// Output: Hi, I am Alice


/************************************************************
 * 8️⃣ apply()
 *
 * apply() is SAME as call()
 * ONLY difference:
 * arguments are passed as an ARRAY
 *
 * Syntax:
 * function.apply(context, [arg1, arg2, ...])
 ************************************************************/

person.greet.apply({ name: "Bob" });
// Output: Hi, I am Bob


/************************************************************
 * 9️⃣ bind vs call vs apply (INTERVIEW TABLE)
 *
 * | Method | Executes Immediately | Returns Function |
 * |-------|----------------------|------------------|
 * | bind  | ❌ No                | ✅ Yes           |
 * | call  | ✅ Yes               | ❌ No            |
 * | apply | ✅ Yes               | ❌ No            |
 ************************************************************/


/************************************************************
 * 🔟 When to use what?
 *
 * ✔ bind → event handlers, callbacks, later execution
 * ✔ call → immediate function execution
 * ✔ apply → same as call but arguments already in array
 ************************************************************/


/************************************************************
 * 1️⃣1️⃣ Real-Life Analogy (Context)
 *
 * Statement:
 * "I have fans"
 *
 * Without context → unclear
 * With context → YouTube fans
 *
 * bind() → attach the full story forever
 * call() → explain story once
 ************************************************************/


/************************************************************
 * 1️⃣2️⃣ Common Mistakes (Avoid ❌)
 *
 * ❌ Assuming `this` refers to function
 * ❌ Forgetting context is decided at call-time
 * ❌ Using bind when immediate execution is needed
 ************************************************************/


/************************************************************
 * 1️⃣3️⃣ Strict Mode Note
 *
 * In strict mode:
 * - `this` = undefined (not window)
 *
 * This is why context loss causes errors.
 ************************************************************/


/************************************************************
 * 1️⃣4️⃣ FINAL SUMMARY (MUST REMEMBER)
 *
 * ✔ `this` depends on how a function is called
 * ✔ Context is lost when function is detached
 * ✔ bind fixes context permanently
 * ✔ call & apply fix context temporarily
 ************************************************************/


/************************************************************
 * 🎯 INTERVIEW ONE-LINER
 *
 * "`this` refers to the object that invokes the function,
 * and bind, call, and apply are used to explicitly control
 * that context."
 ************************************************************/
