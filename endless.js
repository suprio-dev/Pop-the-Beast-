"use strict";

const score = document.querySelector("#score");
const lives = document.querySelector("#lives");

const gameGrid = document.querySelector("#game-grid");
const startBtn = document.querySelector("#start-btn");
const gameStatus = document.querySelector("#game-status");

const holes = document.querySelectorAll(".hole");
const creatures = document.querySelectorAll(".creature");
const resetBtn = document.querySelector("#reset-btn");
const livesOutOverlay = document.querySelector("#lives-out-overlay");
const livesOutScore = document.querySelector("#lives-out-score");
const highScore = document.querySelector("#high-score");
const tag = document.querySelector("#tag");

let scoreCount = 0;
let beast;
let lifeCount = 2;
let beastTime;
let StartClickedCounter = 0;
let displayAnimation = "";
let index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

highScore.textContent = `${Number(localStorage.getItem("endlessBest"))}`;
resetBtn.style.display = "none";

startBtn.addEventListener('click', (e) => {
  startBtn.style.display = "none";
  resetBtn.style.display = "block";
  scoreCount = 0;
  StartClickedCounter = 0;
  lifeCount = 2;
  StartClickedCounter++;

  if (StartClickedCounter === 1) {
    gameStatus.textContent = `Catch it before it escapes!`;

    beast = setInterval(() => {
      beastShow();
    }, 1100);

  } else {

  }
});

index.forEach((holeNumber) => {

  document.querySelector(`[data-index="${holeNumber}"]`).querySelector("div").addEventListener('click', (e) => {

    if (document.querySelector(`[data-index="${holeNumber}"]`).querySelector("div").classList.contains("danger")) {
      lifeCount--;

      if (lifeCount === 0) {
        let finalLivesOutScore = scoreCount;

        if (finalLivesOutScore > Number(highScore.textContent)) {
          localStorage.setItem("personalBest", String(finalLivesOutScore));
          highScore.textContent = `${Number(localStorage.getItem("endlessBest"))}`;
        }

        reset();
        livesOutScore.textContent = `${finalLivesOutScore}`;
        livesOutOverlay.classList.add("show");

        livesOutOverlay.querySelector("button").addEventListener('click', (e) => {
          livesOutOverlay.classList.remove("show");
        });
      }

      lives.innerHTML = `&#x2665; x ${lifeCount}`;

      setTimeout(() => {
        document.querySelector(`[data-index="${holeNumber}"]`).querySelector("div").classList.remove("danger");
      }, 300);
    }
  });

  document.querySelector(`[data-index="${holeNumber}"]`).addEventListener('click', (e) => {

    if (
      document.querySelector(`[data-index="${holeNumber}"]`).classList.contains("active") &&
      document.querySelector(`[data-index="${holeNumber}"]`).querySelector("div").classList.contains("danger") === false
    ) {
      scoreCount++;
      score.textContent = `${scoreCount}`;

      document.querySelector(`[data-index="${holeNumber}"]`).querySelector("div").classList.add("defeated");

      setTimeout(() => {
        document.querySelector(`[data-index="${holeNumber}"]`).querySelector("div").classList.remove("defeated");
      }, 280);
    }
  });
});

function beastShow() {

  let randomIndex = Math.floor(Math.random() * index.length);

  if (Math.random() < 0.09) {
    document.querySelector(`[data-index="${randomIndex}"]`).querySelector("div").classList.add("danger");
  }

  document.querySelector(`[data-index="${randomIndex}"]`).classList.add(`active`);

  beastTime = setInterval(() => {
    document.querySelector(`[data-index="${randomIndex}"]`).classList.remove(`active`);
    clearInterval(beastTime);
  }, 1000);
}

resetBtn.addEventListener('click', (e) => {
  reset();
});

function reset() {
  startBtn.style.display = "block";
  resetBtn.style.display = "none";
  livesOutOverlay.classList.remove("show");

  clearInterval(beast);
  clearInterval(beastTime);

  score.textContent = `0`;
  scoreCount = 0;
  lifeCount = 2;
  lives.innerHTML = `&#x2665; x ${lifeCount}`;
  StartClickedCounter = 0;
  gameStatus.textContent = `Ready? Let's catch this beast.`;

  index.forEach((value) => {
    document.querySelector(`[data-index="${value}"]`).classList.remove(`active`);
  });
}
