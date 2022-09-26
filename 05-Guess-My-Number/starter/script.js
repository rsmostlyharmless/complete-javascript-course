'use strict';
// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.message`).textContent = `🎉 Correct Number! 🎉`;
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;
// document.querySelector(`.guess`).value = 13;
// console.log(document.querySelector(`.guess`).value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(`.number`).textContent = secretNumber;

let score = 20;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = document.querySelector(`.guess`).value;

  // no guess
  if (!guess) {
    document.querySelector(`.message`).textContent = `🙈 Input a number! 🙈`;

    // correct guess
  } else if (guess == secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number! 🎉`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `👆 Too High! 👆`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
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
      document.querySelector(`.message`).textContent = `☠️ You Lose! ☠️`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#d31414`;
      document.querySelector(`.number`).style.width = `30rem`;
    }
  }
});
