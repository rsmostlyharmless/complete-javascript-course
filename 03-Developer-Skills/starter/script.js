// Remember, we're gonna use strict mode in all scripts now!
`use strict`;
//
//
// USING GOOGLE STACKOVERFLOW AND MDN

// PROBLEM 1
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a scensor error".

// 1) Understanding the problem
// - What is temp amplitude? Temperature amplitude is the difference between the lowest and highest temps.
// - Calculation: Amp = maxTemp - minTemp

// Breaking up into sub-problems
// How to ignore errors?
// Find the max value in an array
// Find the min value in an array
// Use amp calculation and return value (maxTemp - minTemp = amp)

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem.
// - With 2 arrays, should we implement the functionality twice? NO! Just merge the 2 arrays.

// 2) Breaking up into sub-problems.
// - Merge 2 arrays.

// const temperatures = [3, -2, -6, -1, `Error`, 9, 13, 17, 15, 14, 9, 5];
// const moreNumbers = [-6, 5, 10, 18, 24, 29];

const calcTempAmp = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== `number`) continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    return max - min;
};
// const amplitude = calcTempAmp(temperatures);
// console.log(amplitude);

// break

// const calcTempAmpNew = function (t1, t2) {
//     const temps = t1.concat(t2); // Merges arrays together

//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== `number`) continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     return max - min;
// };
// const amplitudeNew = calcTempAmpNew(temperatures, moreNumbers);
// console.log(amplitudeNew);
//
//
//
//
// DEBUGGING

// const measureKelvin = function () {
//     const measurement = {
//         type: `Temp`,
//         unit: `Cels`,
// Fix Bug
// value: prompt(`Degrees Celcius:`)
// value: Number(prompt(`Degrees Celcius:`)),
//     value: 10,
// };
// B) Found Bug
// console.log(measurement);
// console.log(measurement.value);
// const kelvin = measurement.value + 273;
// return kelvin;
// };
// A) Identify Bug
// console.log(measureKelvin());
//
//
//
//
// const temperatures = [3, -2, -6, -1, `Error`, 9, 13, 17, 15, 14, 9, 5];
// const moreNumbers = [-6, 5, 10, 18, 24, 29];

// const calcTempAmpBug = function (t1, t2) {
//     const temps = t1.concat(t2); // Merges arrays together

//     let max = 0;
//     let min = 0;

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== `number`) continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitudeBug = calcTempAmpBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);
//
//
//
//
// CHALLENGE 1
// Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ...".

// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test data sets.
// 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data2:[12, 5, -5, 0, 4]

// 1) Understanding the problem
// - Array tranformed to string, seperated by ...
// - What is the X days? Index + 1

// 2) Breaking up into sub-problems
// - Transforming array into a string
// - Transform each element into string with ℃
// - String needs to contain day (index + 1)
// - Add ... between element at start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}℃ ... ${data1[1]}℃ ... ${data1[2]}℃`);

const printForecast = function (arr) {
    let str = ``;

    for (let i = 0; i < arr.length; i++) {
        str += ` ${arr[i]}℃ in ${i + 1} day(s) ...`;
    }
    console.log(`...` + str);
};
printForecast(data2);
