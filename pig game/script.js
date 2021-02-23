"use strict";

const newGame = document.querySelector(".new-game");
const rollDicebtn = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const player = document.querySelectorAll(".player");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

let score1 = document.querySelector(".score-1");
let score2 = document.querySelector(".score-2");

let currentScore1 = document.querySelector(".current-score-1");
let currentScore2 = document.querySelector(".current-score-2");
let player1Name = document.querySelector(".player-1-h2");
let player2Name = document.querySelector(".player-2-h2");

let dice = document.querySelector(".dice-img");
console.log(dice);
let diceNum;
let score1Text = 0;
let score2Text = 0;
let num1 = 0;
let num2 = 0;
console.log(player1Name.textContent);

const rollDice = () => {
  diceNum = Math.floor(Math.random() * 6) + 1;
};

rollDicebtn.addEventListener("click", () => {
  if (score1Text <= 100 && score2Text <= 100) {
    rollDice();
    dice.src = `dice-${diceNum}.png`;
    if (player1.classList.contains("active")) {
      num1 += diceNum;
      currentScore1.textContent = num1;

      if (diceNum === 1) {
        num1 = 0;
        currentScore1.textContent = 0;
        player1.classList.remove("active");
        player2.classList.add("active");
      }
    } else {
      num2 += diceNum;
      currentScore2.textContent = num2;
      if (diceNum === 1) {
        num2 = 0;
        currentScore2.textContent = 0;
        player2.classList.remove("active");
        player1.classList.add("active");
      }
    }
  }
});
hold.addEventListener("click", () => {
  if (player1.classList.contains("active")) {
    score1Text += num1;
    score1.textContent = score1Text;
    num1 = 0;
    currentScore1.textContent = 0;
    player1.classList.remove("active");
    player2.classList.add("active");
    if (score1Text >= 100) {
      player1Name.textContent = "You won";
      player1.classList.add("active");
      player2.classList.remove("active");
    }
  } else {
    score2Text += num2;
    score2.textContent = score2Text;
    num2 = 0;
    currentScore2.textContent = 0;
    player2.classList.remove("active");
    player1.classList.add("active");
    if (score2Text >= 100) {
      player2Name.textContent = "You won";
      player2.classList.add("active");
      player1.classList.remove("active");
    }
  }
});
newGame.addEventListener("click", () => {
  score1.textContent = "0";
  score2.textContent = "0";
  score1Text = 0;
  score2Text = 0;
  player1.classList.add("active");
  player2.classList.remove("active");
});
