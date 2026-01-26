// ==========================================
// DOM MANIPULATION WITH JAVASCRIPT
// ==========================================

// Introduction:
// DOM (Document Object Model) allows you to manipulate webpages
// You can create, read, update, delete elements
// You can automate tasks, extract data, and modify the webpage

console.log("Hello from script");

// ==========================================
// WINDOW OBJECT
// ==========================================

// The browser window is represented by the 'window' object
// Everything in JavaScript runs inside this window object
// Window contains: DOM, BOM, and JavaScript core

// Window Object Structure:
// Window
//   ├── DOM (Document Object Model)
//   ├── BOM (Browser Object Model)
//   └── JavaScript (Objects, Arrays, Functions, Classes, etc.)

console.log(window); // View entire window object

// ==========================================
// BROWSER OBJECT MODEL (BOM)
// ==========================================

// BOM gives access to browser-related information
// Main components: screen, navigator, location

// 1. WINDOW DIMENSIONS
console.log("Outer Width:", window.outerWidth);   // Browser width
console.log("Outer Height:", window.outerHeight); // Browser height

// 2. NAVIGATOR OBJECT
// Contains information about the browser and system
console.log(navigator);
console.log("User Agent:", navigator.userAgent);       // Browser version info
console.log("Language:", navigator.language);          // Browser language
console.log("Cookies Enabled:", navigator.cookieEnabled); // Check if cookies enabled
console.log("Online Status:", navigator.onLine);       // Check internet connection

// 3. LOCATION OBJECT
// Contains information about the current URL
console.log(location);
console.log("Hostname:", location.hostname);  // Domain name
console.log("Href:", location.href);          // Full URL
console.log("Protocol:", location.protocol);  // http or https
console.log("Pathname:", location.pathname);  // Path after domain
console.log("Port:", location.port);          // Port number

// 4. SCREEN OBJECT
// Information about the user's screen
console.log("Screen Width:", screen.width);
console.log("Screen Height:", screen.height);
console.log("Available Width:", screen.availWidth);
console.log("Available Height:", screen.availHeight);

// ==========================================
// DOCUMENT OBJECT MODEL (DOM)
// ==========================================

// DOM represents the HTML structure as a tree
// HTML
//   ├── head
//   │   ├── title
//   │   └── meta
//   └── body
//       ├── h1
//       └── p

// The 'document' object represents the entire HTML document
console.log(document); // View entire document

// Accessing document properties
console.log("Document Title:", document.title);
console.log("Document URL:", document.URL);
console.log("Document Domain:", document.domain);

// ==========================================
// SELECTING ELEMENTS
// ==========================================

// 1. By Tag Name
console.log("Get by Tag Name:");
const h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements); // Returns HTMLCollection

// 2. By ID (most common)
// const elementById = document.getElementById("myId");

// 3. By Class Name
// const elementsByClass = document.getElementsByClassName("myClass");

// 4. Query Selector (modern way - CSS selector)
// const element = document.querySelector("h1");
// const elements = document.querySelectorAll(".myClass");

// ==========================================
// ACCESSING ELEMENT PROPERTIES
// ==========================================

if (h1Elements.length > 0) {
    console.log("H1 Inner HTML:", h1Elements[0].innerHTML); // HTML content
    console.log("H1 Inner Text:", h1Elements[0].innerText); // Text content
    console.log("H1 Text Content:", h1Elements[0].textContent); // Text with spacing
}

// ==========================================
// DOM TREE NAVIGATION
// ==========================================

// Accessing document structure
console.log("Document Element:", document.documentElement); // <html> tag
console.log("Document Head:", document.head);               // <head> tag
console.log("Document Body:", document.body);               // <body> tag

// First child of document
console.log("First Child:", document.firstChild); // Usually doctype

// ==========================================
// NOTES FROM TUTORIAL
// ==========================================

/*
KEY CONCEPTS:

1. WINDOW OBJECT:
   - The entire browser window
   - Contains DOM, BOM, and JavaScript

2. BOM (Browser Object Model):
   - screen: Screen dimensions and properties
   - navigator: Browser and system information
   - location: URL and navigation information
   - history: Browser history management

3. DOM (Document Object Model):
   - Represents HTML structure as a tree
   - Each HTML element is an object
   - Can be manipulated with JavaScript

4. SCRIPT LOADING:
   - Can be loaded in <head> or before </body>
   - Use 'defer' attribute to load after DOM parsing
   - <script src="script.js" defer></script>

5. ELEMENT RELATIONSHIPS:
   - Parent: Element containing other elements
   - Child: Element inside another element
   - Sibling: Elements at the same level

6. COMMON METHODS:
   - getElementById(): Select by ID
   - getElementsByClassName(): Select by class
   - getElementsByTagName(): Select by tag
   - querySelector(): Select using CSS selector
   - querySelectorAll(): Select all matching CSS selector

7. WEB APIs:
   - MDN Web Docs has extensive documentation
   - Navigator API: Device and browser info
   - Location API: URL manipulation
   - Screen API: Display information

NEXT STEPS:
- Learn to create elements dynamically
- Learn to modify element content
- Learn to add/remove elements
- Learn event handling
*/