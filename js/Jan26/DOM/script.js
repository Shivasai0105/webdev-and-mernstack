// ============================================================================
// DOM MANIPULATION - COMPLETE GUIDE FOR BEGINNERS
// ============================================================================
// What is DOM Manipulation?
// DOM = Document Object Model
// It's the structure of your webpage in memory (inside the browser)
// Manipulation = Changing, adding, removing HTML elements using JavaScript
// 
// Why is it useful?
// - Make webpages interactive
// - Change content when user clicks a button
// - Create, delete, or modify elements dynamically
// - Validate forms before sending data
// - Build dynamic user interfaces
//
// Two Main Things in DOM Manipulation:
// 1. SELECT/GRAB an element from the webpage
// 2. LISTEN for an event (like clicking a button)
// 3. DO SOMETHING with that element (change text, add class, delete, etc.)
// ============================================================================


// ============================================================================
// CHALLENGE 1: ACCESSING DOM ELEMENTS
// ============================================================================
// What it does: Click a button to change paragraph text
// 
// How it works:
// Step 1: Find the button on the page using getElementById
// Step 2: Listen for a click event on that button
// Step 3: When clicked, find the paragraph and change its text

console.log("\n--- CHALLENGE 1: Accessing DOM Elements ---");

// Method 1: Using getElementById (Best for unique ID)
// This finds an element by its ID attribute
// Think of ID like a person's Aadhar number - it's unique!
const changeTextBtn = document.getElementById("changeTextButton");

// Method 2: Alternative ways to select elements (for learning):
// const changeTextBtn = document.querySelector("#changeTextButton"); // CSS selector
// const changeTextBtn = document.querySelectorAll("#changeTextButton")[0]; // Overkill

// Now add a listener - "Listen for a click event on this button"
changeTextBtn.addEventListener('click', function() {
    // This function runs ONLY when someone clicks the button
    
    // Step 1: Get the paragraph element
    const paragraph = document.getElementById("myParagraph");
    
    // Step 2: Change its text content
    // textContent = plain text (recommended for security)
    // innerHTML = HTML code (be careful with user input)
    paragraph.textContent = "The paragraph has been changed!";
    
    // Optional: See what you grabbed in the console
    // console.log(paragraph);
});

// IMPORTANT CONCEPT: function vs arrow function
// When using addEventListener with a button, use "function" NOT "() =>"
// Why?
// - "function" knows which element called it (this = the button)
// - "() =>" doesn't know context (this = window object)
// Example of what NOT to do:
// changeTextBtn.addEventListener('click', () => {
//     console.log(this); // This would be window, not the button!
// });


// ============================================================================
// CHALLENGE 2: TRAVERSING THE DOM (Moving through the tree structure)
// ============================================================================
// What it does: Click button to highlight the first city in a list
//
// New Concept: DOM Traversal
// The DOM is like a family tree:
// <ul>           <- Parent
//   <li>        <- First Child (New York)
//   <li>        <- Sibling (Tokyo)
//   <li>        <- Sibling (Paris)
// </ul>
//
// Traversal means: Move from parent to child, or sibling to sibling

console.log("\n--- CHALLENGE 2: Traversing the DOM ---");

const highlightBtn = document.getElementById("highlightFirstCity");

highlightBtn.addEventListener('click', function() {
    // Step 1: Get the list container
    const citiesList = document.getElementById("citiesList");
    console.log("Entire list:", citiesList);
    
    // Step 2: Traverse to the FIRST child element
    // firstChild might give you text/whitespace (not reliable)
    // firstElementChild gets the first HTML element (reliable)
    const firstCity = citiesList.firstElementChild;
    console.log("First city element:", firstCity);
    
    // Step 3: Add a CSS class to highlight it
    // classList.add() = add a CSS class to the element
    // We defined .highlight class in HTML with yellow background
    firstCity.classList.add("highlight");
    
    // Other classList methods:
    // firstCity.classList.remove("highlight"); // Remove the class
    // firstCity.classList.toggle("highlight"); // Add if not there, remove if there
    // firstCity.classList.contains("highlight"); // Check if class exists (true/false)
});

// Important Difference: DOM vs HTML
// HTML: The code you write in a text file
// DOM: The processed version that browser keeps in memory
// When browser loads HTML, it creates DOM in its memory
// JavaScript manipulates the DOM (memory), not the HTML file


// ============================================================================
// CHALLENGE 3: MANIPULATING DOM ELEMENTS (Change styles and content)
// ============================================================================
// What it does: Click button to change coffee order and style it
//
// New Concept: Changing CSS properties with JavaScript
// Any CSS property can be changed with: element.style.propertyName

console.log("\n--- CHALLENGE 3: Manipulating DOM Elements ---");

const changeOrderBtn = document.getElementById("changeOrder");

changeOrderBtn.addEventListener('click', function() {
    // Step 1: Get the element containing the coffee type
    const coffeeType = document.getElementById("coffeeType");
    
    // Step 2: Change the TEXT
    coffeeType.textContent = "Espresso";
    
    // Step 3: Change the STYLE (CSS properties)
    // Note: CSS uses dash (background-color) but JS uses camelCase (backgroundColor)
    coffeeType.style.backgroundColor = "brown";
    coffeeType.style.color = "white";
    coffeeType.style.padding = "5px 10px";
    coffeeType.style.borderRadius = "3px";
    
    // Other style properties you can change:
    // coffeeType.style.fontSize = "18px";
    // coffeeType.style.fontWeight = "bold";
    // coffeeType.style.textTransform = "uppercase";
});

// CSS to JavaScript conversion:
// CSS: background-color → JavaScript: backgroundColor
// CSS: border-radius → JavaScript: borderRadius
// CSS: padding → JavaScript: padding
// CSS: margin-top → JavaScript: marginTop
// Rule: Remove dashes, capitalize letters after dashes


