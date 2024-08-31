# JavaScript Variables

In JavaScript, there are three ways to declare variables:

## 1. `var`

- **Description**:  
  The `var` keyword is the oldest way to declare variables in JavaScript. It has **function scope**, which means it is limited to the function in which it is declared. If declared outside any function, it has **global scope**.

- **Characteristics**:

  - Can be redeclared and updated.
  - Hoisted to the top of its scope (initialized with `undefined`).
  - Does not respect block scope (like `if`, `for` blocks).

- **Example**:
  ```javascript
  var name = "Muzamil"; // Declaration and initialization
  var name = "Abbas"; // Redeclaration is allowed
  console.log(name); // Outputs: Abbas
  ```

## 2. `let`

- **Description**:  
  The `let` keyword was introduced in **ES6 (ECMAScript 2015)** and is used to declare **block-scoped** variables, which are limited to the block, statement, or expression in which they are used.

- **Characteristics**:

  - Can be updated but cannot be redeclared in the same scope.
  - Hoisted to the top of its block but is not initialized (accessing before declaration results in a `ReferenceError`).
  - Respects block scope.

- **Example**:
  ```javascript
  let age = 25; // Declaration and initialization
  age = 26; // Update is allowed
  console.log(age); // Outputs: 26
  ```

## 3. `const`

- **Description**:  
  The `const` keyword, also introduced in **ES6**, is used to declare variables that are **block-scoped** and cannot be reassigned. `const` is short for "constant," meaning the value should not change after its initial assignment.

- **Characteristics**:

  - Must be initialized at the time of declaration.
  - Cannot be updated or redeclared.
  - Respects block scope and is hoisted to the top of its block but is not initialized.

- **Example**:
  ```javascript
  const pi = 3.14; // Declaration and initialization
  // pi = 3.14159;  // Error: Assignment to constant variable.
  console.log(pi); // Outputs: 3.14
  ```

## Summary:

| Keyword | Scope              | Hoisting                        | Reassignment | Redeclaration |
| ------- | ------------------ | ------------------------------- | ------------ | ------------- |
| `var`   | Function or global | Yes, initialized as `undefined` | Yes          | Yes           |
| `let`   | Block              | Yes, but not initialized        | Yes          | No            |
| `const` | Block              | Yes, but not initialized        | No           | No            |

---

**Note:**  
In modern JavaScript, `let` and `const` are generally preferred over `var` due to their block scope and more predictable behavior.
