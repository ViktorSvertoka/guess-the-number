'use strict';

//? Вариант - передача функции в значении переменной.
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

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    displayGuessMassage('Введите число!');

    // Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMassage('Правильно!');
    displayQuestionMassage(secretNumber);
    backgroundColor('rgb(9, 250, 21)');

    document.querySelector('.question').style.width = '50rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMassage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!',
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMassage('Вы проиграли!');
      backgroundColor('rgb(250, 9, 21)');
      displayQuestionMassage('GAME OVER');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//! Вариант перезагрузки страницы № 1, с сохранением результата High Score
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayQuestionMassage('???');
  document.querySelector('.question').style.width = '25rem';
  displayGuessMassage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  backgroundColor('rgb(0, 0, 0)');
});

//! Вариант перезагрузки страницы № 2, но тогда не сохранится High Score
// const reloadButton = document
//   .querySelector('.again')
//   .addEventListener('click', () => {
//     location.reload();
//   });
