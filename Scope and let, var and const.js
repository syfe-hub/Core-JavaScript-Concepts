/*function  a() {
    var x = 2;
    console.log(x);
} 
*/
//   console.log(x); >> ReferenceError: x is not defined
// The varible is Local to the function a (Local Variables)
var y = 4;
function b() {
    console.log(y);  // 4
  y = y + 6
    console.log(y); // 10 
    
}
b();
console.log(y); // 10

// y is Global Variables and even the change inside a  function effect it

if(true){
    const z = 8;
    var yz = 12;
    let xyz = 14;
    console.log(z)
}
// z also is a global variable but yz and xyz are local 
//-------------------------------------------------------

In JavaScript, var, let, and const are keywords used to declare variables, but they have different characteristics and usage contexts. Here's a detailed comparison:

var
Scope:

Function-scoped: var variables are limited to the function in which they are declared.
If declared outside a function, they are global-scoped.
Hoisting:

Variables declared with var are hoisted to the top of their scope. This means the declaration is moved to the top of the scope, but not the assignment.
As a result, you can reference a var variable before its declaration, but it will be undefined until the assignment is reached.
Re-declaration:

You can re-declare var variables within the same scope without any errors.
javascript
Copy code
var x = 1;
var x = 2; // No error
console.log(x); // 2
let
Scope:

Block-scoped: let variables are limited to the block, statement, or expression where they are declared.
Hoisting:

Variables declared with let are also hoisted, but they are not initialized. Accessing them before the declaration results in a ReferenceError.
Re-declaration:

You cannot re-declare a let variable within the same scope.
javascript
Copy code
let y = 1;
let y = 2; // Error: Identifier 'y' has already been declared
const
Scope:

Block-scoped: Similar to let, const variables are limited to the block, statement, or expression where they are declared.
Hoisting:

Variables declared with const are also hoisted but not initialized. Accessing them before the declaration results in a ReferenceError.
Re-declaration and Assignment:

You cannot re-declare a const variable within the same scope.
const variables must be initialized at the time of declaration.
You cannot reassign a const variable after its initial assignment.
javascript
Copy code
const z = 1;
const z = 2; // Error: Identifier 'z' has already been declared
z = 3; // Error: Assignment to constant variable.
Immutability:
The variable binding is immutable, but if the variable is an object or array, the contents of the object/array can still be modified.
javascript
Copy code
const obj = { a: 1 };
obj.a = 2; // Allowed
console.log(obj.a); // 2

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]
Summary
Use var for function-scoped variables. Its usage is generally discouraged in modern JavaScript due to potential issues with hoisting and scope.
Use let for block-scoped variables that might need to be reassigned later.
Use const for block-scoped variables that should not be reassigned after initialization. Use it as the default choice for variable declaration unless reassignment is necessary.
By understanding the differences between var, let, and const, you can write more predictable and maintainable JavaScript code.
