//TODO 📚 Module 4 - Lesson 12.01: Execution Context in Action


//TODO  🚀 Step 1: Explore the Topic with Examples & Practice

//* 🔰 Concise Summary
//  "Execution in Action" dives into how JavaScript actually runs your code behind the scenes — not just in theory, but in real-time behavior. This lesson builds on your knowledge of execution contexts by examining how they interact dynamically during runtime.

//* 🔍 Key Concepts Explored

//? 1. Execution Context Lifecycle
//  Each time a function is invoked
//  • A new execution is created.
//  • It goes through the Creation Phase (setting up variables, scope, and this) and then the Execution Phase (running the code line by line).

//? 2. Call Stack in Motion
//  The call stack maintains the order of function  execution:
//  • When a function called, it is pushed onto the stack.
//  • when it returns, it is popped off.

//? 3. Lexical Scope in Action
//  JavaScript looks for variable values by checking:
//  • The current function's scope
//  • Then moves outwards through parent scopes until it reaches the global context.

//? 4. Variable Resolution & Reference Errors
//  When trying to access a variable, JavaScript:
//  • Looks up the scope chain
//  • Throw a ReferenceError if not found in any accessible scope

//? 5. Flow Control Through Context
//  Functions can be paused(e.g., in setTimeout or asynchronous code), but their execution context is destroyed once complete unless a closure retains access.

//* 🧠 Exploration Techniques for Mastery
//  • Trace the Call Stack Manually: Mentally (or visually) simulate how each function enters and exits the stack.
//  • Verbally Narrate Code Execution: Say out loud which context is active and what it has access to.
//  • Compare Code Behavior: Try the same logic inside different scopes or order of calls to see how behavior changes.


//TODO  🌍 Step 2: Real-World Examples — Execution in Action

//  Understanding how execution plays out in real-time can turn abstract ideas into intuitive logic. These examples illustrate how the call stack, scope resolution, and execution order directly affect real-world JavaScript behavior.

//* ✅ 1. User Interaction: Button Clicks Trigger Function Chains
//  Scenario: A user clicks a "Submit" button on a form.
//  • That click event triggers an event listener.
//  • The listener invokes a validation function, which in calls a formatting function.
//  • Behind the scenes, the browser stacks these function calls:
//      > Global → Event Handler → validateForm() → formatInput()
//? 🔁 Execution context is built and destroyed as each function finishes.

//! ✅ Example

// Event Listener
document.getElementById('submitBtn').addEventListener('click', handleSubmit);

function handleSubmit(event) {
    console.log('Event Handler: handleSubmit');
    validateForm();
}

function validateForm() {
    console.log('Validation: validateForm');
    formatInput();
}

function formatInput() {
    console.log('Formatting: formatInput');

    // Example formatting logic
    const input = document.getElementById('myInput').value;
    const trimmed = input.trim();
    console.log('Formatted Input:', trimmed);
}

//* ✅ 2. Error Stack Trace During a Crash
//  Scenario: A developer receives a browser console error.
//  • The error message shows:
//      > Error in function: calculateTotal
//      > Called from: updateCart
//      > Called from: onItemChange
//  This stack trace is a real-time snapshot of the call stack at the moment the error occurred.
//? 🎯 Developer use this to debug by tracing the call path backward.

//! ✅ Example

document.getElementById('changeItemBtn').addEventListener('click', onItemChange);

    function onItemChange() {
        updateCart();
    }

    function updateCart() {
        calculateTotal();
    }

    function calculateTotal() {
        // Simulate a bug: undefined variable causes a ReferenceError
        console.log("Calculating total...");
        throw new Error("Error in function: calculateTotal");
    }

//* ✅ 3. Logging Order in Analytics or Debugging
//  Scenario: A tracking script logs when the page loads and when a user clicks a button.
//  • The execution order might surprise us if a delayed function (like SetTimeout) runs after several other calls finish.
//  • Even when scheduled early, the delayed task waits for the main thread to clear.
//? This shows how JavaScript's single-threaded, not-blocking nature interacts with execution context lifecycle.

//! ✅ Example

// Log when the page loads
    console.log('1. Page loaded');

    // Schedule a delayed log
    setTimeout(function() {
        console.log('3. Delayed log from setTimeout');
    }, 0);

    // Log when the user clicks the button
    document.getElementById('trackBtn').addEventListener('click', function() {
        console.log('2. Button clicked');
    });

//* ✅ 4. Reusing Functions Across Components
//  Scenario: In a modular web app, the same utility function is used in multiple places.
//  • Each time it is called, even in different components, it gets a new execution context.
//  • It does not share memory unless explicitly passed or captured through closures.
//? This modularity is why understanding execution context is crucial for building scalable apps.

//! ✅ Example

// utils.js
function formatCurrency(amount) {
    // Each call gets its own execution context and local 'result'
    const result = '$' + Number(amount).toFixed(2);
    console.log('Formatting in context:', result);
    return result;
}

// componentA.js
function displayProductPrice(price) {
    // Calls the shared utility
    const formatted = formatCurrency(price);
    console.log('Component A sees:', formatted);
}

// componentB.js
function displayCartTotal(total) {
    // Calls the shared utility
    const formatted = formatCurrency(total);
    console.log('Component B sees:', formatted);
}

// Simulate usage in a modular app:
displayProductPrice(19.99); // Component A
displayCartTotal(123.456);  // Component B


//TODO  ❓ Step 3: Quiz — Execution in Action

//  Choose the best answer for each question:

//? 1. What happens first when a function is called?
//  A. It is executed immediately
//  B. A variable is created
//  C. A new execution context is created
//  D. The global scope is cleared

//! Answer: C

//? 2. In JavaScript, what does the call stack track?
//  A. The number of global variables
//  B. All declared functions
//  C. The sequence of function calls and their contexts
//  D. The contents of local storage

//! Answer: C

//? 3. If a variable is not found in the local scope, what happens?
//  A. JavaScript throws a syntax error
//  B. The variable is created automatically
//  C. JavaScript searches the outer (lexical) scopes
//  D. The script restarts execution

//! Answer: C

//? 4. What is the result when the call stack gets too deep (e.g., due to unbounded recursion)?
//  A. The program slows down
//  B. JavaScript stops executing
//  C. A stack overflow error is thrown
//  D. A new call stack is created

//! Answer: C

//? 5. After a function finishes running, what happens to its execution context?
//  A. It is stored in memory for reuse
//  B. It is pushed to a queue
//  C. It is popped off the call stack
//  D. It becomes the new global context

//! Answer: C
