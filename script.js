const ball = document.querySelector(".ball-img img");
const input = document.querySelector(".question-area input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

//list of answers
const listAnswers = [
  "nie chcesz znać odpowiedzi na to pytanie ../",
  "Tak!",
  "Nie!",
  "Może!",
  "Zapytaj mamę!",
  "Przyszłość pokaże",
  "W książce ostatniej odpowiedzi znajdziesz!",
  "Wódka ma moc jednak w bimbrze potęge znajdziesz",
  "Pewnie jutro",
  "To się nie może wydać!",
];

const showAnswer = () => {
  //index of answer showed on screen
  const index = Math.floor(Math.random() * listAnswers.length);
  //hide error
  error.textContent = "";
  //show answer
  answer.innerHTML = `<span>Odpowiedź: ${listAnswers[index]}</span>`;
};

const generateAnswer = () => {
  //checking if input is blank
  if (input.value === "") {
    error.textContent = "Musisz zadać pytanie!";
    //checking in question is ended with question mark
  } else if (input.value.slice(-1) !== "?") {
    error.textContent = "Pytanie musi kończyć się znakiem zapytania '?'";
  } else {
    //trigering show answer function
    showAnswer();
  }
};

ball.addEventListener("click", () => {
  //shaking ball see css
  ball.classList.toggle("shake-animation");
  //main function
  generateAnswer();
});
