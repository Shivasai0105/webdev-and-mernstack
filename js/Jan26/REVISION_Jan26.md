# 🎓 Jan 26 - DOM Basics: Window, BOM & Simple Manipulation (Beginner's Revision Guide)

## 📚 What You Learned This Month

You learned how to **interact with web pages** - accessing the browser window, getting page information, and manipulating HTML from JavaScript!

---

## 🔑 Key Concepts (Made Simple)

### 1. **What is the DOM?**

**DOM = Document Object Model**

It's a way to represent your HTML as a tree of objects that JavaScript can interact with.

```
HTML Code:
<html>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>

DOM Tree:
     html
      |
    body
    /   \
   h1    p
```

**Why this matters?** JavaScript can access and change ANY element on the page!

---

### 2. **The Window Object - The Big Boss**

`window` is the global object in browsers. It contains EVERYTHING:

```javascript
console.log(window);

// It contains:
window.document;    // The HTML page
window.location;    // URL info
window.navigator;   // Browser info
window.console;     // The console
window.Math;        // Math functions
```

**Think of it like:** Window is the entire browser application, and everything else lives inside it.

---

### 3. **Accessing Page Information**

#### **Document Properties**
```javascript
document.title;    // Get/set page title
document.URL;      // Current page URL
document.domain;   // Domain name

// Change title
document.title = "My New Title";
```

#### **Window Dimensions**
```javascript
window.outerWidth;   // Browser width (including toolbars)
window.outerHeight;  // Browser height (including toolbars)

window.innerWidth;   // Content width (just the webpage)
window.innerHeight;  // Content height (just the webpage)

// Responsive design needs innerWidth!
console.log(`Screen: ${window.innerWidth}x${window.innerHeight}`);
```

#### **Screen Information**
```javascript
screen.width;        // Monitor width
screen.height;       // Monitor height
screen.availWidth;   // Available width (minus taskbar, etc)
screen.availHeight;  // Available height

console.log(`Your monitor is ${screen.width}x${screen.height}`);
```

---

### 4. **Location Object - URL Information**

```javascript
// Current page URL: https://example.com:8080/path/page.html?id=123

location.href;       // "https://example.com:8080/path/page.html?id=123"
location.protocol;   // "https:"
location.hostname;   // "example.com"
location.port;       // "8080"
location.pathname;   // "/path/page.html"
location.search;     // "?id=123" (query string)

// Navigate to new page
location.href = "https://google.com"; // Redirects!
location.reload();                     // Refresh page
location.back();                       // Go back
```

---

### 5. **Navigator Object - Browser Information**

```javascript
navigator.userAgent;      // Full browser identifier
navigator.language;       // Browser language ("en-US")
navigator.cookieEnabled;  // Is cookies enabled?
navigator.onLine;         // Is user online?

// Practical uses:
if (navigator.onLine) {
  console.log("You're connected!");
} else {
  console.log("You're offline!");
}
```

---

### 6. **Selecting HTML Elements**

You need to select elements before you can change them.

#### **By ID**
```javascript
// Get element with id="myTitle"
const heading = document.getElementById("myTitle");
console.log(heading); // The element
```

#### **By Class Name**
```javascript
// Get all elements with class="highlight"
const elements = document.getElementsByClassName("highlight");
console.log(elements); // List of elements
```

#### **By Tag Name**
```javascript
// Get all <p> elements
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // List of elements
```

#### **Modern Way: Query Selector** (recommended)
```javascript
// Single element
const title = document.querySelector("#myTitle"); // ID
const para = document.querySelector(".highlight"); // Class
const link = document.querySelector("a");         // Tag

// All matching elements
const items = document.querySelectorAll(".item");
```

---

### 7. **Accessing HTML Content**

Once you select an element, access its content:

```html
<p id="myPara">Hello World</p>
```

```javascript
const para = document.getElementById("myPara");

// Read content
para.innerHTML;     // "Hello World" (with HTML tags)
para.innerText;     // "Hello World" (plain text)
para.textContent;   // "Hello World" (text only)

// Change content
para.innerHTML = "<strong>Bold text</strong>";  // Renders HTML
para.innerText = "New text";                    // Plain text only
```

