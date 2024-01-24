'use strict';

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secret_number);

const display_message = function (message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        display_message('⛔️ no number!');
    } else if (guess === secret_number) {
        display_message('🏆 correct number!');
        document.querySelector('.number').textContent = secret_number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secret_number) {
        if (score > 1) {
            display_message(
                guess < secret_number ? '📉 too low' : '📈 too high'
            );
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            display_message('you lost the game');
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secret_number = Math.trunc(Math.random() * 20) + 1;
    console.log(secret_number);
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    display_message('start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
