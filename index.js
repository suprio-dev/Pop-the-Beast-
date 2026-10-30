const instructionsBtn = document.querySelector("#instructions-btn");
const instructionsOverlay = document.querySelector("#instructions-overlay");
const instructionsClose = document.querySelector("#instructions-close");
const guideDone = document.querySelector("#guide-done");

instructionsBtn.addEventListener('click',(e)=>{
  instructionsOverlay.classList.add("show");
})

instructionsClose.addEventListener('click',(e)=>{
  instructionsOverlay.classList.remove("show");
})

guideDone.addEventListener('click',(e)=>{
  instructionsOverlay.classList.remove("show");
})