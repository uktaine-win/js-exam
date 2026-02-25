/*
Question 1: Variable Scoping
Task: What will the following code log to the console? Explain why.
var a = 1;
let b = 2;
const c = 3;

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a, b, c);
}
console.log(a, b, c);
*/



/*
Question 2: Array Destructuring
Task: Given the following array:
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
Using destructuring, write one line of code that:

Assigns "Apple" to a variable called first
Assigns "Cherry" to a variable called third
Assigns the rest ["Date", "Elderberry"] to a variable called remaining

*/

/*
Question 3: Template Literals
Task: Write a function called introduce that takes name, age, and job as parameters and returns a string using template literals:
Example: introduce("Alice", 30, "Developer") should return:
"Hi, my name is Alice. I am 30 years old and I work as a Developer."

*/

/*
Question 4: Object Destructuring & Default Values
Task: Given the following object:

javascript
const user = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    country: "USA"
  }
};
Using one line of destructuring, extract:

name
city (from the nested address object)
phone with a default value of "N/A" (since it doesn't exist)
Then log all three values.
*/

/*
Question 5: Promise.all
Task: Write a function called fetchMultipleUsers that:

Takes an array of user IDs: [1, 2, 3]
Uses Promise.all to fetch data for all three users simultaneously from:
https://jsonplaceholder.typicode.com/users/{id}
Logs an array of all three users' names
Handles errors with try/catch
Expected Output: ["Leanne Graham", "Ervin Howell", "Clementine Bauch"]
*/

/*
Question 6: Higher-Order Functions
Task: Write a function called createMultiplier that:

Takes a number multiplier as an argument
Returns a new function that takes a number value and returns value * multiplier
Example:
javascript
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
*/

/*
Question 7: Debounce Function
Task: Write a function called debounce that:

Takes two arguments: a callback function and a delay in milliseconds
Returns a new function that delays the execution of callback
If the returned function is called again before the delay is over, it resets the timer
Example Usage:
javascript
const log = debounce(() => console.log("Executed!"), 1000);

log(); // Timer starts
log(); // Timer resets
log(); // Timer resets
// After 1 second of no calls: "Executed!" is logged once
*/

/*
Question 8: Flatten a Nested Array (Recursion)
Task: Write a function called flattenArray that takes a deeply nested array and returns a single flat array. You cannot use Array.flat().

Example:
javascript
flattenArray([1, [2, [3, [4]], 5], [6, 7]]);
// Should return: [1, 2, 3, 4, 5, 6, 7]
Hint: Use recursion!
*/

/*
Question 9: Custom Array.prototype.myMap()
Task: Without using the built-in .map() method, add a custom method called myMap to Array.prototype that behaves exactly like .map().

Requirements:

It should accept a callback function
The callback should receive (element, index, array) as arguments
It should return a new array
Example:

javascript
const nums = [1, 2, 3];
const doubled = nums.myMap(function(el, i, arr) {
  return el * 2;
});
console.log(doubled); // [2, 4, 6]
*/

/*
Question 10: Event Loop & Microtasks
Task: What will the following code log, and in what order? Explain why step by step.

javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
}).then(() => {
  console.log("4");
});

console.log("5");
*/