// ============================================================================
// CHALLENGE 4: CREATING AND INSERTING ELEMENTS (Add new HTML dynamically)
// ============================================================================
// What it does: Click button to add new items to shopping list
//
// New Concept: Creating elements from scratch
// Normal flow: HTML exists, JS manipulates it
// New flow: JS creates HTML elements and adds them to the page
// Use cases: To-do list apps, shopping carts, chat messages

console.log("\n--- CHALLENGE 4: Creating and Inserting Elements ---");

const addItemBtn = document.getElementById("addNewItem");

addItemBtn.addEventListener('click', function() {
    // Step 1: Create a new element in memory (not on page yet)
    // document.createElement("tagname") creates an HTML element
    const newItem = document.createElement("li");
    
    // Step 2: Add content to the new element
    newItem.textContent = "Eggs";
    
    // Step 3: Get the container where you want to add it
    const shoppingList = document.getElementById("shoppingList");
    
    // Step 4: Add the new element to the page
    // appendChild() means: Add as the last child
    // Think: The list is a parent, items are children
    shoppingList.appendChild(newItem);
    
    console.log("New item added:", newItem);
});

// Alternative insertion methods:
// shoppingList.appendChild(newItem);           // Add at the end (last child)
// shoppingList.insertBefore(newItem, firstChild); // Add at the beginning
// shoppingList.insertAdjacentHTML("beforeend", "<li>Item</li>"); // HTML string

// Node vs Element:
// Element = HTML tag (<li>, <p>, <div>)
// Node = Element + text + comments (anything in DOM tree)
// appendChild expects a Node


// ============================================================================
// CHALLENGE 5: REMOVING DOM ELEMENTS (Delete elements from page)
// ============================================================================
// What it does: Click button to remove the last task from list
//
// New Concept: Removing elements from the page
// You can remove any element when you have a reference to it

console.log("\n--- CHALLENGE 5: Removing DOM Elements ---");

const removeTaskBtn = document.getElementById("removeLastTask");

removeTaskBtn.addEventListener('click', function() {
    // Step 1: Get the list
    const taskList = document.getElementById("taskList");
    
    // Step 2: Get the last child element
    const lastTask = taskList.lastElementChild;
    
    // Step 3: Remove it
    lastTask.remove();
    
    console.log("Last task removed!");
});

// Alternative removal methods:
// lastTask.remove();                    // Remove the element itself
// taskList.removeChild(lastTask);       // Remove from parent
// taskList.innerHTML = "";              // Remove ALL children
// element.style.display = "none";       // Hide (doesn't remove from DOM)


// ============================================================================
// SUMMARY: COMMON DOM METHODS YOU'LL USE
// ============================================================================

/*
SELECTING ELEMENTS:
  document.getElementById("id")           - Find by ID (fastest)
  document.querySelector(".class")        - Find by CSS selector
  document.querySelectorAll(".class")     - Find all matching selectors
  document.getElementsByClassName("name") - Find by class name (older)
  document.getElementsByTagName("div")    - Find by tag name (older)

TRAVERSING DOM:
  element.firstElementChild               - First child element
  element.lastElementChild                - Last child element
  element.nextElementSibling              - Next brother/sister
  element.previousElementSibling          - Previous brother/sister
  element.parentElement                   - Parent element
  element.children                        - All children (HTMLCollection)

CHANGING CONTENT:
  element.textContent = "text"            - Change text (safe)
  element.innerHTML = "<b>html</b>"       - Change HTML (risky with user input)
  element.innerText = "text"              - Similar to textContent

CHANGING CLASSES:
  element.classList.add("className")      - Add a class
  element.classList.remove("className")   - Remove a class
  element.classList.toggle("className")   - Add if not there, remove if there
  element.classList.contains("className") - Check if class exists

CHANGING STYLES:
  element.style.propertyName = "value"    - Change inline CSS

CREATING & INSERTING:
  document.createElement("tag")           - Create new element
  parent.appendChild(element)              - Add as last child
  parent.insertBefore(element, reference) - Insert before reference
  parent.removeChild(element)              - Remove a child

REMOVING:
  element.remove()                        - Remove the element
  element.style.display = "none"          - Hide the element

EVENTS (Things user does):
  click                                   - User clicked
  mouseover                               - User hovered mouse
  keydown                                 - User pressed a key
  submit                                  - Form submitted
  change                                  - Input value changed
  load                                    - Page loaded
  scroll                                  - Page scrolled

EVENT HANDLING:
  element.addEventListener("event", function() {}) - Listen for event
  element.removeEventListener("event", function) - Stop listening
*/

console.log("\n✅ DOM Manipulation Basics Complete!");



//example 2: Traversing the DOM
document.getElementById("highlightFirstCity").addEventListener('click',function(){
  let citiesList = document.getElementById("citiesList");
  citiesList.firstElementChild.classList.add('highlight')
})


//challenge 3 :manipulating dom elements

document.getElementById("changeOrder").addEventListener('click',function(){
  let coffeeType = document.getElementById("coffeeType")
  coffeeType.textContent = "Espresso"
  coffeeType.style.backgroundColor ="brown"
  coffeeType.style.padding ="5px";
})


//challenge 4: adding new item to element

document.getElementById("addNewItem").addEventListener('click',function(){
  let newItem = document.createElement("li");
  newItem.textContent = "Jam"
  document.getElementById("shoppingList").appendChild(newItem);
})


//challenge 5: removing the element
document.getElementById("removeLastTask").addEventListener('click',function(){
  let taskList = document.getElementById("taskList")
  taskList.lastElementChild.remove();
})