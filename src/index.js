const DOMSelectors = {
  displayContainer: document.querySelector(".container"),
  startButton: document.querySelector(".start-btn"),
  retryButton: document.querySelector(".retry-btn"),
};

const questions = [
  {
    number: 0,
    question: "Who is the only US President to have served more than two Terms?",
    choiceOne: "FDR",
    choiceTwo: "LBJ",
    choiceThree: "George Washington",
    choiceFour: "JFK",
    correctAnswer: 0,
  },
  {
    number: 1,
    question: "In what year did Hitler become Chanceller of Germany?",
    choiceOne: "1917",
    choiceTwo: "1933",
    choiceThree: "1939",
    choiceFour: "1945",
    correctAnswer: 1,
  },
  {
    number: 2,
    question: "Which of the following leaders was NOT elected",
    choiceOne: "Hitler",
    choiceTwo: "Mousollini",
    choiceThree: "Stalin",
    choiceFour: "Franklin D. ROosevelt",
    correctAnswer: 2,
  },
  {
    number: 3,
    question: "What was the policy taken by Great Britain and France in response to Hitler's advances the 1930's known as?",
    choiceOne: "Imperialism",
    choiceTwo: "Globalism",
    choiceThree: "Mercantilism",
    choiceFour: "Appeasement",
    correctAnswer: 3,
  },
  {
    number: 4,
    question: "What event caused the US to enter the Second World War?",
    choiceOne: "Pearl Harbour",
    choiceTwo: "Zimmerman Telegram",
    choiceThree: "Hindenburg Explosion",
    choiceFour: "D-Day",
    correctAnswer: 0,
  },
  {
    number: 5,
    question: "What demilitarized zone did Hitler fortify in the months leading up the war?",
    choiceOne: "Sudetenland",
    choiceTwo: "Rhineland",
    choiceThree: "Nuremburg",
    choiceFour: "Normandy",
    correctAnswer: 1,
  },
  {
    number: 6,
    question: "What unfair treaty paved the way for Hitler's rise to power and the Nazi popularity?",
    choiceOne: "Conference of Berlin",
    choiceTwo: "The Treaty of Paris",
    choiceThree: "The Treaty of Versailles",
    choiceFour: "The Conference of Rome",
    correctAnswer: 2,
  }
];

(function init() {
  submitButton = "";
  questionNumber = 0;
  correctAnswers = 0;
  DOMSelectors.startButton.addEventListener("click", function (e) {
    DOMSelectors.displayContainer.innerHTML = "";
    DOMSelectors.displayContainer.insertAdjacentHTML(
      "afterbegin",
      `<ul class="question_container">
        <h1>Correct:${correctAnswers}/${questions.length}</h1>
        <h1>${questions[questionNumber].question}</h1>
        <input type="button" class="choice" id="choice-0" value="${questions[questionNumber].choiceOne}">
        <input type="button" class="choice" id="choice-1" value="${questions[questionNumber].choiceTwo}">
        <input type="button" class="choice" id="choice-2" value="${questions[questionNumber].choiceThree}">
        <input type="button" class="choice" id="choice-3" value="${questions[questionNumber].choiceFour}">
        </ul>
        <input type="button" class="submit-btn btn" value="Submit">`
    );
  });
  document.addEventListener("click", function (e) {
    if (e.target.id == "choice-0") {
      console.log("The first choice was selected.");
      answer = 0;
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.id == "choice-1") {
      console.log("The second choice was selected.");
      answer = 1;
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.id == "choice-2") {
      console.log("The third choice was selected.");
      answer = 2;
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.id == "choice-3") {
      console.log("The fourth choice was selected.");
      answer = 3;
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.id == "retry") {
      location.reload();
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.className == "submit-btn btn") {
      console.log("The submit button was pressed.");
      if (typeof answer == "undefined") {
        alert("YOU MUST SELECT AN ANSWER! DO IT!!!");
        console.log("no answer has been selected");
      } else {
        console.log(`Answer ${answer} was selected.`);
        if (answer == questions[questionNumber].correctAnswer) {
          correctAnswers++;
        }
        if (questionNumber < questions.length - 1) {
          questionNumber++;
          answer = undefined;
          DOMSelectors.displayContainer.innerHTML = "";
          DOMSelectors.displayContainer.insertAdjacentHTML(
            "afterbegin",
            `<ul class="question_container">
              <h1>${correctAnswers}/${questions.length}</h1>
              <h1>${questions[questionNumber].question}</h1>
              <input type="button" class="choice" id="choice-0" value="${questions[questionNumber].choiceOne}">
              <input type="button" class="choice" id="choice-1" value="${questions[questionNumber].choiceTwo}">
              <input type="button" class="choice" id="choice-2" value="${questions[questionNumber].choiceThree}">
              <input type="button" class="choice" id="choice-3" value="${questions[questionNumber].choiceFour}">
              </ul>
              <input type="button" class="submit-btn btn" value="Submit">`
          );
        } else {
          console.log("The quiz is now over.");
          DOMSelectors.displayContainer.innerHTML = "";
          DOMSelectors.displayContainer.insertAdjacentHTML(
            "afterbegin",
            `<h1>You have Completed the WW2 Quiz!</h1>
            <h1>You got ${correctAnswers} out of ${questions.length} questions correct!</h1>
            <input type="button" class="retry-btn btn" id="retry" value="Try Again?">`
          );
        }
      }
    }
  });
})();


