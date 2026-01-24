/********************************************************************
 *  JAVASCRIPT TYPE CONVERSION & TRUTHY / FALSEY — NOTES
 *  Topic:
 *  - Explicit type conversion
 *  - Boolean logic
 *  - NaN behavior
 *  - Truthy & Falsey values
 *
 *  Format:
 *  Question → Correct Solution → Explanation (comments)
 ********************************************************************/


/* ================================================================
   TASK 1
   QUESTION:
   Write a function stringToNumber that takes a string input and
   tries to convert it to a number.
   If the conversion fails, return "Not a number".
   ================================================================ */

function stringToNumber(input) {
    // Number() explicitly tries to convert input to a number
    let num = Number(input);

    // isNaN checks whether the result is "Not-a-Number"
    // IMPORTANT: NaN is a special numeric value in JS
    if (isNaN(num)) {
        return "Not a number";
    }

    // If conversion succeeds, return the number
    return num;
}

/*
WHY THIS WORKS:
- Number("123")  → 123
- Number("abc")  → NaN
- isNaN(NaN)     → true
*/


/* ================================================================
   TASK 2
   QUESTION:
   Write a function flipBoolean that:
   - Converts any input to its boolean equivalent
   - Flips it
   Examples:
   true  → false
   0     → true
   ================================================================ */

function flipBoolean(input) {
    // Boolean(input) converts the value to true or false
    // ! (logical NOT) flips the boolean value
    return !Boolean(input);
}

/*
WHY THIS IS CORRECT:
- Boolean(value) → explicit boolean conversion
- ! is LOGICAL NOT (correct for booleans)

WHY ~ WAS WRONG:
- ~ is BITWISE NOT
- ~true  → -2
- ~false → -1
- Bitwise operators return numbers, NOT booleans
*/


/* ================================================================
   TASK 3
   QUESTION:
   Write a function whatAmI that:
   - Takes an input
   - Returns its type AFTER conversion
   - If it's a number → "I'm a number!"
   - If it's a string → "I'm a string!"
   ================================================================ */

function whatAmI(input) {
    // Try converting input to a number
    let converted = Number(input);

    // If conversion succeeds (not NaN), treat as number
    if (!isNaN(converted)) {
        return "I'm a number!";
    }

    // Otherwise, treat as string
    return "I'm a string!";
}

/*
WHY typeof WAS WRONG EARLIER:
- typeof input only checks ORIGINAL type
- Task asks for type AFTER conversion
- "123" should become a number, not remain a string
*/


/* ================================================================
   TASK 4
   QUESTION:
   Write a function isItTruthy that:
   - Returns "It's truthy!" if input is truthy
   - Returns "It's falsey!" if input is falsey
   ================================================================ */

function isItTruthy(input) {
    // if condition automatically checks truthy / falsey
    if (input) {
        return "It's truthy!";
    }

    return "It's falsey!";
}

/*
TRUTHY VALUES (examples):
- true
- 1, -1
- "hello"
- {}
- []

FALSEY VALUES (ONLY THESE):
- false
- 0
- ""
- null
- undefined
- NaN
*/


/* ================================================================
   QUICK REVISION SUMMARY
   ================================================================

1️⃣ Number() → explicit numeric conversion
2️⃣ isNaN() → detects invalid numbers
3️⃣ Boolean() → explicit boolean conversion
4️⃣ ! → logical NOT (boolean flip)
5️⃣ ~ → bitwise operator (avoid for booleans)
6️⃣ if(value) → checks truthy / falsey
7️⃣ typeof ≠ conversion

RULE TO REMEMBER:
"JavaScript converts values automatically in conditions,
 but you should convert explicitly in logic."
*/


/********************************************************************
 * END OF NOTES
 ********************************************************************/
