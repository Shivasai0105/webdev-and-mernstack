// ITERATORS & GENERATORS — SUPER SIMPLE NOTES
//

// 1) Big idea: "One step at a time"
// Imagine a candy box with 3 candies.
// You don't eat all candies at once.
// You take ONE candy, then the next, then the next.
// That is how iterators and generators work.

// 2) Iterator (simple meaning)
// An iterator is like a "next" button.
// Each time you press it, you get the next item.

// Example: using a built-in iterator from an array
const colors = ["red", "green", "blue"];
const iterator = colors[Symbol.iterator]();

// Press the "next" button:
console.log(iterator.next()); // { value: "red", done: false }
console.log(iterator.next()); // { value: "green", done: false }
console.log(iterator.next()); // { value: "blue", done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Explanation:
// - value: the current item
// - done: true means "no more items left"

// 3) Generator (simple meaning)
// A generator is a special function that can PAUSE and RESUME.
// It gives one value, then waits for you to ask again.

// To make a generator function, add a * after function
function* numberGenerator() {
	// yield is like "pause and give this value"
	yield 1;
	yield 2;
	yield 3;
}

const gen = numberGenerator(); // gen is a generator object

// Each time we call .next(), we get the next value
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// 4) Why is this special?
// Generators do NOT run everything at once.
// They run step-by-step when you ask.
// This is useful when data is big or slow to get.

// 5) Two different generators remember their own place
const genA = numberGenerator();
const genB = numberGenerator();

console.log(genA.next().value); // 1
console.log(genA.next().value); // 2

console.log(genB.next().value); // 1 (genB starts fresh)
console.log(genB.next().value); // 2

console.log(genA.next().value); // 3 (genA continues)

// 6) Where do you see iterators in real code?
// for...of loops use iterators behind the scenes
for (const color of colors) {
	console.log("for...of color:", color);
}

// 7) Quick difference: Iterator vs Generator
// - Iterator: has a .next() method that gives items one by one.
// - Generator: creates iterators easily using function* and yield.

// 8) When to use (simple answer)
// - Very rare in daily beginner code.
// - Useful in libraries/frameworks or advanced cases.
// - Good to know the idea, but not required to master right now.
