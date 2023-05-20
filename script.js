'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const againBtn = document.querySelector('.again');

let score = 20;
let highScore = document.querySelector('.highscore').textContent;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let scoreNumber = Number(document.querySelector('.score').textContent);
  const guessingNumber = Number(document.querySelector('.number-input').value);

  //   No input

  if (!guessingNumber) {
    displayGuessMessage('Введите число');

    // if number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много' : 'Слишком мало'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game over');
      document.querySelector('.score').textContent = 0;
    }

    // too hight
    //   } else if (guessingNumber > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.guess-message').textContent = 'Слишком много';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.guess-message').textContent = 'Game over';
    //       document.querySelector('.score').textContent = 0;
    //     }

    //     // too low
    //   } else if (guessingNumber < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.guess-message').textContent = 'Слишком мало';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.guess-message').textContent = 'Game over';
    //       document.querySelector('.score').textContent = 0;
    //     }

    // player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    document.body.style.backgroundColor = 'green';
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

againBtn.addEventListener('click', function () {
  document.body.style.backgroundColor = '#000000';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMessage('Начни угадывать!');
});
