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

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    displayGuessMassage('Введите число!');
    // document.querySelector('.guess-message').textContent = 'Введите число!';

    // Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMassage('Правильно!');
    // document.querySelector('.guess-message').textContent = 'Правильно!';
    displayQuestionMassage(secretNumber);
    // document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
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
      //   document.querySelector('.guess-message').textContent =
      //     guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMassage('Вы проиграли!');
      //   document.querySelector('.guess-message').textContent = 'Вы проиграли!';
      document.querySelector('body').style.backgroundColor = 'rgb(250, 9, 21)';
      displayQuestionMassage('GAME OVER');
      //   document.querySelector('.question').textContent = 'GAME OVER';
      document.querySelector('.score').textContent = 0;
    }
  }

  // to high
  //   } else if (guessingNumber > secretNumber) {
  // if (score > 1) {
  //   document.querySelector('.guess-message').textContent = 'Слишком много!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.guess-message').textContent = 'Вы проиграли!';
  //   document.querySelector('body').style.backgroundColor = 'rgb(250, 9, 21)';
  //   document.querySelector('.question').textContent = 'GAME OVER';
  //   document.querySelector('.score').textContent = 0;
  // }

  // To low
  //   } else if (guessingNumber < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.guess-message').textContent = 'Слишком мало!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.guess-message').textContent = 'Вы проиграли!';
  //       document.querySelector('body').style.backgroundColor = 'rgb(250, 9, 21)';
  //       document.querySelector('.question').textContent = 'GAME OVER';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//! Вариант перезагрузки страницы № 1, но тогда не сохранится High Score
// const reloadButton = document
//   .querySelector('.again')
//   .addEventListener('click', () => {
//     location.reload();
//   });

//! Вариант перезагрузки страницы № 2, с сохранением результата High Score
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayQuestionMassage('???');
  //   document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMassage('Начни угадывать!');
  //   document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
