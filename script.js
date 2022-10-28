const ball = document.querySelector(".ball-img img");
const input = document.querySelector(".question-area input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

ball.addEventListener("click", () => {
  ball.classList.toggle("shake-animation");
});
