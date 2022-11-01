var startButton = document.getElementById(`start-btn`);
var introPage = document.querySelector(`.intro`);
var contentPage = document.querySelector(`.content`);
var answerButton1 = document.getElementById(`answer-btn1`);
var answerButton2 = document.getElementById(`answer-btn2`);
var answerButton3 = document.getElementById(`answer-btn3`);
var answerButton4 = document.getElementById(`answer-btn4`);
var finishPage = document.querySelector(`.finish-page`);
var highScoresPage = document.querySelector(`.high-scores`);
var questionElement = document.getElementById(`question`);
var submitButton = document.getElementById(`submit-btn`);
var timerEl = document.getElementById(`timer`);
var timeLeft = 50;
var questionIndex = 0;
var scoreIndex = 0;

startButton.addEventListener(`click`, startGame);
answerButton1.addEventListener(`click`, selectAnswer);
answerButton2.addEventListener(`click`, selectAnswer);
answerButton3.addEventListener(`click`, selectAnswer);
answerButton4.addEventListener(`click`, selectAnswer);

function startGame() {
  //console.log("start");
  startButton.classList.add(`hidden`);
  introPage.classList.add(`hidden`);
  contentPage.classList.remove(`hidden`);
  setTime();
  showQuestion();
}

function showQuestion() {
  if (questionIndex < 5) {
    questionElement.textContent = questionList[questionIndex].question;
    answerButton1.textContent = questionList[questionIndex].answers[0].text;
    answerButton2.textContent = questionList[questionIndex].answers[1].text;
    answerButton3.textContent = questionList[questionIndex].answers[2].text;
    answerButton4.textContent = questionList[questionIndex].answers[3].text;
  } else {
    contentPage.classList.add(`hidden`);
    finishPage.classList.remove(`hidden`);
  }
}

function selectAnswer(event) {
  var element = event.target;

  answerButton1.setAttribute(
    "data-value",
    questionList[questionIndex].answers[0].correct
  );
  answerButton2.setAttribute(
    "data-value",
    questionList[questionIndex].answers[1].correct
  );
  answerButton3.setAttribute(
    "data-value",
    questionList[questionIndex].answers[2].correct
  );
  answerButton4.setAttribute(
    "data-value",
    questionList[questionIndex].answers[3].correct
  );

  var answerSelected = element.getAttribute("data-value");
  console.log(answerSelected);
  if (answerSelected === "true") {
    questionIndex++;
    scoreIndex += timeLeft;
    console.log(scoreIndex);
    return showQuestion();
  } else if (answerSelected === "false") {
    timeLeft -= 10;
  } else {
    return;
  }
}

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
      { text: `Object-Oriented`, correct: `true` },
      { text: `Object-Based`, correct: "false" },
      { text: `Procedural`, correct: "false" },
      { text: `None of the above`, correct: "false" },
    ],
  },
  {
    question: `Which of the following keywords is used to define a variable in Javascript?`,
    answers: [
      { text: `var`, correct: "false" },
      { text: `let`, correct: "false" },
      { text: `Both A and B`, correct: "true" },
      { text: `None of the above`, correct: "false" },
    ],
  },
  {
    question: `Upon encountering empty statements, what does the Javascript Interpreter do?`,
    answers: [
      { text: `Gives an error`, correct: "false" },
      { text: `Ignores the statements`, correct: "true" },
      { text: `Gives a warning`, correct: "false" },
      { text: `None of the above`, correct: "false" },
    ],
  },
  {
    question: `Which of the following methods can be used to display data in some form using Javascript?`,
    answers: [
      { text: `document.write()`, correct: "false" },
      { text: `console.log()`, correct: "false" },
      { text: `window.alert()`, correct: "false" },
      { text: `All of the above`, correct: "true" },
    ],
  },
  {
    question: `What is the function of console.log()?`,
    answers: [
      {
        text: `Display the messages on the console`,
        correct: "true",
      },
      { text: `Do mathematics logarithm function`, correct: "false" },
      { text: `function for debug`, correct: "false" },
      { text: `None of the above`, correct: "false" },
    ],
  },
];
