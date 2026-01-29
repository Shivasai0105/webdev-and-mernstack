/************************************************************
 * 📌 PROMISES & ASYNCHRONOUS JAVASCRIPT – NOTES
 * File: promises-notes.js
 *
 * These notes are written fully inside comments so that:
 * 1. You can read them like a document
 * 2. Beginners can understand what is happening
 * 3. Code + explanation stay together
 ************************************************************/


/************************************************************
 * 1️⃣ What is Asynchronous JavaScript?
 *
 * JavaScript normally runs code line by line (synchronous).
 * But some operations take TIME:
 * - Network requests (API calls)
 * - Reading/Writing files
 * - Timers (setTimeout, setInterval)
 *
 * JavaScript does NOT wait for these to finish.
 * Instead, it continues executing the next lines.
 * This behavior is called ASYNCHRONOUS execution.
 ************************************************************/


/************************************************************
 * 2️⃣ What is a Promise?
 *
 * A Promise is an object that represents a value
 * that will be available:
 * - in the future
 * - OR may fail
 *
 * A Promise has ONLY THREE STATES:
 * 1. pending   → operation is still running
 * 2. fulfilled → operation completed successfully
 * 3. rejected  → operation failed
 ************************************************************/


/************************************************************
 * 3️⃣ How to Create a Promise
 *
 * A Promise is ALWAYS created using:
 * new Promise()
 *
 * The Promise constructor takes a CALLBACK function.
 * This callback automatically receives TWO parameters:
 * 1. resolve → call this when work is successful
 * 2. reject  → call this when work fails
 ************************************************************/


// Example function that RETURNS a Promise
function fetchData() {

    // Creating a Promise manually
    return new Promise((resolve, reject) => {

        // Simulate delay (like API call / DB query)
        setTimeout(() => {

            // This variable decides success or failure
            let success = true; // change to false to test rejection

            if (success) {
                // If everything went well
                resolve("Data fetched successfully");
            } else {
                // If something went wrong
                reject("Error fetching data");
            }

        }, 3000); // 3 seconds delay
    });
}


/************************************************************
 * 4️⃣ Consuming (Using) a Promise
 *
 * When a Promise is used, it DOES NOT return actual data.
 * It returns a Promise object first (usually in pending state).
 *
 * To handle the result, we use:
 * - .then()  → for resolve (success)
 * - .catch() → for reject (failure)
 ************************************************************/


fetchData()

    // Runs when resolve() is called
    .then((data) => {
        console.log("SUCCESS:", data);

        // Whatever you return here
        // goes to the NEXT .then()
        return data.toLowerCase();
    })

    // Runs after previous .then() return
    .then((processedData) => {
        console.log("PROCESSED DATA:", processedData);
    })

    // Runs when reject() is called
    .catch((error) => {
        console.error("ERROR:", error);
    });


/************************************************************
 * 5️⃣ Important Rules to Remember (VERY IMPORTANT)
 *
 * ✔ Promise is created using: new Promise()
 * ✔ Promise callback ALWAYS receives:
 *      (resolve, reject)
 * ✔ resolve(value)  → goes to .then(value)
 * ✔ reject(value)   → goes to .catch(value)
 * ✔ .then() can be chained
 * ✔ Returned value from .then() goes to next .then()
 * ✔ A Promise NEVER blocks JavaScript execution
 ************************************************************/


/************************************************************
 * 6️⃣ Common Beginner Mistakes (Avoid These ❌)
 *
 * ❌ Expecting Promise to return data immediately
 * ❌ Forgetting to return Promise from function
 * ❌ Writing heavy logic inside .then() instead of chaining
 * ❌ Confusing resolve/reject with true/false
 ************************************************************/


/************************************************************
 * 7️⃣ Real-Life Analogy
 *
 * Promise is like ordering food online 🍔
 *
 * - pending   → order placed, waiting
 * - fulfilled → food delivered
 * - rejected  → restaurant canceled
 *
 * resolve() → food arrived
 * reject()  → order failed
 ************************************************************/


/************************************************************
 * 8️⃣ Final Summary (One-Liner)
 *
 * A Promise is a clean way to handle asynchronous work
 * without blocking JavaScript execution.
 ************************************************************/
