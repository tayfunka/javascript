"use strict";

// ELEMENTS
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, current_score, active_player, playing;

const init = function () {
    scores = [0, 0];
    current_score = 0;
    active_player = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
};

init();

const switch_player = function () {
    document.getElementById(`current--${active_player}`).textContent = 0;
    current_score = 0;
    active_player = active_player === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};

// Rolling dice
btnRoll.addEventListener("click", function () {
    diceEl.classList.remove("hidden");
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            current_score += dice;
            document.getElementById(`current--${active_player}`).textContent =
                current_score;
        } else {
            switch_player();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (playing) {
        scores[active_player] += current_score;
        document.getElementById(`score--${active_player}`).textContent =
            scores[active_player];

        if (scores[active_player] >= 20) {
            playing = false;
            diceEl.classList.add("hidden");
            document
                .querySelector(`.player--${active_player}`)
                .classList.add("player--winner");
            document
                .querySelector(`.player--${active_player}`)
                .classList.remove("player--active");
        } else {
            switch_player();
        }
    }
});

btnNew.addEventListener("click", init);
