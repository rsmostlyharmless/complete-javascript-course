// CODING CHALLENGES
// CHALLENGE 1
/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 || mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

// CHALLENGE 2
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;

// const diffBMI = markBMI - johnBMI;
// let mostBMI;

// if(markHigherBMI) {
//     mostBMI = `Mark's BMI (${markBMI}) is ${diffBMI} more than John's (${johnBMI})!`;
// } else {
//     mostBMI = `John's BMI (${johnBMI}) is ${diffBMI} more than Mark's (${markBMI})!`
// };

// console.log(markBMI);
// console.log(johnBMI);
// console.log(markHigherBMI);
// console.log(diffBMI);
// console.log(mostBMI);

// CODING CHALLENGE 3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else - if blocks 😉
// 4. Bonus2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const dolphins = Math.floor((96 + 108 + 89) / 3);
// const koalas = Math.floor((88 + 91 + 110) / 3);

const dolphins = Math.floor((97 + 112 + 101) / 3);
const koalas = Math.floor((109 + 95 + 100) / 3);

// const dolphins = Math.floor((97 + 112 + 101) / 3);
// const koalas = Math.floor((109 + 95 + 106) / 3);

console.log(dolphins);
console.log(koalas);

if (dolphins > koalas && dolphins >= 100) {
    console.log(`Dolphins win!!!`)
} else if (dolphins < koalas && koalas >= 100) {
    console.log(`Koalas win!!!`)
} else if (dolphins && koalas >= 100) {
    console.log(`It's a draw!!!`)
} else {
    console.log(`Both teams loose!!!`)
}

// (END OF VIDEO TASKS)

// const continentOne = 'Europe';

// let countryOne = 'Spain'
// let populationOne = 46000000;
// const isIsland = false;
// let languageOne;
// language = 'Spanish';
// // populationOne++;

// let countryTwo = 'Finland';
// let populationTwo = 6000000;
// const languageTwo = 'Finish';

// let countryThree = 'Portugal';
// let populationThree = 11000000;
// const languageThree = 'Portugues';

// const population = 130000000;
// let belowPop = 33000000 - population;
// let average;
// if(population > 33000000) {
//     average = `Population is above average`;
// } else {
//     belowPop = 33000000 - population;
//     average = `The population is ${belowPop} less than the average`
// };

// console.log(belowPop);
// console.log(average);

// const description = `${countryThree} is in ${continentOne} and it's ${populationThree} people speak ${languageThree}.`;
// const descriptionTwo = `I live in ${countryOne} which is in ${continentOne} and has a population of ${populationOne}.`;

// console.log(description);
// console.log(descriptionTwo);

// console.log(population / 2);
// console.log(population);
// console.log(population > populationTwo);
// console.log(population < averagePop);

// console.log(typeof country);
// console.log(typeof continent);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(language);

//Conversion or Coercion?
// console.log(`9` - `5`); // === 4
// console.log(`19` - `13` + `17`); // === 617
// console.log(`19` - `13` + 17); // === 23
// console.log(`123` < 57); // === false
// console.log(5 + 6 + `4` + 9 - 4 - 2); // === 117 --- correct answer 1143
// Numbers after the `4` are a seperate equation so the answer gets pushed to the end

//Equality Operators
// const numNeighbours = prompt(`How many neighbour countries does your country have?`);
// // const numNeighbours = 0;
// if (numNeighbours == 1) {
//     console.log(`Only one border!`)
// } else if (numNeighbours >= 2) {
//     console.log(`More than one border!!`)
// } else {
//     console.log(`0 borders!!!`)
// }


// (NOTES & PRACTICE)

// JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);

// console.log(typeof true);
// console.log(typeof JavaScriptIsFun);
// console.log(typeof 3);
// console.log(typeof 'Ryan');

// JavaScriptIsFun = 'YES!';
// console.log(typeof JavaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1986;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null); legacy bug


// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// console.log('Ryan');
// console.log(36);

// let person = 'Ryan';
// let PI = 3.1415;

// let myFirstJob = 'Cleaner';
// let myCurrentJob = 'Student';

// let job1 = 'cleaner';
// let job2 = 'Student';

// console.log('My first job was a ' + job1 + ' but now I am a ' + myCurrentJob);

// console.log('Now I am a ' + job2 + ' but originally I was a ' + myFirstJob);


// let firstName = 'Ryan';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// camelCase is prefered

// always start variables with lowercase

// Don't use reserved key words

// let years = 3;  no numbers at start of variables

// let ryan&amy = 'RA'; variables can only has letters. numbers, _ or $. 

// Number values do not need to be in quotations unless they use symbols/letters


// let age = 35;
// age = 36;

// const birthYear = 1986;
// birthYear = 1989; not allowed with const

