// ============================================================
// DOM MANIPULATION CHALLENGES - COMPLETE NOTES
// ============================================================

/* 
  WHAT IS DOM?
  - Document Object Model
  - Tree-like structure representing HTML elements
  - JavaScript can access and manipulate DOM elements
  - Two main parts: 
    1. Tracking/Accessing elements
    2. Handling events on those elements
*/

// ============================================================
// EXAMPLE 6: EVENT HANDLING IN THE DOM
// ============================================================

/* 
  EVENT HANDLING BASICS:
  - Events are actions that happen in the browser (clicks, hovers, keypresses)
  - addEventListener() is used to listen for events
  - Syntax: element.addEventListener(eventType, callbackFunction)
  
  COMMON EVENT TYPES:
  1. 'click' - When element is clicked
  2. 'dblclick' - When element is double-clicked
  3. 'mouseover' - When mouse hovers over element
  4. 'mouseout' - When mouse leaves element
  5. 'keydown' - When a key is pressed down
  6. 'keyup' - When a key is released
  7. 'submit' - When a form is submitted
  8. 'focus' - When an element gets focus
  9. 'blur' - When an element loses focus
  10. 'input' - When user types in an input field
  
  MORE EVENT TYPES:
  - Mouse Events: mousedown, mouseup, mouseenter, mouseleave, mousemove
  - Keyboard Events: keypress (deprecated), keydown, keyup
  - Form Events: submit, change, focus, blur, input
  - Document Events: DOMContentLoaded, load, resize, scroll
*/

// Basic Click Event
document.getElementById("clickMeButton").addEventListener('click', function() {
    alert("chai code")
})

// Example with different event types (for learning):
/*
// Double Click Event
document.getElementById("clickMeButton").addEventListener('dblclick', function() {
    alert("Double clicked!")
})

// Mouse Over Event
document.getElementById("clickMeButton").addEventListener('mouseover', function() {
    alert("Mouse is hovering!")
})

// Mouse Out Event
document.getElementById("clickMeButton").addEventListener('mouseout', function() {
    console.log("Mouse left the button!")
})
*/

// ============================================================
// EXAMPLE 7: EVENT DELEGATION
// ============================================================

/* 
  EVENT DELEGATION:
  - Technique to handle events on multiple child elements
  - Instead of adding event listeners to each child, add ONE to parent
  - Use event.target to identify which child was clicked
  - More efficient and works with dynamically added elements
  
  WHY EVENT DELEGATION?
  - If you select all items with class "teaItem", all get selected
  - We want to select only the one that was clicked
  - Event delegation solves this problem
  
  IMPORTANT PROPERTIES:
  1. event.target - The actual element that triggered the event
  2. event.currentTarget - The element that has the event listener
  3. event.target.matches() - Check if target matches a selector
  
  EVENT OBJECT PROPERTIES:
  - event.clientX, event.clientY - Mouse cursor position
  - event.target - Element that triggered the event
  - event.type - Type of event (click, mouseover, etc.)
  - event.timeStamp - When event occurred
*/

document.getElementById("teaList").addEventListener('click', function(event) {
    // STEP 1: Check if event.target exists
    // STEP 2: Use matches() to ensure we clicked on .teaItem only
    if(event.target && event.target.matches(".teaItem")) {
        alert("You selected: " + event.target.textContent);
    }
    
    // Uncomment to see full event object in console
    // console.log(event.target) // Shows which element was clicked
})

/* 
  WHY USE event.target.matches(".teaItem")?
  - Extra safety check
  - Ensures we only respond to clicks on elements with class "teaItem"
  - Prevents accidental clicks on other elements in the list
  - Good practice even if not strictly necessary here
  
  EXERCISE FOR YOU:
  - Add a 'highlight' class when tea is selected
  - Remove highlight from previously selected tea
  - Style the selected tea differently
*/

// ============================================================
// EXAMPLE 8: FORM HANDLING
// ============================================================

