const DOMSelectors = {
  displayContainer: document.querySelector(".container"),
  startButton: document.querySelector(".start-btn"),
};
submitButton = "";
const questions = [
  {
    number: 0,
    question: "(Placeholder) Is Africa a Country?",
    choiceOne: "Yes",
    choiceTwo: "No",
    choiceThree: "Maybe",
    choiceFour: "It's a planet",
    correctAnswer: 1,
  },
  {
    number: 1,
    question: "(Placeholder) Who is the President of the United States?",
    choiceOne: "Yes",
    choiceTwo: "Politics is the mind killer",
    choiceThree: "Hillary Clinton",
    choiceFour: "Karl Marx",
    correctAnswer: 1,
  },
  {
    number: 2,
    question: "Neal Stephenson?",
    choiceOne: "Author",
    choiceTwo: "Politician",
    choiceThree: "Scientist",
    choiceFour: "Historian",
    correctAnswer: 0,
  },
];

let questionNumber = 0;
let correctAnswers = 0;

const init = function () {
  DOMSelectors.startButton.addEventListener("click", function (e) {
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
    if (e.target.className == "submit-btn btn") {
      console.log("The submit button was pressed.");
      if (typeof answer == "undefined") {
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
            `<h1>The quiz is now over.</h1>
            <h1>${correctAnswers}/${questions.length}</h1>`
          );
        }
      }
    }
  });
};

init();
