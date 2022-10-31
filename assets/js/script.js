var startButton = document.getElementById(`start-btn`);
var introPage = document.querySelector(`.intro`);
var contentPage = document.querySelector(`.content`);
var answerButton = document.getElementById(`answer-btn`);
var finishPage = document.querySelector(`.finish-page`);
var highScoresPage = document.querySelector(`.high-scores`);
var questionElement = document.getElementById(`question`);
var submitButton = document.getElementById(`submit-btn`);
var timerEl = document.getElementById(`timer`);
var timeLeft = 1000000;
var questionIndex = 0;

startButton.addEventListener(`click`, startGame);
answerButton.addEventListener(`click`, selectAnswer);

function startGame() {
  //console.log("start");
  startButton.classList.add(`hidden`);
  introPage.classList.add(`hidden`);
  contentPage.classList.remove(`hidden`);
  setTime();
  showQuestion();
}

function showQuestion() {
  questionElement.textContent = questionList[questionIndex].question;
  //answerButton.textContent = questionList[questionIndex].answers;
  questionIndex++;
}

function selectAnswer() {}

function setTime() {
  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timeLeft--;
      timerEl.textContent = `Time: ` + timeLeft;
    } else {
      timerEl.textContent = ``;
      clearInterval(timeInterval);
      contentPage.classList.add(`hidden`);
      finishPage.classList.remove(`hidden`);
    }
  }, 1000);
}

function submitName() {}

function storeName() {}

function showName() {}

var questionList = [
  {
    question: `Javascript is an _______ language?`,
    answers: [
      { text: `Object-Oriented`, correct: true },
      { text: `Object-Based`, correct: false },
      { text: `Procedural`, correct: false },
      { text: `None of the above`, correct: false },
    ],
  },
  {
    question: `Which of the following keywords is used to define a variable in Javascript?`,
    answers: [
      { text: `var`, correct: false },
      { text: `let`, correct: false },
      { text: `Both A and B`, correct: true },
      { text: `None of the above`, correct: false },
    ],
  },
  {
    question: `Upon encountering empty statements, what does the Javascript Interpreter do?`,
    answers: [
      { text: `Gives an error`, correct: false },
      { text: `Ignores the statements`, correct: true },
      { text: `Gives a warning`, correct: false },
      { text: `None of the above`, correct: false },
    ],
  },
  {
    question: `Which of the following methods can be used to display data in some form using Javascript?`,
    answers: [
      { text: `document.write()`, correct: false },
      { text: `console.log()`, correct: false },
      { text: `window.alert()`, correct: false },
      { text: `All of the above`, correct: true },
    ],
  },
  {
    question: `What is the function of console.log()?`,
    answers: [
      {
        text: `Display the messages on the console`,
        correct: true,
      },
      { text: `Do mathematics logarithm function`, correct: false },
      { text: `function fir debug`, correct: false },
      { text: `None of the above`, correct: false },
    ],
  },
];