**Difference:**
- `innerHTML` → includes HTML tags
- `innerText` → renders as user sees it
- `textContent` → raw text (safest for untrusted data)

---

### 8. **Navigating the DOM Tree**

```html
<div id="parent">
  <p id="child">Hello</p>
</div>
```

```javascript
const para = document.getElementById("child");

// Going up the tree
para.parentElement;     // The <div>
para.parentElement.parentElement; // The <body>

// Going down the tree
document.body.children;  // All direct children of body
document.body.firstChild; // First child (might be text node)
document.body.firstElementChild; // First element child

// Siblings
para.nextElementSibling;    // Element after this one
para.previousElementSibling; // Element before this one
```

---

## 🎯 How to Use This in Projects

### Example 1: Check if User is Online
```javascript
if (navigator.onLine) {
  console.log("✅ You're online!");
  // Fetch data from server
} else {
  console.log("❌ You're offline!");
  // Show cached data
}
```

### Example 2: Responsive Design Check
```javascript
function handleResize() {
  if (window.innerWidth < 600) {
    console.log("📱 Mobile view");
  } else {
    console.log("💻 Desktop view");
  }
}

window.addEventListener("resize", handleResize);
handleResize(); // Check on load
```

### Example 3: Display User's Location
```javascript
// Update page with current URL info
const urlInfo = document.getElementById("urlInfo");
urlInfo.innerHTML = `
  <p>Current page: ${location.href}</p>
  <p>Domain: ${location.hostname}</p>
`;
```

### Example 4: Get and Display Page Info
```html
<h1 id="title">My Page</h1>
<button id="changeBtn">Change Title</button>

<script>
  const changeBtn = document.getElementById("changeBtn");
  const title = document.getElementById("title");

  changeBtn.addEventListener("click", function() {
    const newTitle = prompt("Enter new title:");
    if (newTitle) {
      title.innerText = newTitle;
      document.title = newTitle; // Also change browser tab
    }
  });
</script>
```

---

## ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right | Why |
|---------|---------|-----|
| `document.getElementById(myId)` | `document.getElementById("myId")` | ID is a string |
| Change `.innerHTML` with untrusted data | Use `.innerText` or `.textContent` | Prevents security issues |
| Selecting before page loads | Select in script tag at end | Ensures elements exist |
| `window.innerWidth` for layouts | Use media queries + CSS | Proper approach |
| Accessing element that doesn't exist | Check if element exists first | Prevents errors |

---

## 📝 Quick Reference Card

```javascript
// === WINDOW INFO ===
window.innerWidth;       // Page width
window.innerHeight;      // Page height
window.outerWidth;       // Browser width
screen.width;            // Monitor width

// === DOCUMENT INFO ===
document.title;          // Page title
document.URL;            // Current URL
document.domain;         // Domain

// === LOCATION ===
location.href;           // Full URL
location.hostname;       // Domain
location.pathname;       // Page path

// === SELECTING ELEMENTS ===
document.getElementById("myId");
document.querySelector(".class");
document.querySelectorAll(".class");
document.getElementsByTagName("p");

// === CONTENT ===
element.innerHTML;       // With HTML
element.innerText;       // As displayed
element.textContent;     // Plain text

// === NAVIGATION ===
element.parentElement;
element.children;
element.nextElementSibling;
```

---

## 🚀 Practice Challenges

1. **Check online status:** Display message if user is online/offline
2. **Responsive check:** Log screen size on window resize
3. **URL parser:** Extract and display hostname and pathname
4. **Element selector:** Select a paragraph and change its text
5. **DOM navigation:** Find an element's parent and sibling

---

## 💡 Key Takeaway

**The DOM is how JavaScript talks to HTML.** With `window`, `document`, and selection methods, you can read ANY information from the page and change ANY element. This is the bridge between static HTML and interactive web pages!

Next month: You'll learn how to **respond to user interactions** with event handlers! 🎉