/* 
  FORM HANDLING:
  - Forms have a special 'submit' event
  - ALWAYS use event.preventDefault() to stop default form submission
  - Default behavior: Form submits and page refreshes
  - We prevent this to handle submission with JavaScript
  
  FORM PROPERTIES & METHODS:
  - form.elements - Access all form elements
  - input.value - Get/set input field value
  - form.reset() - Clear all form fields
  - form.submit() - Programmatically submit form
  
  INPUT ELEMENT PROPERTIES:
  - value - Current value of input
  - placeholder - Placeholder text
  - disabled - Whether input is disabled
  - focus() - Focus on the input
  - blur() - Remove focus from input
  
  IMPORTANT NOTE:
  - When you use getElementById("feedbackInput"), it grabs the INPUT element
  - Not the LABEL element (even though label also has same id reference)
  - This is because id should be unique, and browser prioritizes input elements
*/

document.getElementById("feedbackForm").addEventListener('submit', function(event) {
    // STEP 1: ALWAYS prevent default form submission
    event.preventDefault();
    
    // STEP 2: Get the input value
    let feedback = document.getElementById("feedbackInput").value;
    
    // STEP 3: Do something with the value
    console.log(feedback)
    
    // STEP 4: Display the feedback
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`
    
    // Optional: Clear the form after submission
    // document.getElementById("feedbackInput").value = "";
})

/* 
  EXERCISE FOR YOU:
  Q: How to grab the LABEL element when both label and input have same id?
  A: Try these approaches:
     1. document.querySelector('label[for="feedbackInput"]')
     2. Give label a different, unique id
     3. Use getElementsByTagName and filter
  
  ADDITIONAL EXERCISES:
  1. Add styling to feedback display (background color, larger text)
  2. Validate that feedback is not empty before displaying
  3. Add character count showing how many characters typed
  4. Clear input field after submission
  5. Show success message that fades after 3 seconds
*/

// ============================================================
// EXAMPLE 9: DOM CONTENT LOADED EVENT
// ============================================================

/* 
  DOMContentLoaded EVENT:
  - Fires when HTML document is completely loaded and parsed
  - Doesn't wait for stylesheets, images, or iframes
  - Perfect for running code that needs DOM to be ready
  
  WHEN TO USE:
  - Initialize your app when page loads
  - Fetch data from API on page load
  - Set up initial UI state
  - Load configuration or settings
  - Query database or CDN files
  
  DIFFERENCE BETWEEN EVENTS:
  - DOMContentLoaded: HTML parsed, DOM ready (fast)
  - load: Everything loaded including images (slower)
  - beforeunload: Before page is about to unload
  - unload: Page is being unloaded
  
  USAGE PATTERNS:
  1. document.addEventListener('DOMContentLoaded', callback)
  2. window.addEventListener('load', callback) - waits for images too
*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
    
    // You can do many things here:
    // - Initialize variables
    // - Fetch data from API
    // - Set up initial state
    // - Add event listeners to elements
})

/* 
  NOTE: In our case, script is at bottom of HTML
  So DOM is already loaded when script runs
  But it's good practice to use DOMContentLoaded anyway
*/

// ============================================================
// EXAMPLE 10: CSS CLASS MANIPULATION & TOGGLING
// ============================================================

/* 
  CLASSLIST API:
  - Modern way to manipulate CSS classes
  - Much better than using className property
  
  CLASSLIST METHODS:
  1. add(className) - Add a class
  2. remove(className) - Remove a class
  3. toggle(className) - Add if not present, remove if present
  4. contains(className) - Check if class exists (returns true/false)
  5. replace(oldClass, newClass) - Replace one class with another
  
  TOGGLE METHOD:
  - If class exists, it removes it
  - If class doesn't exist, it adds it
  - Perfect for dark/light mode, show/hide, active/inactive states
  
  WHY TOGGLE IS USEFUL:
  - You don't need to check if class exists manually
  - One method handles both add and remove
  - Common pattern in modern web development
*/

document.getElementById("toggleHighlight").addEventListener('click', function() {
    let descriptionText = document.getElementById("descriptionText");
    
    // Toggle the highlight class
    descriptionText.classList.toggle("highlight");
    
    // You can also chain multiple operations:
    // descriptionText.classList.toggle("highlight");
    // descriptionText.classList.add("animated");
})

/* 
  OTHER WAYS TO MANIPULATE CSS:
  
  // 1. Direct style manipulation
  element.style.backgroundColor = "yellow";
  element.style.fontSize = "20px";
  
  // 2. Using className (old way - not recommended)
  element.className = "highlight"; // Replaces all classes
  element.className += " highlight"; // Adds to existing classes
  
  // 3. Using classList (modern way - recommended)
  element.classList.add("class1", "class2"); // Add multiple classes
  element.classList.remove("class1"); // Remove a class
  element.classList.toggle("class1"); // Toggle a class
  element.classList.contains("class1"); // Check if class exists
  element.classList.replace("old", "new"); // Replace class
*/

// ============================================================
// BONUS: HTML COLLECTIONS VS NODE LISTS
// ============================================================

/* 
  HTML COLLECTION:
  - Returned by: getElementsByTagName(), getElementsByClassName()
  - Live collection - updates automatically when DOM changes
  - Array-like but NOT a real array
  - Has length property and indexed access
  - Can access by index: collection[0]
  - CANNOT use array methods like forEach, map, filter directly
  
  NODE LIST:
  - Returned by: querySelectorAll()
  - Can be live or static (querySelectorAll returns static)
  - Array-like but NOT a real array
  - Has length property and forEach method
  - CAN use forEach but not map, filter, reduce
  - To use full array methods, convert to array first
  
  HOW TO CONVERT TO ARRAY:
  1. Array.from(collection)
  2. [...collection] (spread operator)
  3. Array.prototype.slice.call(collection)
*/

// Example: Working with HTML Collection
/*
// Get all links on page
let anchorElements = document.getElementsByTagName('a');
console.log(anchorElements.length); // Number of links

// Loop through HTML Collection
for (let i = 0; i < anchorElements.length; i++) {
    console.log(anchorElements[i].textContent);
}

// Convert to array to use array methods
let linksArray = Array.from(anchorElements);
linksArray.forEach(link => {
    console.log(link.href);
});

// Filter links (requires array conversion)
let externalLinks = linksArray.filter(link => {
    return link.href.includes('http');
});
*/

// ============================================================
// REAL WORLD EXAMPLE: WEB SCRAPING BASICS
// ============================================================

/* 
  EXTRACTING DATA FROM WEBPAGES:
  - Can be done in browser console for educational purposes
  - Useful for learning, testing, debugging
  - NOT for malicious purposes
  
  EXAMPLE: Extract all links from a page
  
  let allLinks = document.getElementsByTagName('a');
  let linksArray = Array.from(allLinks);
  
  // Get first 15 links
  for (let i = 0; i < 15 && i < linksArray.length; i++) {
      let link = linksArray[i];
      console.log(link.textContent); // Link text
      console.log(link.href); // Link URL
  }
  
  LEGAL NOTE:
  - Only practice on websites that allow it (like Wikipedia)
  - Respect robots.txt and terms of service
  - Don't scrape private/protected content
  - Use for learning, not for commercial purposes without permission
*/

// ============================================================
// IMPORTANT TIPS & BEST PRACTICES
// ============================================================

/* 
  1. ALWAYS USE addEventListener() 
     ❌ Bad: <button onclick="handleClick()">
     ✅ Good: button.addEventListener('click', handleClick)
  
  2. PREVENT DEFAULT when needed
     - Forms: event.preventDefault() to stop page reload
     - Links: event.preventDefault() to stop navigation
  
  3. USE EVENT DELEGATION for lists
     - More efficient than multiple listeners
     - Works with dynamically added elements
  
  4. BREAK DOWN PROBLEMS
     - Don't solve everything at once
     - Take small steps
     - Test each step
     - Console.log to debug
  
  5. CLASSLIST over className
     - classList is more powerful and cleaner
     - classList methods are easier to use
     - Better for multiple classes
  
  6. UNDERSTAND THE EVENT OBJECT
     - Always available in event handler
     - Contains useful information about the event
     - Use event.target to know what was clicked
  
  7. CONVERT COLLECTIONS TO ARRAYS
     - HTML Collections and NodeLists are not real arrays
     - Use Array.from() or spread operator to convert
     - Then you can use full array methods
  
  8. USE CONSOLE.LOG FOR DEBUGGING
     - Log event object to see all properties
     - Log elements to verify correct selection
     - Log values to check data flow
  
  9. LEARN BY DOING
     - Practice on real websites (ethically)
     - Build small projects
     - Experiment in browser console
     - Break things and fix them
  
  10. READ MDN DOCUMENTATION
      - Best resource for JavaScript and DOM
      - Clear examples and explanations
      - Up-to-date information
      - Link: https://developer.mozilla.org
*/

// ============================================================
// PRACTICE EXERCISES FOR YOU
// ============================================================

/* 
  EXERCISE 1: Enhanced Tea Selection
  - Add a 'selected' class to clicked tea
  - Remove 'selected' from previously selected tea
  - Show selected tea in a separate paragraph
  - Count how many times each tea was selected
  
  EXERCISE 2: Form Validation
  - Check if feedback is not empty
  - Show error message if empty
  - Minimum 10 characters required
  - Maximum 200 characters allowed
  - Clear error messages on valid submission
  
  EXERCISE 3: Advanced Toggle
  - Create a dark mode toggle button
  - Toggle between light and dark themes
  - Save preference in localStorage
  - Load preference on page load
  
  EXERCISE 4: Event Types
  - Create different buttons for different event types
  - Log the event type when triggered
  - Show mouse coordinates on click
  - Detect keyboard keys pressed
  
  EXERCISE 5: Dynamic Content
  - Add new tea items dynamically
  - Remove tea items on double-click
  - Edit tea names on click
  - Save changes to localStorage
  
  EXERCISE 6: Real Website Practice
  - Go to Wikipedia
  - Open console (F12)
  - Extract all headings (h1, h2, h3)
  - Count paragraphs on the page
  - Find all images and list their src
  - Change colors of links (just for fun)
*/

// ============================================================
// SUMMARY: KEY CONCEPTS TO REMEMBER
// ============================================================

/* 
  1. DOM = Document Object Model (tree structure of HTML)
  
  2. ACCESS ELEMENTS:
     - getElementById() - Single element by id
     - getElementsByClassName() - Multiple by class (HTML Collection)
     - getElementsByTagName() - Multiple by tag (HTML Collection)
     - querySelector() - First match with CSS selector
     - querySelectorAll() - All matches (NodeList)
  
  3. EVENT HANDLING:
     - addEventListener(eventType, callback)
     - Common events: click, submit, DOMContentLoaded
     - event.preventDefault() - Stop default behavior
     - event.target - Element that triggered event
  
  4. EVENT DELEGATION:
     - Add listener to parent, not each child
     - Use event.target to identify clicked element
     - More efficient and scalable
  
  5. FORM HANDLING:
     - Listen for 'submit' event
     - Always preventDefault()
     - Get values with input.value
  
  6. CSS MANIPULATION:
     - classList.add() - Add class
     - classList.remove() - Remove class
     - classList.toggle() - Toggle class
     - classList.contains() - Check if class exists
  
  7. HTML COLLECTIONS vs NODE LISTS:
     - Both are array-like, not real arrays
     - Convert to array: Array.from() or [...collection]
     - Then use full array methods
  
  8. BEST PRACTICES:
     - Use addEventListener, not inline handlers
     - Break down complex problems
     - Console.log for debugging
     - Practice on real websites (ethically)
     - Read MDN documentation
     - Learn by doing, not just reading
*/

// ============================================================
// END OF DOM MANIPULATION NOTES
// Keep practicing and building! 🚀
// ============================================================