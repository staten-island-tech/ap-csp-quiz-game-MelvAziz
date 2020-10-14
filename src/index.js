const DOMSelectors = {
    //encapsulation
    displayContainer: document.querySelector(".container"),
    submitButton: document.querySelector(".submit-btn"),
    startButton: document.querySelector(".start-btn"),
    choiceA: document.querySelector(".choice-1"),
    choiceB: document.querySelector(".choice-2"),
    choiceC: document.querySelector(".choice-3"),
    choiceD: document.querySelector(".choice-4"),
  };

  
const questions = [
    {
        number: 1,
      question: "(Placeholder) Is Africa a Country?",
      choiceOne: "Yes",
      choiceTwo: "No",
      choiceThree: "Maybe",
      choiceFour: "It's a planet",
      correctAnswer: 2,
    },
    {
        number: 2,
      question: "(Placeholder) Who is the President of the United States?",
      choiceOne: "Yes",
      choiceTwo: "No",
      choiceThree: "Hillary Clinton",
      choiceFour: "Karl Marx",
      correctAnswer: 4,
    },
    {
        number: 3,
      question: "(Placeholder) What does USSR stand for?",
      choiceOne: "Understandable Slovenian Slaves in Russia",
      choiceTwo: "United States of America",
      choiceThree: "Democratic Republic of North Korea",
      choiceFour: "China",
      correctAnswer: 2,
    },
  ];

let questionNumber = 0;
console.log(questionNumber);
const init = function () {
    DOMSelectors.submitButton.addEventListener("click", event => {
        DOMSelectors.displayContainer.innerHTML = "";
        questionNumber ++;
        DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
        `<ul class="question_container">
        <h1>Question: ${questions[questionNumber].question}</h1>
        <input type="button" class="choice" id="choice-1" value="${questions[questionNumber].choiceOne}">
        <input type="button" class="choice" id="choice-2" value="${questions[questionNumber].choiceTwo}">
        <input type="button" class="choice" id="choice-3" value="${questions[questionNumber].choiceThree}">
        <input type="button" class="choice" id="choice-4" value="${questions[questionNumber].choiceFour}">
        </ul>
        <input type="button" class="submit-btn btn" value="Submit">`
        
    );

    console.log(questionNumber);
    });

    DOMSelectors.startButton.addEventListener("click", function (e) {
        DOMSelectors.displayContainer.innerHTML = "";
        DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
        `<ul class="question_container">
        <h1>Question: ${questions[0].question}</h1>
        <input type="button" class="choice" id="choice-1" value="${questions[0].choiceOne}">
        <input type="button" class="choice" id="choice-2" value="${questions[0].choiceTwo}">
        <input type="button" class="choice" id="choice-3" value="${questions[0].choiceThree}">
        <input type="button" class="choice" id="choice-4" value="${questions[0].choiceFour}">
        </ul>
        <input type="button" class="submit-btn btn" value="Submit">`
    );
    });



//Placeholder for when we need to change the colour of the answer
    DOMSelectors.choiceA.addEventListener("click", function(e) {
        if (questions[questionNumber].correctAnswer == 1) {
            DOMSelectors.displayContainer.innerHTML = "";
            DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
            `<ul class="question_container">
            <h1>Question: Correct!</h1>
            </ul>
            <input type="button" class="submit-btn btn" value="Continue">`
            );
        } else {
            DOMSelectors.displayContainer.innerHTML = "";
            DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
            `<ul class="question_container">
            <h1>Question: Wrong!</h1>
            </ul>
            <input type="button" class="submit-btn btn" value="Continue">`
            );
        }

    });

    DOMSelectors.choiceB.addEventListener("click", function(e) {
        if (questions[questionNumber].correctAnswer == 2) {
            DOMSelectors.displayContainer.innerHTML = "";
            DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
            `<ul class="question_container">
            <h1>Question: Correct!</h1>
            </ul>
            <input type="button" class="submit-btn btn" value="Continue">`
            );
        } else {
            DOMSelectors.displayContainer.innerHTML = "";
            DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
            `<ul class="question_container">
            <h1>Question: Wrong!</h1>
            </ul>
            <input type="button" class="submit-btn btn" value="Continue">`
            );
        }

    });

    DOMSelectors.choiceC.addEventListener("click", function(e) {
        if (questions[questionNumber].correctAnswer == 3) {
            DOMSelectors.displayContainer.innerHTML = "";
            DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
            `<ul class="question_container">
            <h1>Question: Correct!</h1>
            </ul>
            <input type="button" class="submit-btn btn" value="Continue">`
            );
        } else {
            DOMSelectors.displayContainer.innerHTML = "";
            DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
            `<ul class="question_container">
            <h1>Question: Wrong!</h1>
            </ul>
            <input type="button" class="submit-btn btn" value="Continue">`
            );
        }

    });

    DOMSelectors.choiceD.addEventListener("click", function(e) {
        if (questions[questionNumber].correctAnswer == 4) {
            DOMSelectors.displayContainer.innerHTML = "";
            DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
            `<ul class="question_container">
            <h1>Question: Correct!</h1>
            </ul>
            <input type="button" class="submit-btn btn" value="Continue">`
            );
        }
        else {
            DOMSelectors.displayContainer.innerHTML = "";
            DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin",
            `<ul class="question_container">
            <h1>Question: Wrong!</h1>
            </ul>
            <input type="button" class="submit-btn btn" value="Continue">`
            );
        }

    });
}

init();
