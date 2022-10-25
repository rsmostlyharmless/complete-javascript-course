'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //  with default values
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = `20:00`,
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} to be sent to ${address} for ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta made with ${ing1}, ${ing2} & ${ing3}`
    );
  },
};
const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(...newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// joining arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const newArr = [1, 2, arr];
const spreadArr = [1, 2, ...arr];
console.log(badNewArr); // Old way to add to an existing array
console.log(newArr); // places the original array next to the new
console.log(...spreadArr); // easier way to add to the existing array

// iterables = Strings, Arrays, Maps, Sets - But not Objects
const str = `Syder`;
const letters = [`R.`, ``, ...str];
console.log(letters);
console.log(...str);
// console.log(`${...str} was here!`); Does not work

// const ingredients = [
//   prompt(`ingredient 1?`),
//   prompt(`ingredient 2?`),
//   prompt(`ingredient 3?`),
// ]; // or use the back slash \ to mask quotes.
// console.log(ingredients);
// // Same answer but the spread operator makes the call shorter
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 2005, ...restaurant, founder: `Bob` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Bob's Burgers`;
console.log(restaurant.name);
console.log(restaurantCopy.name);

//////////////////////////////////////
// restaurant.orderDelivery({
//   time: `22:30`,
//   address: `Carrer de Margarit, 9`,
//   mainIndex: 1,
//   starterIndex: 3,
// });

// restaurant.orderDelivery({
//   address: `Carrer de Margarite, 9`,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// // changing variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);
// // without the square brackets you get undefined
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // syntax error {a, b} = obj;
// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////

// const [starter, mainCourse] = restaurant.order(3, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// // default values
// let [p = 1, q = 1, r = 1] = [9];
// // [r] = [10];
// console.log(p, q, r);
// //

// // empty element becomes second element so 'second' becomes third
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
//
//
// switching variables
// let temp = main;
// main = secondary;
// // secondary = main : 3 "boxes" required to swap over the content
// secondary = temp;
// console.log(main, secondary);

// easier way to switch content
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
