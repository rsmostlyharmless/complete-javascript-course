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