// const job; const should alway be defined
// var is the original variable and not really used
// var job = 'Student';
// job = 'programmer'
// never declare a variable without const, let or var first
// lastName = 'Syder';
// console.log(lastName);

// (ASSIGNMENT OPPERATORS) =, +, +=, typeof


// const now = 2037;
// const ageRyan = now - 1991;
// const ageAmy = now - 2020;

// console.log(ageRyan, ageAmy);
// console.log(ageRyan * 2, ageRyan / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Ryan';
// const lastName = 'Syder'
// console.log(firstName + ' ' + lastName)

// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// x--; // x = x - 1 = 99
// console.log(x);

// console.log(ageRyan > ageAmy); // <, >, >=, <=
// console.log(ageAmy >= 18);

// const isFullAge = ageAmy >= 18;
// console.log(isFullAge);
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageRyan = now - 1991;
// const ageAmy = now - 2020;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y)

// const averageAge = (ageRyan + ageAmy) / 2;
// console.log(ageRyan, ageAmy, averageAge);


// STRINGS AND TEMPLATE LITERALS

// const firstName = 'Ryan';
// const job = 'Student';
// const birthYear = 1986;
// const year = 2022;

// const ryan = "Hi, I'm " + firstName + ", a " + (year - birthYear) + "yrs old " + job + ".";
// console.log(ryan);

// const ryanNew = `Hi, I'm ${firstName}, a ${year - birthYear}yrs old ${job}.`;
// console.log(ryanNew);

// console.log(`Just a regular string...`);

// console.log("String with\nmultiple\nlines");
// console.log(`String with
// multiple
// lines`);


// IF / ELSE STATEMENTS

// let age = 19;
// age = 17;
// age = 20;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//     console.log(`Sarah can start driving`)
// }

// let age = 15;

// if(age >= 18) {
//     console.log(`Sarah can start driving`)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft}yrs.`);
// }

// const birthYear = 1986;
// let century;

// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21
// }
// console.log(century);


// TYPE CONVERSION & COERCION

// Type conversion - MAnually convert from one type to another
// Type coercion - JS automatically converts types

// Type conversion:

// const inputYear = '1991'; // String

// console.log(inputYear + 18); // literally adds 18 to the end of 1991 = 199118
// console.log(Number(inputYear)); // turns string into a number
// console.log(Number(inputYear) + 18); // = 2009

// console.log(Number(`Ryan`)); // NaN = Not A Number
// console.log(typeof NaN); // a Number?

// console.log(String(23), 23); // the first is a string and the second a number

// // Type coercion

// console.log(`I am ` + 40 + `yrs old`);
// console.log(`I am ` + String(40) + `yrs old`);
// console.log(`23` - `10` - 3); // minus, multiply & divide trigger automatic conversion
// console.log(`23` * `2`);
// console.log(`23` / `2`);

// console.log(`23` + `10` + 3); // plus does not

// let n = `1` + 1; // 11
// n = n - 1; // 11 - 1 = 10
// console.log(n);

// console.log(`10` - `4` - `3` - 2 + `5`); // === 15


// TRUTHY & FALSY VALUES

// // Falsy values: 0, '', undefined, null, NaN.
// console.log(Boolean(0));
// console.log(Boolean(`Ryan`));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean(NaN));

// // Boolean example as 0 is falsy so JS will choose the later choice
// // If number is changed to say 100 then this is a truthy & JS will choose the first choice
// const money = 0;
// if(money > 0) {
//     console.log(`Dont'spend it all!!!`);
// } else {
//     console.log(`You have no money`);
// }

// // height will always be undefined as no value has been given
// let height;
// if(height) {
//     console.log(`Height is defined`);
// } else {
//     console.log(`Height is undefined`);
// }


// EQUALITY OPERATORS

// const age = 18;
// if (age === 18) console.log(`Welcome to the jungle (Strict)`);

// if (age == 18) console.log(`Welcome to the jungle (Loose)`);

// const favourite = prompt(`What's your favourite number?`);
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 42) {
//     alert(`The answer to life, the universe and everything!`)
// } else if (favourite == 3) {
//     alert(`3 is the magic number!`)
// } else if (favourite == 54) {
//     alert(`The answer to the question (6 * 9) of life, the universe and everything!`)
// } else {
//     alert(`That's all folks!!!`)
// }

// if (favourite != 42) console.log(`Mostly Harmless`);


// BOOLEAN LOGIC

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = false;

// console.log(hasDriversLicense && hasGoodVision && isTired);
// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(!hasDriversLicense);
// console.log(!hasGoodVision);
// console.log(!isTired);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log(`Safe to drive!`)
// } else {
//     console.log(`Maybe someone else should drive...`);
// }

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Safe to drive!`)
// } else {
//     console.log(`Maybe someone else should drive...`);
// }