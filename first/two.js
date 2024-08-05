// Variable declaration in JavaScript
// 1 => var
// 2 => let
// 3 => const

//! var
var name;            // 'var' declares a variable that is function-scoped.
name = "rudra";      // Assigning a value to the variable.
var name;            // Re-declaring the variable (allowed with 'var').
name = "badal";      // Updating the value of the variable.

//! let
let food;            // 'let' declares a variable that is block-scoped.
food = "mango";      // Assigning a value to the variable.

food = "apple";      // Updating the value of the variable (re-declaration is not allowed in the same scope).
console.log(food);   // Output: apple

//! const
const play = "cricket";  // 'const' declares a block-scoped, read-only constant.
console.log(play);       // Output: cricket (value cannot be reassigned)

// Data types in JavaScript

// 1. String: 'a', "aaa"
// 2. Symbol: unique and immutable data type.
// 3. Null: represents the intentional absence of any object value.
// 4. Number: 1, 2, 3, 4, 5
// 5. BigInt: 111111111111111111 (represents integers with arbitrary precision)
// 6. Boolean: true, false
// 7. undefined: indicates a variable has not been assigned a value.
// 8. Object: a collection of properties.

var obj;               // Declaring a variable without initializing it.
console.log(obj);      // Output: undefined (default value of an uninitialized variable)
