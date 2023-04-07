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

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';

    // Player won
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    // to hight
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком много!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
      document.querySelector('.score').textContent = 0;
    }

    // To low
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком мало!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Вы проиграли!';
      document.querySelector('.score').textContent = 0;
    }
  }
});