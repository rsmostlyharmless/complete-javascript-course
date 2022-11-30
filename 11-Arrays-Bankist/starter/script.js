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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ``;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov < 0 ? `withdrawal` : `deposit`;
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">€{
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
  `;
    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
// console.log(containerMovements.innerHTML);

const calcDispBal = function (acc) {
  acc.balance = acc.movements.reduce((accu, curr) => accu + curr, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const dispSummery = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov > 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const nameAbr = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(` `)
      .map(i => i[0])
      .join(``);
  });
};
nameAbr(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDispBal(acc);

  // Display summery
  dispSummery(acc);
};

let currentAcount;

btnLogin.addEventListener(`click`, function (e) {
  // prevent for from submitting
  e.preventDefault();

  currentAcount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAcount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome Back ${
      currentAcount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ``;
    inputLoginPin.blur();

    updateUI(currentAcount);
  }
});

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = ``;

  if (
    amount > 0 &&
    receiverAcc &&
    currentAcount.balance >= amount &&
    receiverAcc?.username !== currentAcount.username
  ) {
    currentAcount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAcount);
  }
});

btnLoan.addEventListener(`click`, function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAcount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAcount.movements.push(amount);
    // update UI
    updateUI(currentAcount);
  }
  inputLoanAmount.value = ``;
});

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAcount.username &&
    Number(inputClosePin.value) === currentAcount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAcount.username
    );
    // delete account
    accounts.splice(index, 1);
    // hide ui
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = ``;
});

let sorted = false;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  displayMovements(currentAcount.movements, !sorted);
  sorted = !sorted;
});

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

/*
// Reduce - reduces the original array into one value
// Accumulate, element, index, array
const reduceArr = arr.reduce(function (i, j) {
  return i + j;
}, 0);
console.log(reduceArr);
// Accumulator  - Snowball affect
const balance = movements.reduce((accu, curr) => accu + curr, 0); // ensures calculation starts from a set number
console.log(balance);

// as a forOf loop
let balanceOf = 0;
for (const mov of movements) balanceOf += mov;
console.log(balanceOf);

// Max Value with reduce
const max = movements.reduce(
  (accu, curr) => (accu > curr ? accu : curr),
  movements[0]
);
console.log(max);
*/

/////////////////////////////////////////

/*
// Chaining methods
const eurToUsd = 1.1;
const step1 = movements.filter(mov => mov > 0);
console.log(step1);

const step2 = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd);
console.log(step2);

const step3 = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((i, j) => i + j, 0);
console.log(step3);
*/

///////////////////////////////

// The find method
/*
// find returns an element not an array
const first = movements.find(mov => mov < 0); // finds first element
console.log(movements);
console.log(first);

// find for looking up properties
console.log(accounts);
const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account);

// as a forOf loop
let findFirstEl = [];
for (const mov of movements) if (mov < 0) findFirstEl.push(mov);
console.log(findFirstEl);
*/

////////////////////////////////

// Some and Every
/*
// Some
console.log(movements);
// Equality
console.log(movements.includes(-130));
console.log(movements.includes(60));

// Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

//////////////////////////

// Flat and flatMap
/*
// Flat
const arrs = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrs.flat());
// flat only goes 1 level deep
const inception = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// (2) controles depth
console.log(inception.flat(2));

const accMovements = accounts.map(acc => acc.movements);
console.log(accMovements);
const allMovements = accMovements.flat();
console.log(allMovements);
const totalBal = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(totalBal);

// Chaining
const chainTotal = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(chainTotal);

// flatMap
// Only goes 1 level deep
const flatMapTotal = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(flatMapTotal);
*/

///////////////////////////////

// Sorting arrays
/*
// Sort works with arrays
// Strings
const owners = [`Ryan`, `Amy`, `Dirk`, `Gwen`];
console.log(owners.sort());
console.log(owners);

// Numbers
const num = [10, 6, 18, 14, 1];
console.log(num.sort());
console.log(num);
console.log(movements.sort());

// And needs to be programed to sort numbers
// return < 0, a, b
// return > 0 b, a
// Ascending
const sortedNum = movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(sortedNum);

const easier = movements.sort((a, b) => a - b);
console.log(easier);

// Descending
const sortedNum2 = movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(sortedNum2);

const easier2 = movements.sort((a, b) => b - a);
console.log(easier2);
*/

//////////////////////////////

// More creating and filling arrays
/*
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// empty arr + fill method
const x = new Array(7);
console.log(x);
// nothing happens
// console.log(x.map(() => 5));

const fillIt = x.fill(1, 3, 5);
console.log(fillIt);

arr1.fill(18, 2, 6);
console.log(arr1);

// Array.from (cleaning method than above........maybe)
const arrFrom = Array.from({ length: 7 }, () => 1);
console.log(arrFrom);

const arrFrom2 = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(arrFrom2);

labelBalance.addEventListener(`click`, function () {
  const movementsUI = Array.from(
    document.querySelectorAll(`.movements__value`),
    el => Number(el.textContent.replace(`€`, ``))
  );
  console.log(movementsUI);
});

// Can work the same as above but not recommended
const movementsUI2 = [...document.querySelectorAll(`.movements__value`)];
*/

///////////////////////////

// The Array Methods
// Which to use and when
/*
// MUTATING ORIGINAL ARRAY
// Adds
a.push(); // end
b.unshift(); // start
// REMOVES
c.pop(); // end
d.shift(); // start
e.splice(); // any
// OTHERS
f.reverse();
g.sort();
h.fill();

// A NEW ARRAY
// Computed from original
i.map(); // loop
// Filtered using condition
j.filter();
// Portion of original
K.slice();
// Adding to original
l.concat();
// Flattening original
m.flat();
n.flatMap;

// AN ARRAY INDEX
// Based on value
o.indexOf();
// Based on test condition
p.findIndex();

// AN ARRAY ELEMENT
// Based on test condition
q.find();

// KNOW IF ANY ARRAY INCLUDES
// Based on value
r.includes();
// Based on test condition
s.some();
t.every();

// A NEW STRING
// Based on separator string
u.join();

// TO TRANSFORM A VALUE
v.reduce(); // boil down array to value of any type: number, string, boolean, new array or object

// TO LOOP AN ARRAY
// Based on callback
w.forEach(); // purely for looping over arrays, does not create
x;
y;
z;
*/

//
/////////////////////////
//

// Array Methods Practice
/*
// 1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((a, b) => a + b, 0);
console.log(bankDepositSum);

// 2
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

const numDepo1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((a, b) => (b >= 1000 ? ++a : a), 0); // a++ will not work here
console.log(numDepo1000);

// Prefix ++ operator
let a = 10;
console.log(a++);
console.log(a);
console.log(++a);

// 3
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (a, b) => {
      // b > 0 ? (a.deposits += b) : (a.withdrawals += b);
      a[b > 0 ? `deposits` : `withdrawals`] += b;
      return a;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4
// title of your sex tape - Title of Your Sex Tape
const titleCaseConverter = function (title) {
  const capitalise = str => str[0].toUpperCase() + str.slice(1);

  const exempt = [
    `a`,
    `of`,
    `an`,
    `the`,
    `but`,
    `or`,
    `on`,
    `in`,
    `with`,
    `it`,
    `to`,
  ];
  const titleCase = title
    .toLowerCase()
    .split(` `)
    .map(word => (exempt.includes(word) ? word : capitalise(word)))
    .join(` `);
  return capitalise(titleCase);
};
console.log(titleCaseConverter(`and what a DEEP hole`));
console.log(titleCaseConverter(`kEePing It up WITH context`));
console.log(titleCaseConverter(`hoW to FUNCtion on A viBraTing moUNTing`));
*/

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

///////////////////////////////

// Challenge 2
/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human year sold (which is the same as keeping dogs that are at least 18 years old).
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉).
4. Run the function for both test data sets.

Test data:
§ Data1:[5, 2, 4, 1, 15, 8, 3] § Data2:[16, 6, 10, 5, 6, 1, 4]
*/
/*
const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge);

  const adults = humanAge.filter(age => age >= 18);
  console.log(adults);

  // const aveAge = adults.reduce((i, j) => i + j / adults.length, 0);
  const aveAge = adults.reduce((i, j, k, l) => i + j / l.length, 0);
  return aveAge;
};
const ave1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const ave2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(ave1);
console.log(ave2);
*/

///////////////////////////////////////

// Challenge 3
/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

Test data:
- Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
*/
/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((h, i, j, k) => h + i / k.length, 0);

const ave1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const ave2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(ave1);
console.log(ave2);
*/
