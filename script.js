'use strict';

// document.querySelector('.guess-message');

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'Правильно!';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// document.querySelector('.number-input').value = 13;

// console.log(document.querySelector('.number-input').value);

//? Вариант - передача функции в значении переменной.
// const eventHandler = function () {
//   console.log(document.querySelector('.number-input').value);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayGuessMassage = function () {
  document.querySelector('.question').textContent = 'message';
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
    document.querySelector('.question').textContent = secretNumber;
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
      document.querySelector('.question').textContent = 'GAME OVER';
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

//! Вариант перезагрузки страницы № 1
// const reloadButton = document
//   .querySelector('.again')
//   .addEventListener('click', () => {
//     location.reload();
//   });

//! Вариант перезагрузки страницы № 2
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMassage('Начни угадывать!');
  //   document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
