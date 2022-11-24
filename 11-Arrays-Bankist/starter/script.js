'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ``;

  movements.forEach(function (mov, i) {
    const type = mov < 0 ? `withdrawal` : `deposit`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

displayMovements(account1.movements);

const nameAbr = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLocaleLowerCase()
      .split(` `)
      .map(i => i[0])
      .join(``);
  });
};
nameAbr(accounts);

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
let arr = [`a`, `b`, `c`, `d`, `e`];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// Splice
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// Reverse - Mutates original array
arr = [`a`, `b`, `c`, `d`, `e`];
let newArr = [`j`, `i`, `h`, `g`, `f`];

console.log(newArr.reverse());
console.log(newArr);

// Concat
const letters = arr.concat(newArr);
console.log(letters);
console.log(...arr, ...newArr);

// Join
console.log(letters.join(` - `));

// At
const atArr = [23, 11, 64];
console.log(atArr[1]);
console.log(atArr.at(1));
// getting the last element
console.log(atArr[atArr.length - 1]);
console.log(atArr.slice(-1)[0]);
console.log(atArr.at(-1));

console.log(`Ryan`.at(0));
console.log(`Ryan`.at(-1));
*/

//////////////////////////////////////

// Looping array: forEach
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log(`----- FOREACH -----`);

// names of perameters does not matter but oder does.
// 1: current element
// 2: current index
// 3: entire array
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/

///////////////////////////////////////

// forEach with maps and sets

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  //  duplicate parameters can be replaced by an under_score
  console.log(`${value}: ${value}`);
});
*/

//////////////////////////////////////////

// Data transformations: Map, Filter, Reduce;

const arr = [1, 2, 3, 4, 5];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// Map - maps the old array and produces a new array
const mapArr = arr.map(function (i) {
  return i + 2;
});
console.log(mapArr);

const eurToUsd = 1.1;
const convert = movements.map(function (i) {
  return i * eurToUsd;
  // return 23;
});
console.log(convert);

const arrow = movements.map(i => i * eurToUsd);
console.log(arrow);

// a forOf loop works the same but map is more modern and cleaner
const movUSD = [];
for (const i of movements) {
  movUSD.push(i * eurToUsd);
}
console.log(movUSD);

const call = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
      mov
    )}`
);

console.log(call);
*/

/*
// // Filter - used to filter the elements of original array if condition is true
const filterArr = arr.filter(function (i) {
  return i > 3;
});
console.log(filterArr);

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// with forOf
const depFor = [];
for (const mov of movements) if (mov > 0) depFor.push(mov);
console.log(depFor);

const withFor = [];
for (const mov of movements) if (mov < 0) withFor.push(mov);
console.log(withFor);
*/

// Reduce - reduces the original array into one value
const reduceArr = arr.reduce(function (i) {
  return i + i;
});
console.log(reduceArr);

//
////////////////////////////////////////////////
////////////////////////////////////////////////
//

// Challenge 1
/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters).
2. Create an array with both Julia's (corrected) and Kate's data.
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
4. Run the function for both test data sets.Create

Test data:
- Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
- Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far 😉
*/
/*
// My attempt with a little help with slice/splice methods
const checkDogs = function (dogsJulia, dogsKate) {
  const newDogsJulia = dogsJulia.slice();
  newDogsJulia.splice(0, 1);
  newDogsJulia.splice(-2);

  const dogList = newDogsJulia.concat(dogsKate);

  for (let i = 0; i < dogList.length; i++) {
    const age = dogList[i];
    const dog = age >= 3 ? `adult` : `puppy`;
    const aAn = dog === `adult` ? `an` : `a`;
    console.log(`This dog is ${age} yrs old and is ${aAn} ${dog}`);
  }
  console.log(newDogsJulia);
  console.log(dogList);
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// The answer given in the challenge video
const checkDogsJS = function (dogsJulia, dogsKate) {
  const newDogsJulia = dogsJulia.slice();
  newDogsJulia.splice(0, 1);
  newDogsJulia.splice(-2);

  const dogList = newDogsJulia.concat(dogsKate);

  dogList.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is a ${dog} yr old adult`);
    } else {
      console.log(`Dog number ${i + 1} is a ${dog} yr old puppy`);
    }
  });

  console.log(newDogsJulia);
  console.log(dogList);
};
checkDogsJS([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogsJS([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
