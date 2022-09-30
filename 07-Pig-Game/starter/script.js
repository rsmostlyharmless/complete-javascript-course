'use strict';

// Selecting elements
const score0El = document.getElementById(`score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const diceEl = document.querySelector(`.dice`);
const newGameBtn = document.querySelector(`.btn--new`);
const roleDiceBtn = document.querySelector(`.btn--roll`);
const holdScoreBtn = document.querySelector(`.btn--hold`);

let scores, currentScore, activePlayer, inGame;

// Starting conditions
//  and Resetting game
const inTheBeginning = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  inGame = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add(`hidden`);

  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};
inTheBeginning();

// Switching player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle([`player--active`]);
  player1El.classList.toggle([`player--active`]);
};

// Rolling dice function
roleDiceBtn.addEventListener(`click`, function () {
  if (inGame) {
    // Random role
    const role = Math.trunc(Math.random() * 6) + 1;
    console.log(role);
    // Display dice
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${role}.png`;

    //   check for rolled 1: If true, switch to next player
    if (role !== 1) {
      currentScore += role;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Save score and win game
holdScoreBtn.addEventListener(`click`, function () {
  if (inGame) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //  check player score to finish game
    if (scores[activePlayer] >= 10) {
      inGame = false;
      diceEl.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove([`player--active`]);
      document.getElementById(`score--${activePlayer}`).textContent = `WINS`;
    } else {
      switchPlayer();
    }
  }
});

// Game reset
newGameBtn.addEventListener(`click`, inTheBeginning);
