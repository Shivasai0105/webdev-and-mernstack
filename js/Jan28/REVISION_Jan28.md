# 🎓 Jan 28 - DOM Manipulation: Events, Forms & Interaction (Beginner's Revision Guide)

## 📚 What You Learned This Month

You learned how to **respond to user actions** - clicks, typing, form submissions - and **dynamically change the page** based on those interactions!

---

## 🔑 Key Concepts (Made Simple)

### 1. **What are Events?**

Events are things that happen on a webpage:
- User clicks a button → `click` event
- User types in input → `input` event
- User submits form → `submit` event
- Page loads → `load` event

JavaScript can **listen** for these events and **react** to them.

```javascript
// Listen for a click event
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
  console.log("Button was clicked!");
});
```

---

### 2. **addEventListener - The Foundation**

```javascript
// Syntax:
element.addEventListener("eventType", callbackFunction);

// Examples:
button.addEventListener("click", handleClick);
input.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
```

**When to use:**
- ✅ Add multiple listeners to same element
- ✅ Remove listeners later if needed
- ✅ More flexible than `onclick` attribute

---

### 3. **Common Event Types**

#### **Mouse Events**
```javascript
element.addEventListener("click", fn);      // Single click
element.addEventListener("dblclick", fn);   // Double click
element.addEventListener("mouseover", fn);  // Hover on element
element.addEventListener("mouseout", fn);   // Hover away
element.addEventListener("mouseenter", fn); // Enter element
element.addEventListener("mouseleave", fn); // Leave element
```

#### **Keyboard Events**
```javascript
element.addEventListener("keydown", fn);    // Key pressed
element.addEventListener("keyup", fn);      // Key released
element.addEventListener("keypress", fn);   // Key pressed (deprecated)
```

#### **Form Events**
```javascript
form.addEventListener("submit", fn);        // Form submitted
input.addEventListener("input", fn);        // User types
input.addEventListener("change", fn);       // Value changed
input.addEventListener("focus", fn);        // Click on input
input.addEventListener("blur", fn);         // Click away from input
```

#### **Document Events**
```javascript
document.addEventListener("DOMContentLoaded", fn); // Page loaded
window.addEventListener("resize", fn);            // Window resized
window.addEventListener("scroll", fn);            // Page scrolled
```

---

### 4. **The Event Object**

Every callback receives an `event` object with useful info:

```javascript
button.addEventListener("click", function(event) {
  console.log(event.target);      // Element that was clicked
  console.log(event.type);        // Type of event ("click")
  console.log(event.timeStamp);   // When it happened
});

// For keyboard events:
input.addEventListener("keydown", function(event) {
  console.log(event.key);         // Which key ("Enter", "a", etc)
  console.log(event.code);        // "KeyA", "Enter", etc
});
```

---

### 5. **Event Delegation - Handle Multiple Elements**

Instead of listening to each item individually, listen to the parent:

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

```javascript
// ❌ Bad: Listen to each item separately
document.querySelectorAll("li").forEach(item => {
  item.addEventListener("click", handleClick);
});

// ✅ Good: Listen to parent, identify which child
const list = document.getElementById("list");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked:", event.target.innerText);
  }
});
```

**Benefits:**
- Works with dynamically added items
- Less memory used
- Cleaner code

---

### 6. **Form Handling**

```html
<form id="myForm">
  <input type="text" id="username" placeholder="Username">
  <input type="password" id="password" placeholder="Password">
  <button type="submit">Login</button>
</form>
```

```javascript
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  // ⚠️ IMPORTANT: Stop default form submission!
  event.preventDefault();
  
  // Now get the values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Validate
  if (username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }
  
  // Process (send to server, etc)
  console.log("Logging in:", username);
});
```

**Key points:**
- `event.preventDefault()` stops default form submission
- `.value` gets input text
- Always validate before processing

---

### 7. **Modifying Elements Dynamically**

```javascript
const element = document.getElementById("myElement");

// Change content
element.innerText = "New text";
element.innerHTML = "<strong>Bold</strong>";

// Change attributes
element.setAttribute("class", "highlight");
element.id = "newId";
element.style.color = "red";

// Check if has class
element.classList.contains("active"); // true/false

// Add/remove classes
element.classList.add("highlight");
element.classList.remove("highlight");
element.classList.toggle("highlight"); // Add if not there, remove if there

// Create new elements
const newDiv = document.createElement("div");
newDiv.innerText = "I'm new!";
document.body.appendChild(newDiv);

// Remove elements
element.remove();
```

