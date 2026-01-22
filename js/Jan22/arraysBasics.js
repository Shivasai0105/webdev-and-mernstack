/*
ARRAY ASSIGNMENT — 1 (Foundational but strict)
📌 Question 1: Array Access & Update

You are given an array:

let fruits = ["Apple", "Banana", "Mango", "Orange"];

Your tasks:

Store the first element in a variable named firstFruit

Store the last element in a variable named lastFruit

Change "Banana" to "Grapes" using index

Print the final array

Rules:

❌ No loops

❌ No array methods except .length

✅ Use indexing only

Expected thinking focus:

Indexing

.length - 1

Direct mutation
*/
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let firstFruit = fruits[0];
let lastFruit = fruits[fruits.length-1];
fruits[1] = "Grapes"
console.log(fruits)

/*
ARRAY ASSIGNMENT — 2 (Conceptual Upgrade)
📌 Question 2: Add & Remove (Method Control)

You are given:

let cities = ["Delhi", "Mumbai"];

Your tasks:

Add "Bangalore" to the end of the array

Remove the last city and store it in a variable named removedCity

Print:

the updated cities array

the value of removedCity

Rules:

✅ You may use push() and pop()

❌ No loops

❌ No direct indexing for add/remove
*/

let cities = ["Delhi", "Mumbai"];
cities.push("Bangalore");
let removedCity = cities.pop();
console.log(cities);
console.log(removedCity);

/*

ARRAY ASSIGNMENT — 3 (Reference vs Copy — Critical)

This one separates beginners from real JS devs.

📌 Question 3: Soft Copy Behavior

Given:

let original = ["Tea", "Coffee", "Milk"];

Your tasks:

Create a variable named softCopy that copies original

Remove the last element from original

Print:

original

softCopy

Rules:

❌ No spread operator

❌ No slice

❌ No loops

✅ Only assignment allowed

👉 The goal is to observe behavior, not fix it.
*/
let original = ["Tea", "Coffee", "Milk"];
let softCopy = original
softCopy.pop();
console.log(original)
console.log(softCopy)


/*
Arrays are non-primitive → stored by reference, not by value.

What really happens in memory:

original  ──▶  ["Tea", "Coffee", "Milk"]
softCopy  ──▶  same memory location


So when you do:

softCopy.pop();


You are modifying the same array that original points to.

📌 Key rule to remember forever:

Assignment (=) copies the reference for arrays & objects, not the data.
// */
// // ARRAY ASSIGNMENT — 4 (Hard Copy — Fix the Problem)

// Now we fix what you just observed.

// 📌 Question 4: Hard Copy Creation

// Given:

// let original = ["Tea", "Coffee", "Milk"];

// Your tasks:

// Create a variable named hardCopy that is an independent copy

// Remove the last element from original

// Print:

// original

// hardCopy

// Rules:

// ✅ You must use the spread operator (...)

// ❌ No slice()

// ❌ No loops

// Expected behavior:

// original changes

// hardCopy remains unchanged

let originals = ["Tea", "Coffee", "Milk"];
let hardCopy = [...originals];
originals.pop();
console.log(originals);
console.log(hardCopy);
//Spread operator creates a new array
// Separate memory allocation

/*
ARRAY ASSIGNMENT — 5 (Merge Arrays — Thinking Trap)

This one is about doing it the right way, not just making it work.

📌 Question 5: Merge Arrays Safely

Given:

let europe = ["Paris", "Rome"];
let asia = ["Tokyo", "Bangkok"];

Your tasks:

Create a new array named world

Merge europe and asia into world

Print world

Rules:

❌ Do NOT use +

❌ Do NOT nest arrays ([europe, asia])

✅ Use either:

concat() OR

spread operator

📌 Choose one, not both.
*/
let europe = ["Paris", "Rome"];
let asia = ["Tokyo", "Bangkok"];
let world = europe.concat(asia);
console.log(world);
/* 
ARRAY ASSIGNMENT — 6 (Existence Check + Boolean Logic)

This one checks precision.

📌 Question 6: Check Element Presence

Given:

let bucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

Your tasks:

Create a variable named hasLondon

Store true if "London" exists in the array, otherwise false

Print hasLondon

Rules:

✅ Must use includes()

❌ No loops

❌ No manual comparison

📌 Be careful with case sensitivity.
*/

let bucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let hasLondon = bucketList.includes("London");
console.log(hasLondon)
