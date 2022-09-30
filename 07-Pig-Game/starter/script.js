'use strict';

// Selecting elements
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`);
const newGameBtn = document.querySelector(`.btn--new`);
const roleDiceBtn = document.querySelector(`.btn--roll`);
const holdScoreBtn = document.querySelector(`.btn--hold`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

let currentScore = 0;

// Rolling dice function
roleDiceBtn.addEventListener(`click`, function () {
  // Random role
  const role = Math.trunc(Math.random() * 6) + 1;
  console.log(role);
  // Display dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${role}.png`;

  //   check for rolled 1: If true, switch to next player
  if (role !== 1) {
    currentScore += role;
    current0El.textContent = currentScore;
  } else {
  }
});
