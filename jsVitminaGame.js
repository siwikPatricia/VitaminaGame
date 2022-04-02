"use strict";
//selecting elements
const start = document.querySelector(".info");
const btnStartGame = document.querySelector(".startGame");
const get = document.querySelector(".getAktual");
const getVitamin = document.querySelector(".vitamin");
const gameVitamin = document.querySelector(".gameVitamin");
const gameOver = document.querySelector(".gameOver");
const topScore = document.querySelector("#topScore");
const currentScore = document.getElementById("score");
const btnNew = document.querySelector(".btnNew");
const btnInfo = document.querySelector(".btnInfo");
const life1 = document.querySelector(".life1");
const life2 = document.querySelector(".life2");
const life3 = document.querySelector(".life3");
let interval1 = "";
let interval2 = "";

let AktuelVitamin;
let AktuelGameVitamin;
let current = 0;
let playing = true;
topScore.textContent = 0;
currentScore.textContent = 0;
start.classList.remove("hidden");

const playingDone = function () {
  clearInterval(interval1);
  clearInterval(interval2);
  currentScore.textContent = 0;
};
const getStarted = function () {
  AktuelVitamin = Math.trunc(Math.random() * 10) + 1;
  getVitamin.src = `vitamin-${AktuelVitamin}.png`;
  return AktuelVitamin;
};
AktuelVitamin = getStarted();
const gameVitaminChange = function () {
  AktuelGameVitamin = Math.trunc(Math.random() * 10) + 1;
  gameVitamin.src = `vitamin-${AktuelGameVitamin}.png`;
  return AktuelGameVitamin;
};
AktuelGameVitamin = gameVitaminChange();

btnStartGame.addEventListener("click", function () {
  getStarted();
  gameVitaminChange();
  interval1 = setInterval(getStarted, 5000);
  interval2 = setInterval(gameVitaminChange, 700);
  start.classList.add("hidden");
});

gameVitamin.addEventListener("click", function () {
  if (AktuelVitamin !== AktuelGameVitamin) {
    //life minus
    if (life1.src.indexOf("life-2.png") != -1) {
      life1.src = "life-1.png";
    } else if (life1.src.indexOf("life-1.png") != -1) {
      life1.src = "life-0.png";
    } else if (life2.src.indexOf("life-2.png") != -1) {
      life2.src = "life-1.png";
    } else if (life2.src.indexOf("life-1.png") != -1) {
      life2.src = "life-0.png";
    } else if (life3.src.indexOf("life-2.png") != -1) {
      life3.src = "life-1.png";
    } else {
      gameOver.classList.remove("hidden");
      playingDone();
      topScore.textContent = current;
      currentScore.textContent = 0;
      current = 0;
    }
  } else {
    current++;
    currentScore.textContent = current;
  }
});

btnNew.addEventListener("click", function () {
  clearInterval(interval1);
  clearInterval(interval2);
  getStarted();
  gameVitaminChange();
  start.classList.add("hidden");
  gameOver.classList.add("hidden");
  currentScore.textContent = 0;
  life1.src = "life-2.png";
  life2.src = "life-2.png";
  life3.src = "life-2.png";
  interval1 = setInterval(getStarted, 5000);
  interval2 = setInterval(gameVitaminChange, 700);
});
btnInfo.addEventListener("click", function () {
  start.classList.remove("hidden");
});
/*if (current <= 10) {
      setInterval(gameVitaminChange, 1200);
      console.log("1200");
    } else if (current <= 15) {
      setInterval(gameVitaminChange, 1000);
      console.log("1000");
    } else {
      setInterval(gameVitaminChange, 700);
      console.log("700");
    }
  }*/
