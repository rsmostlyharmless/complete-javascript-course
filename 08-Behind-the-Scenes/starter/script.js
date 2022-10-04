'use strict';

// SCOPE
// const calcAge = function (birthYear) {
//   const age = 2022 - birthYear;

//   const printAge = function () {
//     let outPut = `${firstName}, You are ${age}, born in ${birthYear}.`;
//     console.log(outPut);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //   creating a new variable with the same name as the outer scope's variable
//       const firstName = `Steven`;

//       //   reassigning outer scope's variable
//       outPut = `NEW OUTPUT`;

//       const str = `...and you're a millenial, ${firstName}`;
//       console.log(str);

//       const add = function (a, b) {
//         return a + b;
//       };
//     }
//     // console.log(str); Uncaught ref error
//     console.log(millenial); // var can be found out of scope
//     // console.log(add(2, 3)); Would not work with or without `use strict`
//     console.log(outPut);
//   };
//   printAge();

//   return age;
// };

// const firstName = `Ryan`;
// calcAge(1986);
// console.log(age); Uncaught ref error as age is not in scope
//
//
//
//
// HOISTING AND THE DEAD ZONE

// variables
// console.log(me); // Undefined
// console.log(job); // Uncaught ReferenceError
// console.log(birth); // Uncaught ReferenceError

// var me = `Ryan`;
// let job = `Student`;
// const birth = 1986;

// functions
// console.log(addDecl(2, 3)); // declaration found
// console.log(addExpr(2, 3)); // Uncaught reference error
// console.log(addArrow(2, 3)); // Undefined

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // hoisting example
// // console.log(undefined); falsy value

// deleteShoppingCart;
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);
//
//
//
//
// The THIS key word

// Method 👉 this = <Object that is calling the method>
// Simple function call 👉 this = undefined (in strict mode)
// Arrow functions 👉 this = <this of surrounding function(lexical this)>
// Event listener 👉 this = <DOM element that the handler is attched to>

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1986);

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1986);

// const ryan = {
//   year: 1986,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// ryan.calcAge();

// const amy = {
//   year: 1989,
// };
// amy.calcAge = ryan.calcAge;
// amy.calcAge();

// const f = ryan.calcAge;
// f(); undefined as can no longer read the function call
//
//
//
// this keyword - regular functions vs arrow functions

// var firstName = `Amy`;

// const ryan = {
//   firstName: `Ryan`,
//   year: 1986,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2022 - this.year);

// Solution 1
// const self = this;
// const isMillenial = function () {
//   console.log(self);
//   //   console.log(this.year >= 1981 && this.year <= 1996);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

// Solution 2
// the arrow function now works as THIS reads the parent function
// const isMillenial = () => {
//   console.log(this);
//   console.log(this.year >= 1981 && this.year <= 1996);
// };
// isMillenial();
//   },
//   arrow function does not get it's own THIS method
//   recommended not to use arrow functions as a method
//   greet: () => console.log(`Hey, ${this.firstName}!`),
//   greet: function () {
//     console.log(`Hey, ${this.firstName}!`);
//   },
// };
// ryan.greet();
// ryan.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 3);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5);
//

//

//
// PRIMATIVES VS REFERENCE TYPES
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: `Ryan`,
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log(`Friend:`, friend);
// console.log(`Me: `, me);

// Practise

// Primative types
let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davies`;
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: `Jessica`,
  lastName: `Williams`,
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = `Davies`;
console.log(`Before marriage:`, jessica);
console.log(`After marriage:`, marriedJessica);

// marriedJessica = {}; constant variable in the stack can not be changed

// Copying objects
const jessica2 = {
  firstName: `jessica`,
  lastName: `Williams`,
  age: 27,
  family: [`Alice`, `Bob`],
};

// shallow copy created
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = `Davies`;
console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);

jessicaCopy.family.push(`Mary`);
jessicaCopy.family.push(`Joseph`);

console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);
