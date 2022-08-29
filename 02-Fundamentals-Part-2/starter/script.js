'use strict';


// CHALLENGES

// CODING CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(12, 31, 10));
// console.log(calcAverage(65, 54, 49));

// let finalScoreDol = calcAverage();
// let finalScoreKoa = calcAverage();

// function checkWinner (avgDolphins, avgKoalas) {
//     if (avgDolphins >= (2 * avgKoalas)) {
//         console.log(`Dolphins win ${avgDolphins} : ${avgKoalas}`);
//     } else if (avgKoalas >= (2 * avgDolphins)) {
//         console.log(`Koalas win ${avgKoalas} : ${avgDolphins}`);
//     } else {
//         console.log(`No clear winner`);
//     }
// }
// checkWinner(finalScoreDol, finalScoreKoa);
// checkWinner(100, 222);

// CHALLENGE 2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
// 2. And now let's use arrays! So create an array 'bills' containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill,calculated from the function you created before.
//4. Bonus: Create an array 'total' containing the total values, so the bill+tip.

const calcTip = bills => bills >= 50 && bills <= 300 ? bills * 15 / 100 : bills * 20 / 100;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills);
console.log(tips);
console.log(totals);




// END OF VIDEO TASKS

// Functions

// function describeCountry (country, population, capitalCity) {
//     const description = `${country} has ${population} people and it's capital city is ${capitalCity}.`;
//     return description;
// }
// const country1 = describeCountry(`Finland`, `6,000,000`, `Helsinki`)
// console.log(country1);
// const country2 = describeCountry(`Wales`, `3,000,000`, `Cardiff`)
// console.log(country2);
// const country3 = describeCountry(`Sweden`, `10,000,000`, `Stockholm`)
// console.log(country3);

// Function declarations & expressions
// Declaration
// function percentageOfWorld1 (population) {
//     return ((population / 7900/*000000*/) * 100);
// }
// // Calls above function percentageOfWorld
// function describePopulation (country, population) {
//     const percentage = percentageOfWorld1(population);
//     return (`${country} has about ${population} million people, which is roughly ${percentage.toFixed(2)}% of the world population.`);
// }

// console.log(describePopulation(`sweden`, 10));

// const china1 = percentageOfWorld1(1441/*000000*/);
// const finland1 = percentageOfWorld1(5/*000000*/);
// const wales1 = percentageOfWorld1(3/*000000*/);
// const sweden1 = percentageOfWorld1(10/*000000*/);

// Expression
// const percentageOfWorld2 = function (population) {
//     return (population / 7900/*000000*/) * 100;
// }

// const china2 = percentageOfWorld1(1441/*000000*/);
// const finland2 = percentageOfWorld2(6/*000000*/);
// const wales2 = percentageOfWorld2(3/*000000*/);
// const sweden2 = percentageOfWorld2(10/*000000*/);

// Arrow Function
// const percentageOfWorld3 = population => (population / 7900/*000000*/) * 100;

// const china3 = percentageOfWorld1(1441/*000000*/);
// const finland3 = percentageOfWorld2(6/*000000*/);
// const wales3 = percentageOfWorld2(3/*000000*/);
// const sweden3 = percentageOfWorld2(10/*000000*/);

// console.log(china1, china2, china3);
// console.log(finland1, finland2, finland3);
// console.log(wales1, wales2, wales3);
// console.log(sweden1, sweden2, sweden3);

// ARRAYS
// const countries = [`China`, `Finland`, `Wales`, `Sweden`];
// console.log(countries);

// const populations = [1441, 6, 3, 10];
// console.log(populations);
// console.log(populations.length === 5);

// const allPecentages = [percentageOfWorld1(1441).toFixed(2), percentageOfWorld1(5).toFixed(2), percentageOfWorld1(3).toFixed(2), percentageOfWorld1(10).toFixed(2)];
// console.log(allPecentages);

// const allCountryValues = [[countries[0], populations[0], allPecentages[0]], [countries[1], populations[1], allPecentages[1]], [countries[2], populations[2], allPecentages[2]], [countries[3], populations[3], allPecentages[3]]];
// console.log(allCountryValues);

// const order = [allCountryValues[0], allCountryValues[1], allCountryValues[3], allCountryValues[2]];
// console.log(order);

