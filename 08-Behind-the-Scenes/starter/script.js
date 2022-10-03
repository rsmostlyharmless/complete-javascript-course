'use strict';

const calcAge = function (birthYear) {
  const age = 2022 - birthYear;

  const printAge = function () {
    let outPut = `${firstName}, You are ${age}, born in ${birthYear}.`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   creating a new variable with the same name as the outer scope's variable
      const firstName = `Steven`;

      //   reassigning outer scope's variable
      outPut = `NEW OUTPUT`;

      const str = `...and you're a millenial, ${firstName}`;
      console.log(str);

      const add = function (a, b) {
        return a + b;
      };
    }
    // console.log(str); Uncaught ref error
    console.log(millenial); // var can be found out of scope
    // console.log(add(2, 3)); Would not work with or without `use strict`
    console.log(outPut);
  };
  printAge();

  return age;
};

const firstName = `Ryan`;
calcAge(1986);
// console.log(age); Uncaught ref error as age is not in scope
