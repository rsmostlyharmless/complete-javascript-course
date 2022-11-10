'use strict';

/*
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
    1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this: What is your favourite programming language?

    0: JavaScript
    1: Python
    2: Rust
    3: C++

    (Write option number)

    1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?).
2. Call this method when ever the user clicks the "Answerpoll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

Test data for bonus:

§ Data1:[5,2,3]
§ Data2:[1,5,3,9,6,1]

Hints: Use many of the tools you learned about in this and the last section 😉
*/
/*
const pollEl = document.querySelector(`.poll`);

const poll = {
  question: `What's your favourite programming language?`,
  options: [`0: JavaScript`, `1: Python`, `2: Rust`, `3: C++`],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(`\n`)}\n(Write down number)`
      )
    );

    typeof answer === `number` &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults(`string`);
  },
  displayResults(type = `array`) {
    if (type === `array`) {
      console.log(this.answers);
    } else if (type === `string`) {
      console.log(`Poll results are ${this.answers.join(`, `)}`);
    }
  },
};

pollEl.addEventListener(`click`, poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, `string`);
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/
//
//////////////////////////////////////////////
/////////////////////////////////////////////
//

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
/*
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
*/

//
////////////////////////////////////////
//

// The call and apply methods
/*
const lufthansa = {
  airline: `Lufthansa`,
  iataCode: `LH`,
  bookings: [],
  //   book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(4242, `Ryan Syder`);
lufthansa.book(1234, `John Smith`);
console.log(lufthansa);

const euroWings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;

// Will not work
// book(23, `Dirk Gently`);

// Call method
book.call(euroWings, 23, `Dirk Gently`);
console.log(euroWings);

book.call(lufthansa, 4114, `Charles Boyle`);

const swiss = {
  airline: `Swiss`,
  iataCode: `LX`,
  bookings: [],
};

book.call(swiss, 1280, `Carl Gas`);
console.log(swiss);

// Apply method
const flightData = [583, `Some Person`];
book.apply(swiss, flightData);
console.log(swiss);

book.call(euroWings, ...flightData);
*/
//
////////////////////////////////////////
//

// The bind method
/*
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(2948, `Stephen Stills`);
bookLH(6857, `Wallace Wells`);
bookLX(5743, `Ramona Flowers`);

const bookEW4232 = book.bind(euroWings, 4232);
bookEW4232(`Scott Pilgrim`);
bookEW4232(`Kim Pine`);

// With event listeners
const buyEl = document.querySelector(`.buy`);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

buyEl.addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = rate => value => value + value * rate;
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
// OR (per video)
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
*/

//
////////////////////////////////////////
//

// Immediately invoked function expressions(IIFE)
/*
// runOnce can still be called anytime
const runOnce = function () {
  console.log(`Will this only run once?`);
};
runOnce();

// IIFE is a function wrapped in () with more () after
(function () {
  console.log(`Will never run again!!!`);
  const isPrivate = 23;
})();
// isPrivate can not be accessed
// console.log(isPrivate);

// as arrow function
(() => console.log(`Dead End!!!`))();
*/