// Basic array operations(methods)

// const neighbours = [`Portugal`, `Andora`, `France`];
// neighbours.push(`Utopia`);
// console.log(neighbours)

// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes(`Germany`)) {
//     console.log('Probably not a central European country :D');
// }
// console.log(neighbours);

// neighbours[neighbours.indexOf(`Andora`)] = `New Utopia`;
// console.log(neighbours);



// NOTES
// Strict Mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// can not use reserved words/phrases
// const interface = `Audio`;
// const private = `number9`;
// const if = 42;


// Functions

// function logger() {
//     console.log(`My name is Ryan`)
// }
// calling / running / involking function
// logger();
// logger();
// logger();

// Using a function to call another function
// function cutFruit(fruit) {
//     return fruit * 4;
// }

// function foodProcessor(apples, oranges) {
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(foodProcessor(2, 3));

// foodProcessor(3, 1);
// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = foodProcessor(5 ,2);
// console.log(appleOrangeJuice);

// const num = Number(`23`);


// Function Declarations vs Expressions
// declaration
// function calcAge1 (birthYear) {
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// expression (annonymous function)
// const calcAge2 = function (birthYear) {
//     return 2040 - birthYear;
// }
// const age2 = calcAge2(1991);


// Arrow function
// const calcAge3 =  birthYear => 2043 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age1, age2, age3);


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, `Ryan`));
// console.log(yearsUntilRetirement(1996, `Amy`));
// console.log(yearsUntilRetirement(2010, `Quinn`));

// Functions Review
// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement <= 0) {
//         return `${firstName} has already retired!`
//     } else if (retirement > 65) {
//         return `I'm not sure ${firstName} born yet!`
//     } else {
//         return `${firstName} has ${retirement} years until retirement`;
//     }
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, `Ryan`));
// console.log(yearsUntilRetirement(1970, `Amy`));
// console.log(yearsUntilRetirement(2040, `Quinn`))


// ARRAYS
// An ARRAY is a grouping of information / values
// const person1 = `Ryan`;
// const person2 = `Amy`;
// const person3 = `Quinn`;
// // Turned into an ARRAY
// const people = [`Ryan`, `Amy`, `Quinn`];

// console.log(people[1]);
// console.log(people.length);
// console.log(people[people.length - 1]);

// Changes `Ryan` to `That guy!`
// people[0] = `That guy!`;
// console.log(people);
// people = [`That guy!`]; does not work!

// const years = new Array(1980, 1990, 2000, 2010, 2020);
// console.log(years[3])
// console.log(years[years.length - 1]);
// console.log(years.length - 1);

// const firstName = `Ryan`;
// const ryan = [firstName, `Syder`, 2022 - 1986, `Student`, people];
// console.log(ryan);
// console.log(ryan.length);

// const calcAge = function (birthYear) {
//         return 2022 - birthYear;
//     }
// const age1 = calcAge(years[0]);
// console.log(age1);
// const age2 = calcAge(years[1]);
// console.log(age2);
// const age3 = calcAge(years[2]);
// console.log(age3);
// const age4 = calcAge(years[years.length - 2]);
// console.log(age4);
// const age5 = calcAge(years[years.length - 1]);
// console.log(age5);

// const allYears = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 2]), calcAge(years[years.length - 1])];
// console.log(allYears);


// Array Methods
// Add elements
// const people = [`Ryan`, `Amy`, `Quinn`];
// const newPeople = people.push(`Bruce`);
// console.log(people);
// console.log(newPeople);

// people.unshift(`Dick`);
// console.log(people);

// remove elements
// people.pop();
// const popped = people.pop();
// console.log(people);
// console.log(popped);

// people.shift();
// console.log(people);

// console.log(people.indexOf(`Amy`));
// console.log(people.indexOf(`Bruce`));

// people.push(23);
// console.log(people.includes(`Amy`));
// console.log(people.includes(`Dick`));
// console.log(people.includes(23)); // 23 - true : `23` false

// if (people.includes(`Bruce`)) {
//     console.log(`He's Batman!!`);
// } else {
//     console.log(`Don't trust the others!!!`);
// }
// console.log(people.includes(`Bruce`));
