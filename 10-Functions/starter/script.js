'use strict';

// Default perameters
/*
const logBooking = [];

const createBooking = function (flightNum, numPass = 1, price = 199 * numPass) {
  // ES5
  //   numPass = numPass || 1;
  //   price = price || 199;

  const booking = { flightNum, numPass, price };
  console.log(booking);
  logBooking.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 2, 800);
createBooking(`LH123`, 2);
createBooking(`LH123`, 5);
createBooking(`LH123`, undefined, 1000);
*/

//////////////////////////////////////////////////
//
// Passing arguments: Value vs Reference
/*
const flight = `LH123`;
const ryan = {
  name: `Ryan Syder`,
  passPort: 12345678910,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr. ` + passenger.name;

  if (passenger.passPort === 12345678910) {
    alert(`Checked In`);
  } else {
    alert(`Wrong Passport!`);
  }
};

// checkIn(flight, ryan);
// console.log(flight);
// console.log(ryan);

const newPassport = function (person) {
  person.passPort = Math.trunc(Math.random() * 10000000000);
};

newPassport(ryan);
checkIn(flight, ryan);
*/

//
///////////////////////////////////////
//

// First-Class and Higher-Order functions
// functions accepting callback functions
/*
const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer(`JavaScript is hard`, upperFirstWord);
transformer(`JavaScript is hard`, oneWord);
// JS uses callbacks all the time
const high5 = function () {
  console.log(`🖖`);
};
document.body.addEventListener(`click`, high5);

[`Ryan`, `Arthur`, `Ford`].forEach(high5);
*/
//
////////////////////////////////////////
//

// Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting}, ${name}`);

const greeter = greet(`Hey`);
greeter(`Amy`);
greeter(`Dirk`);

greet(`Hello`)(`Ryan`);
