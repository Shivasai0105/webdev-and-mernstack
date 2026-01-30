# 🎓 Jan 23 - Loops (Beginner's Revision Guide)

## 📚 What You Learned This Month

You learned how to **repeat code multiple times** using loops - one of the most important concepts in programming!

---

## 🔑 Key Concepts (Made Simple)

### 1. **What is a Loop?**

A loop lets you **repeat code** without writing it multiple times.

```javascript
// ❌ Without loop (boring!)
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// ✅ With loop (clean!)
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

**Think of it like:** "Do this 5 times" instead of writing it 5 times.

---

### 2. **For Loop - The Most Common Loop**

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Breaking it down:**
- `let i = 1` → Start: create counter at 1
- `i <= 5` → Condition: keep going while i is ≤ 5
- `i++` → Update: increase i by 1 after each round
- Code in `{}` → What to do each time

**Step by step:**
```
Round 1: i = 1, check 1 <= 5 ✅, print 1, then i becomes 2
Round 2: i = 2, check 2 <= 5 ✅, print 2, then i becomes 3
Round 3: i = 3, check 3 <= 5 ✅, print 3, then i becomes 4
Round 4: i = 4, check 4 <= 5 ✅, print 4, then i becomes 5
Round 5: i = 5, check 5 <= 5 ✅, print 5, then i becomes 6
Round 6: i = 6, check 6 <= 5 ❌, STOP!
```

---

### 3. **Looping Through Arrays**

Most common use: process each item in an array

```javascript
const fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// Apple
// Banana
// Mango
// Orange
```

**Why `i < fruits.length`?** Because array indices start at 0!
- Index 0 → "Apple"
- Index 1 → "Banana"
- Index 2 → "Mango"
- Index 3 → "Orange"

---

### 4. **While Loop - Keep Going Until Condition is False**

```javascript
let count = 0;

while (count < 3) {
  console.log(`Count is ${count}`);
  count++;
}
// Output:
// Count is 0
// Count is 1
// Count is 2
```

**How it works:**
- Check condition
- If true, run code
- Then check again
- If still true, run again
- Repeat until false

---

### 5. **Do-While Loop - Run at Least Once**

```javascript
let number = 10;

do {
  console.log(number);
  number++;
} while (number < 5);
// Output: 10 (runs ONCE even though condition is false!)
```

**Difference from while:** Code runs at least once, THEN checks condition.

---

### 6. **Breaking Out of Loops**

Sometimes you want to stop early:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Stop the loop completely
  }
  console.log(i);
}
// Output: 1, 2, 3, 4 (stops at 5)
```

---

### 7. **Skipping an Iteration**

Sometimes you want to skip one round:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip this round, go to next
  }
  console.log(i);
}
// Output: 1, 2, 4, 5 (skips 3)
```

---

### 8. **forEach - Modern Way to Loop Arrays**

```javascript
const cities = ["Paris", "New York", "Tokyo", "London"];

cities.forEach((city, index) => {
  console.log(`${index}: ${city}`);
});
// Output:
// 0: Paris
// 1: New York
// 2: Tokyo
// 3: London
```

**Benefits:** 
- Cleaner code
- No need to manage counter
- `forEach` is built for arrays

---

## 🎯 How to Use This in Projects

### Example 1: Calculate Total Price
```javascript
const items = [100, 200, 150];
let total = 0;

for (let i = 0; i < items.length; i++) {
  total += items[i];
}

console.log(`Total: ${total}`); // 450
```

### Example 2: Find Maximum Number
```javascript
const numbers = [45, 23, 89, 12, 67];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(`Highest: ${max}`); // 89
```

### Example 3: Display User List
```javascript
const users = ["Alice", "Bob", "Charlie"];

users.forEach((user, index) => {
  console.log(`${index + 1}. ${user}`); // 1-based numbering
});
// Output:
// 1. Alice
// 2. Bob
// 3. Charlie
```

### Example 4: Game - Countdown Timer
```javascript
let countdown = 5;

while (countdown > 0) {
  console.log(`Starting in ${countdown}...`);
  countdown--;
}

console.log("Go!");
```

---

## ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right | Why |
|---------|---------|-----|
| `for (let i = 1; i < 5; i++)` for 5 items | `for (let i = 0; i < 5; i++)` | Arrays start at 0! |
| Infinite loop (no end condition) | Always have clear exit condition | Prevents browser freeze |
| `i++` after `break` matters | Use `break` to exit immediately | Don't continue if breaking |
| Modifying array while looping | Create new array for changes | Avoids skipping items |

---

## 📝 Quick Reference Card

```javascript
// === FOR LOOP ===
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// === WHILE LOOP ===
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// === DO-WHILE LOOP ===
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

// === FOR EACH (ARRAYS) ===
const array = [1, 2, 3];
array.forEach((item, index) => {
  console.log(index, item);
});

// === BREAK & CONTINUE ===
for (let i = 0; i < 10; i++) {
  if (i === 5) break;      // Exit loop
  if (i === 2) continue;   // Skip this round
  console.log(i);
}
```

---

## 🚀 Practice Challenges

1. **Print 1 to 10** using a for loop
2. **Sum an array:** Add all numbers in `[10, 20, 30, 40]`
3. **Find average:** Calculate average of `[5, 10, 15, 20, 25]`
4. **Count occurrences:** How many times does "apple" appear in `["apple", "banana", "apple", "orange", "apple"]`?
5. **Double each:** Create new array with each number doubled from `[1, 2, 3, 4, 5]`

---

## 💡 Key Takeaway

**Loops are your power tool!** Instead of writing repetitive code, you write it once and tell the computer "do this N times." This is the foundation for processing large amounts of data.

Next month: You'll learn **FUNCTIONS** - how to organize your code into reusable blocks! 🎉

