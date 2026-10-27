const score = document.querySelector("#score");
const timer = document.querySelector("#timer");
const lives = document.querySelector("#lives");

const gameGrid = document.querySelector("#game-grid");
const startBtn = document.querySelector("#start-btn");
const gameStatus = document.querySelector("#game-status");

const holes = document.querySelectorAll(".hole");
const creatures = document.querySelectorAll(".creature");
const resetBtn = document.querySelector("#reset-btn");
let scoreCount = 0;
let timeCount = 30;
let time;
let beast;
let beastTime;
let index = [0, 1, 2, 3, 4, 5, 6, 7, 8];

startBtn.addEventListener('click', (e) => {
  time = setInterval(() => {
    timeCount--;
    if (timeCount === 0) {
      clearInterval(beast);
      clearInterval(time);
    }

    timer.textContent = `${timeCount}`;

  }, 1000);


  beast = setInterval(() => {
    beastShow();
  }, 1400);




})

index.forEach((holeNumber) => {
  document.querySelector(`[data-index="${holeNumber}"]`).addEventListener('click', (e) => {
    if (document.querySelector(`[data-index="${holeNumber}"]`).classList.contains("active")) {
      scoreCount++;
      score.textContent = `${scoreCount}`;
      document.querySelector(`[data-index="${holeNumber}"]`).querySelector("div").classList.add("defeated");
      setTimeout(() => {
        document.querySelector(`[data-index="${holeNumber}"]`).querySelector("div").classList.remove("defeated");
      }, 400);


    }

  })
})






function beastShow() {

  let randomIndex = Math.floor(Math.random() * index.length);
  document.querySelector(`[data-index="${randomIndex}"]`).classList.add(`active`);
  beastTime = setInterval(() => {
    document.querySelector(`[data-index="${randomIndex}"]`).classList.remove(`active`);
    clearInterval(beastTime);
  }, 1000);

}


resetBtn.addEventListener('click', (e) => {
  clearInterval(beast);
  clearInterval(time);
  clearInterval(beastTime);
  timer.textContent = `30`;
  score.textContent = `0`;
  scoreCount = 0;
  timeCount = 30;
  index.forEach((value)=>{
    document.querySelector(`[data-index="${value}"]`).classList.remove(`active`);
  })
})