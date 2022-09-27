'use strict';
// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `🎉 Correct Number! 🎉`;
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;
// document.querySelector(`.guess`).value = 13;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;

  // no guess
  if (!guess) {
    document.querySelector(`.message`).textContent = `🙈 Input a number! 🙈`;

    // correct guess
  } else if (guess == secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number! 🎉`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score) {
      highScore = highScore + score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `👆 Too High! 👆`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      highScore = highScore - highScore;
      document.querySelector(`.highscore`).textContent = highScore;
      document.querySelector(`.message`).textContent = `☠️ You Lose! ☠️`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#d31414`;
      document.querySelector(`.number`).style.width = `30rem`;
    }

    // guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `👇 Too Low! 👇`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      highScore = highScore - highScore;
      document.querySelector(`.highscore`).textContent = highScore;
      document.querySelector(`.message`).textContent = `☠️ You Lose! ☠️`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#d31414`;
      document.querySelector(`.number`).textContent = `☠️`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = '';
  document.querySelector(`body`).style.backgroundColor = `#222`;
});

// if(score > highScore) {
//     highScore = score;
//     document.querySelector(`.highscore`).textContent = highScore;
// }
