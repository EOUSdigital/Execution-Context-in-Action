# Module 4 - Lesson 12.01: Execution Context in Action

Welcome to Lesson 12! This lesson explores how JavaScript's execution model works in real time, particularly through function calls, the call stack, and scope resolution.

---

## ✅ Step 1: Explore the Topic

### 📚 Key Concepts

- **Execution Context Lifecycle**
  - Every function call creates a new execution context.
  - It moves through two phases: Creation and Execution.

- **Call Stack in Motion**
  - Functions are stacked when called and unstacked when they return.
  - The most recent function is always on top.

- **Lexical Scope in Action**
  - JavaScript uses lexical scoping, meaning functions access variables from the scope in which they were defined.

- **Variable Resolution**
  - If a variable isn’t found in the current context, JavaScript searches parent scopes.
  - If the variable doesn’t exist in any accessible scope, it throws a ReferenceError.

- **Flow Control Through Context**
  - Asynchronous or delayed functions (e.g., `setTimeout`) are not part of the call stack until invoked later via the event loop.

---

## 🌍 Step 2: Real-World Examples

### 1. User Interaction Triggers Nested Functions
- A button click invokes a chain of event handlers.
- Each function in the chain is pushed to the stack and popped as it finishes.

### 2. Error Stack Trace in the Console
- A thrown error provides a stack trace, showing the sequence of function calls leading to the failure.

### 3. Asynchronous Logging Order
- Even with a `setTimeout(..., 0)`, the message is delayed until the stack clears, showing event loop behavior.

### 4. Shared Utility Functions Across Modules
- Each call creates a new execution context, even when the same function is reused.

---

## ❓ Step 3: Quiz Questions

**1. What happens first when a function is called?**  
✅ C. A new execution context is created

**2. In JavaScript, what does the call stack track?**  
✅ C. The sequence of function calls and their contexts

**3. If a variable is not found in the local scope, what happens?**  
✅ C. JavaScript searches the outer (lexical) scopes

**4. What is the result when the call stack gets too deep?**  
✅ C. A stack overflow error is thrown

**5. After a function finishes running, what happens to its execution context?**  
✅ C. It is popped off the call stack

---

Use this reference to reinforce your understanding before completing the hands-on challenge in Step 4!
