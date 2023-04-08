'use strict';

//? Variant - transfer of function in value of a variable.
// const eventHandler = function () {
//   console.log(document.querySelector('.number-input').value);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayGuessMassage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

const displayQuestionMassage = function (question) {
  document.querySelector('.question').textContent = question;
};

const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const contentWidth = function (width) {
  document.querySelector('.question').style.width = width;
};

const totalScores = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    displayGuessMassage('Enter the number!');

    // Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMassage('You won!');
    displayQuestionMassage(secretNumber);
    contentWidth('50rem');
    backgroundColor('rgb(9, 250, 21)');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMassage(
        guessingNumber > secretNumber ? 'Too much!' : 'Too few!',
      );
      score--;
      totalScores(score);
    } else {
      displayGuessMassage('You lose!');
      backgroundColor('rgb(250, 9, 21)');
      displayQuestionMassage('GAME OVER');
      totalScores(0);
    }
  }
});

//! Page Reload Option #1, Keeping High Score.
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayQuestionMassage('???');
  contentWidth('25rem');
  displayGuessMassage('Start guessing!');
  totalScores(score);
  backgroundColor('rgb(0, 0, 0)');
  document.querySelector('.number-input').value = '';
});

//! Page reload option #2, but then the High Score will not be saved.
// const reloadButton = document
//   .querySelector('.again')
//   .addEventListener('click', () => {
//     location.reload();
//   });
