// The "Even" Filter
// Task: Write a function called getEvenNumbers that takes an array of numbers as an argument and returns a new array containing only the even numbers.
// Example: getEvenNumbers([1, 2, 3, 4, 5, 6]) should return [2, 4, 6]. //
function getEvenNumbers(arr) {
  // let res_arr = [];
  if (!Array.isArray(arr)) return "please select the right array"
  // return arr.filter(val => {
  //   console.log(val);
  //   if(val % 2 == 0) return val
  // })
  return arr.filter(val => val % 2 === 0)
  //return res_arr;
}
let arr = [1, 2, 3, 4, 5, 6];
// console.log( getEvenNumbers(arr));

/*
Medium: Character Counter
Task: Write a function called countChars that takes a string and returns an object showing how many times each character appears in that string. (Ignore spaces).
Example: countChars("apple") should return { a: 1, p: 2, l: 1, e: 1 }.
*/
function countChars(str) {
  if (Object.prototype.toString.call(str) !== "[object String]") return "please select right string"
  let arr1 = str.replace(/\s+/g, "").split("");
  // let arr1 = str.split(" ").filter(val => val !== undefined);
  // console.log(arr1);
  // let obj = {};
  // arr1.map((item => {
  //   console.log(item);
  //   if(Object.hasOwn(obj, item)) {
  //     obj[item]++;
  //   } else {
  //     obj[item] = 1;
  //   }
  //   console.log(obj, item);
  // }))
  // return obj;
  return arr1.reduce((obj, val) => {
    if (Object.hasOwn(obj, val)) {
      obj[val]++
    } else {
      obj[val] = 1
    }
    return obj;
  }, {});
}
let str = "ad fa sdf";
// console.log(countChars(str));
//  countChars(str);

/*
Intermediate: Array Transformation (Map & Filter)
Task: Given an array of objects representing products:
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 20, category: "Clothing" },
  { name: "Phone", price: 500, category: "Electronics" }
];
Write a script that:

Filters the array to only include products in the "Electronics" category.
Maps those products to a new array of just their names.
Expected Result: ["Laptop", "Phone"]
*/
let products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 20, category: "Clothing" },
  { name: "Phone", price: 500, category: "Electronics" }
];
function arrFilter(arr) {
  return arr.filter(item => item.category === "Electronics").map(val => {
    return val.name
  })
}
// console.log(arrFilter(products));




/*
Hard: The Asynchronous Fetch
Task: Write an async function called fetchUserData that:
Uses fetch() to get data from this URL: https://jsonplaceholder.typicode.com/users/1
Awaits the response and converts it to JSON.
Logs the user's name and email to the console.
Includes a try...catch block to handle any potential errors (like a 404 or network failure).
*/
let url = "https://jsonplaceholder.typicode.com/users/1";
// let requestOption = {};
function getFetch() {
  try {
   fetch(url).then(res => {
      // let data = await res.json();
      // let data = await new Response(res.body).text();
      // console.log(data.name, data.email);
      if(res.status == 200) {
        return res;
      } else {
        return new Error(res.statusText)
      }
    }).then(async res1 => {
      let data = await res1.json(); 
      console.log("name:", data.name, ", email:", data.email);
    }).catch(error => {
      console.log("some error is happen",error);
    })
  } catch (error) {
    console.log("Some error is occur: ", error);
    
  }
}
getFetch();

/*
Expert: The Counter Closure
Task: Write a function called createCounter. This function should return an object with three methods:
increment(): Adds 1 to a private variable count.
decrement(): Subtracts 1 from count.
getCount(): Returns the current value of count.
The variable count should not be accessible from outside the function (this tests your knowledge of Closures).
*/
function createCounter() {
  let count = 1;
  let obj = {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    },
  }
  return obj;
}
let testObj = new createCounter();

console.log(testObj.getCount());
testObj.decrement();
testObj.increment();
testObj.increment();
console.log(testObj.getCount());
 