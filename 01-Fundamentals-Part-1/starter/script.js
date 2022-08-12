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