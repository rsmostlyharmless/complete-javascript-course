'use strict';

// CHALLENGES

// CHALLENGE 1
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
*/
// Your tasks:
/*
1. Create one player array for each team (variables 'players1' and 'players2').

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.

3. Create an array 'allPlayers' containing all players of both teams (22 players).

4. Duringthegame,BayernMunich(team1)used3substituteplayers.Socreatea new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.

5. Based on the game.oddsobject, create one variable for each odd (called 'team1', 'draw' and 'team2').

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in).

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored.
*/
const game = {
  team1: `Bayern Munich`,
  team2: `Borrusia Dormund`,
  players: [
    [
      `Neuer`,
      `Pavard`,
      `Martinez`,
      `Alaba`,
      `Davies`,
      `Kimmich`,
      `Goretzka`,
      `Coman`,
      `Muller`,
      `Gnarby`,
      `Lewandowski`,
    ],
    [
      `Burki`,
      `Schultz`,
      `Hummels`,
      `Akanji`,
      `Hakimi`,
      `Weigl`,
      `Witsel`,
      `Hazard`,
      `Brandt`,
      `Sancho`,
      `Gotze`,
    ],
  ],
  score: `4:0`,
  scored: [`Lewandowski`, `Gnarby`, `Lewandowski`, `Hummels`],
  date: `Nov 9th, 2037`,
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// const gk = [players1[0]];
// const [, ...fieldPlayers] = [...game.players[0]];
// const allPlayers = [...players1, ...players2];
// const player1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// const { team1, x: draw, team2 } = game.odds;
// // const draw = game.odds.x;

// console.log(players1);
// console.log(players2);
// console.log(gk);
// console.log(fieldPlayers);
// console.log(allPlayers);
// console.log(player1Final);
// console.log(team1);
// console.log(draw);
// console.log(team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(`Davies`, `Muller`);
// printGoals(`Davies`, `Muller`, 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log(`Team 1 likely to win`);
// team1 > team2 && console.log(`Team 2 likely to win`);

/*
// CHALLENGE 2

Your tasks:

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski").

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember).

3. Print the 3odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉.

4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
     {
       Gnarby: 1,
       Hummels: 1,
       Lewandowski: 2
} */

//
//////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  Fri: {
    open: 11,
    close: 23,
  },
  Sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours, //// No longer used
  // Enhanced Object Literals
  openingHours, // now used

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
  // Old way of writing the sytax with the function ket word
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta made with ${ing1}, ${ing2} & ${ing3}`
    );
  },
  // Enhanced Object Literals
  // New syntax without function key word but both are exceptable
  orderPizza(mainIngr, ...otherIngr) {
    console.log(mainIngr);
    console.log(otherIngr);
  },
};

// // Looping Objects: Object keys, values & entries
// // Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += `, ${day}`;
// }
// console.log(openStr);

// // Property values
// const value = Object.values(openingHours);
// console.log(value);

// const entry = Object.entries(openingHours);
// console.log(entry);

// for (const [key, { open, close }] of entry) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//
/////////////////////////////////////////
//

// Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// EXAMPLE
// const days = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`];
// FOR-OF LOOP
// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// // Arrays
// const users = [
//   {
//     name: `Ryan`,
//     email: `r.s@gmail.uk`,
//   },
// ];
// console.log(users[0]?.name ?? `User array empty`);
// console.log(users[3]?.name ?? `User array empty`);

// if (users.length > 0) console.log(users[0]?.name);
// else console.log(`User array empty`);

//
//////////////////////////////////////////////
//

// FOR-OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const list of menu) console.log(list);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log([...menu.entries()]);

/////////////////////////////////////////////

// &&, ||, ?? Logical Assignment Operators

// const rest1 = {
//   name: `Roastery`,
//   // numGuests: 20,
//   numGuests: 0, //number will still be 10 with OR operator. Use ??=
// };

// const rest2 = {
//   name: `Burgery`,
//   owner: `Sterling Archer`,
// };

// ||= OR Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// ??= NULLISH Assignment Operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// &&= AND Assignment Operator
// rest1.owner = rest1.owner && `<ANONYMOUS>`; // adds owner - undefined to rest1
// rest2.owner = rest2.owner && `<ANONYMOUS>`;
// rest1.owner &&= `<ANONYMOUS>`; // Will only add if result is truthy
// rest2.owner &&= `<ANONYMOUS>`;

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////

//
// // The nullish coalescing operator
// // Nullish: Null and Undefined (NOT 0 or ``)
// restaurant.numGuests = 0;
// const guest = restaurant.numGuests || 10;
// console.log(guest);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//
// Short circuiting (&& and ||)

// console.log(`----- OR -----`);
// // Use any data type, return any data type
// // all will return truthy values
// console.log(3 || `Ryan`);
// console.log(`` || `Ryan`);
// console.log(true || 0);
// console.log(undefined || null);
// // The first truthy value is `Hello`
// console.log(undefined || 0 || `` || `Hello` || 23 || null);

// // result will always be the number if value is not defined
// // default number can be overridden
// // restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// // easier way to write the above statement
// // The results are the same
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(`----- AND -----`);
// // the && operator returns falsy values
// console.log(0 && `Ryan`);
// console.log(7 && `Ryan`);
// // the first falsy value is null
// console.log(`Hello` && 23 && null && `Ryan`);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`Mushrooms`, `Olives`);
// }

// restaurant.orderPizza && restaurant.orderPizza(`Mushrooms`, `Olives`);

// Rest Operator

// Destructuring
// spread as on right side of =
// const arr = [1, 2, ...[3, 4]];
// // rest as on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // Rest element must be last element
// const [pizza, , risotto, ...otherFood /*, bread*/ //] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// //
// // Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// // mushrooms main ingredient, other in other.
// restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);

/////////////////////////////////////////
//
// Spread Operator
//
// const newMenu = [...restaurant.mainMenu, `Gnocci`];
// console.log(...newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // joining arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// const newArr = [1, 2, arr];
// const spreadArr = [1, 2, ...arr];
// console.log(badNewArr); // Old way to add to an existing array
// console.log(newArr); // places the original array next to the new
// console.log(...spreadArr); // easier way to add to the existing array

// iterables = Strings, Arrays, Maps, Sets - But not Objects
// const str = `Syder`;
// const letters = [`R.`, ``, ...str];
// console.log(letters);
// console.log(...str);
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
// const newRestaurant = { foundedIn: 2005, ...restaurant, founder: `Bob` };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = `Bob's Burgers`;
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

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
