'use strict';


// CHALLENGES


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
function percentageOfWorld1 (population) {
    return (population / 7900/*000000*/) * 100;
}
const china1 = percentageOfWorld1(1441/*000000*/);
const finland1 = percentageOfWorld1(6/*000000*/);
const wales1 = percentageOfWorld1(3/*000000*/);
const sweden1 = percentageOfWorld1(1/*000000*/);

// Expression
const percentageOfWorld2 = function (population) {
    return (population / 7900/*000000*/) * 100;
}
const china2 = percentageOfWorld1(1441/*000000*/);
const finland2 = percentageOfWorld2(6/*000000*/);
const wales2 = percentageOfWorld2(3/*000000*/);
const sweden2 = percentageOfWorld2(10/*000000*/);

// Arrow Function
const percentageOfWorld3 = population => (population / 7900/*000000*/) * 100;

const china3 = percentageOfWorld1(1441/*000000*/);
const finland3 = percentageOfWorld2(6/*000000*/);
const wales3 = percentageOfWorld2(3/*000000*/);
const sweden3 = percentageOfWorld2(10/*000000*/);

console.log(china1, china2, china3);
console.log(finland1, finland2, finland3);
console.log(wales1, wales2, wales3);
console.log(sweden1, sweden2, sweden3);


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

// function foodProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// foodProcessor(3, 1);
// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = foodProcessor(5 ,2);
// console.log(appleOrangeJuice);

// const num = Number(`23`);


// Function Declarations vs Expressions
// declaration
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// expression (annonymous function)
const calcAge2 = function (birthYear) {
    return 2040 - birthYear;
}
const age2 = calcAge2(1991);


// Arrow function
const calcAge3 =  birthYear => 2043 - birthYear;
const age3 = calcAge3(1991);

console.log(age1, age2, age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, `Ryan`));
console.log(yearsUntilRetirement(1996, `Amy`));
console.log(yearsUntilRetirement(2010, `Quinn`));