---

### 8. **Preventing Default Behavior**

```javascript
// Stop form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Your code here
});

// Stop link navigation
link.addEventListener("click", (e) => {
  e.preventDefault();
  // Your code here instead of going to URL
});

// Stop page scroll
document.addEventListener("scroll", (e) => {
  e.preventDefault();
  // Your code instead of scrolling
});
```

---

## 🎯 How to Use This in Projects

### Example 1: Toggle Theme
```javascript
const themeButton = document.getElementById("themeToggle");
const body = document.body;

themeButton.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  
  // Save preference
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});
```

### Example 2: Real-time Input Validation
```html
<input id="email" type="text" placeholder="Enter email">
<span id="error" style="color: red;"></span>
```

```javascript
const email = document.getElementById("email");
const error = document.getElementById("error");

email.addEventListener("input", function() {
  if (this.value.includes("@")) {
    error.innerText = "✅ Valid email";
    error.style.color = "green";
  } else {
    error.innerText = "❌ Invalid email";
    error.style.color = "red";
  }
});
```

### Example 3: Add Item to List
```html
<input id="itemInput" type="text">
<button id="addBtn">Add</button>
<ul id="itemList"></ul>
```

```javascript
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("itemList");

addBtn.addEventListener("click", function() {
  const itemText = input.value.trim();
  
  if (itemText === "") {
    alert("Please enter an item");
    return;
  }
  
  // Create list item
  const li = document.createElement("li");
  li.innerText = itemText;
  list.appendChild(li);
  
  // Clear input
  input.value = "";
  input.focus();
});

// Enter key to submit
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
```

### Example 4: Dynamic Content Update
```javascript
const contentDiv = document.getElementById("content");

// Handle clicks anywhere in content
contentDiv.addEventListener("click", function(event) {
  if (event.target.classList.contains("deleteBtn")) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains("editBtn")) {
    const newText = prompt("New text:");
    event.target.parentElement.innerText = newText;
  }
});
```

---

## ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right | Why |
|---------|---------|-----|
| Forget `event.preventDefault()` | Always use it on forms | Prevents page reload |
| Use `onclick` attribute | Use `addEventListener` | More flexible |
| Modify while looping | Loop first, then modify | Avoid index issues |
| Set `.innerHTML` with user data | Use `.innerText` or `.textContent` | Prevents XSS attacks |
| Listen to form instead of button | Use `submit` event | Gets form data |

---

## 📝 Quick Reference Card

```javascript
// === ADD LISTENER ===
element.addEventListener("click", function(event) {
  console.log(event);
});

// === EVENT OBJECT ===
event.target;           // Element that triggered
event.type;             // Type of event
event.preventDefault(); // Stop default action
event.key;              // Which key (keyboard)

// === FORM EVENTS ===
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
});

// === MODIFY ELEMENTS ===
element.innerText = "text";
element.innerHTML = "<b>html</b>";
element.classList.add("class");
element.classList.toggle("class");

// === CREATE & REMOVE ===
const el = document.createElement("div");
element.appendChild(el);
element.remove();
```

---

## 🚀 Practice Challenges

1. **Counter App**
   - Buttons: +1, -1, Reset
   - Display current count
   - Prevent negative numbers

2. **To-Do App**
   - Input + Add button
   - List items
   - Delete buttons on each item
   - Strike through when clicked

3. **Form Validation**
   - Email field (must have @)
   - Password field (min 8 chars)
   - Show errors in real-time

4. **Image Gallery**
   - Display images
   - Previous/Next buttons
   - Show current image number

5. **Simple Quiz**
   - Display question
   - Multiple choice buttons
   - Score tracking
   - Show results at end

---

## 💡 Key Takeaway

**Events make websites interactive!** Without events, websites are just static text. With events, you can:
- Respond to clicks
- Validate input
- Update content without page reload
- Build dynamic applications

This is what separates static websites from interactive web apps!

Next month: You'll learn **CLOSURES** - how to create private variables and advanced function patterns! 🎉

