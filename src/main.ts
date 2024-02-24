document.addEventListener("DOMContentLoaded", () => {

  const questionText = document.querySelector('#questionText');
  const choicesContainer = document.querySelector('#choicesContainer');
  const explanationText = document.querySelector('#explanationText');
  const nextQuestion = document.querySelector('#nextQuestion') as HTMLElement;
  const form = document.querySelector('#form');

  const questionsChoicesAnswers =
    [
      {
        question: "Can browsers interpret TypeScript alone?",
        choices: ["Yes", "Only Google Chrome Can", "No", "Only FireFox Can"],
        answer: "No"
      },

      {
        question: "Who developed TypeScript?",
        choices: ["Brendan Eich", "Microsoft", "Google", "Apple"],
        answer: "Microsoft"
      },

      {
        question: "What is a major benefit to using TypeScript?",
        choices: ["It Works With Any Language", "It's Not Strict", "It's Faster", "It Reduces Bugs And Errors"],
        answer: "It Reduces Bugs And Errors"
      },
    ];
  
  let currentQuestionIndex: number = 0;



  function renderQuestion() {
    const currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at index 0 -- the first set.
    questionText.textContent = currentQuestion.question; // Pulls the text from the 'question' category of the current index of the array.

    choicesContainer.innerHTML = ""; 
    currentQuestion.choices.forEach((choice) => {
      const choiceButtons = document.createElement('button');
      choiceButtons.textContent = choice;
      choiceButtons.className = 'choiceButtons';
      choiceButtons.addEventListener('click', function() {handleChoiceClick(this)}); // 'this' being the HTML button element.
      choicesContainer.appendChild(choiceButtons);
          // choiceButtons.style.display = "block"
    })

    explanationText.textContent = ""; // Set to blank/empty by default.
    nextQuestion.style.display = "block"; // Button does not appear until the question is answered/submitted.
///////////////////////// change display to "none" when done!
  }

  function removeEffects() {
    const buttons = document.querySelectorAll('.choiceButtons'); // This is not re-declaring 'choiceButtons'. It is simply gathering any buttons that have that class identification.
    buttons.forEach((button) => {
      button.classList.remove('selection', 'correct', 'incorrect');
    })
}


  
  function handleChoiceClick(clickedButton) {
        removeEffects();

    let clickedElement = clickedButton as HTMLElement;
    let choiceText = clickedButton.textContent; // Obtains the text content from the clicked button.
    const currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at idex 0 -- the first set.

    clickedElement.classList.add('selection');


    if (choiceText === currentQuestion.answer) {
      console.log("Good!");
      clickedElement.classList.add('correct');
    } else {
      console.log("Wrong.");
      clickedElement.classList.add('incorrect');
    }


    if (currentQuestionIndex < questionsChoicesAnswers.length) {
      // renderQuestion();
    } else {
      // Completed. All questions answered.
      questionText.textContent = "Quiz complete!";
      choicesContainer.innerHTML = ""; // No choices to list.
      explanationText.textContent = ""; // No questions to explain.
      nextQuestion.style.display = "none"; // No need for a next button.
    }
  }

  renderQuestion(); // Initial rendering.
////////////////////
});
