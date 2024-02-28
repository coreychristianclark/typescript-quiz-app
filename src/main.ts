document.addEventListener("DOMContentLoaded", () => {

  const questionText = document.querySelector('#questionText') as HTMLElement;
  const choicesContainer = document.querySelector('#choicesContainer') as HTMLElement;
  const explanationText = document.querySelector('#explanationText') as HTMLElement;
  const nextQuestion = document.querySelector('#nextQuestion') as HTMLElement;
  const form = document.querySelector('#form') as HTMLFormElement;
  const explanationText = document.querySelector('#explanationText') as HTMLElement;

  let currentQuestionIndex: number = 0;
  let selectedChoice: HTMLElement | null = null; // Keeps track of selected choice.

  type QuestionChoiceAnswer = { // Always remember to capitalize.
    question: string,
    choices: string[],
    answer: string,
    explanation: string;
}

  const questionsChoicesAnswers: QuestionChoiceAnswer[] =
    [
      {
        question: "Can browsers interpret TypeScript alone?",
        choices: ["Yes", "Only Google Chrome Can", "No", "Only FireFox Can"],
        answer: "No",
        explanation: "Correct! TypeScript alone cannot be understood by web browsers. TypeScript needs to be transpiled (converted) into JavaScript because a web browser can execute it."
      },

      {
        question: "Who developed TypeScript?",
        choices: ["Brendan Eich", "Microsoft", "Google", "Anders Hejlsberg"],
        answer: "Anders Hejlsberg",
        explanation: "Good job! TypeScript is a Microsoft product, but the credit goes to Anders Hejlsberg for developing it. Development of TypeScript was announced in October 2012 and its popularity grew rather quickly."
      },

      {
        question: "What is a major benefit to using TypeScript?",
        choices: ["It Works With Any Language", "It's Not Strict", "It's Faster", "It Reduces Bugs And Errors"],
        answer: "It Reduces Bugs And Errors",
        explanation: "Excellent work! TypeScript is a strongly-typed superset of JavaScript. Due to its static nature and need for exactness, it helps developers catch bugs and errors very quickly, as opposed to vanilla JavaScript that will let many errors slide without notice."
      },
    ];
  

  function renderQuestion(): void { // This function merely provides a service. Thus, it's output is void.
    const currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at index 0 -- the first set.
    questionText.textContent = currentQuestion.question; // Pulls the text from the 'question' category of the current index of the array.

    choicesContainer.innerHTML = ""; 
    currentQuestion.choices.forEach((choice) => {
      const choiceButtons = document.createElement('button');
      choiceButtons.textContent = choice;
      choiceButtons.className = 'choiceButtons';
      choiceButtons.addEventListener('click', function (this: HTMLButtonElement) { // 'this' being the HTML button element.
        handleChoiceClick(this);
      });
      choicesContainer.appendChild(choiceButtons);
      choiceButtons.style.display = "block";
    })

    explanationText.textContent = ""; // Set to blank/empty by default.
    nextQuestion.style.display = "block"; // Button does not appear until the question is answered/submitted.
///////////////////////// *********change display to "none" when done!*************
  }


  function removeEffects(): void { // This function merely provides a service. Thus, it's output is void.
    const buttons = document.querySelectorAll('.choiceButtons'); // This is not re-declaring 'choiceButtons'. It is simply gathering any buttons that have that class identification.
    buttons.forEach((button) => {
      if (button instanceof HTMLElement) {
        button.classList.remove('selection', 'correct', 'incorrect');
      }
    })
}

  
  function handleChoiceClick(clickedButton: HTMLElement): void { // This function merely provides a service. Thus, it's output is void.
    removeEffects();
    
    clickedButton.classList.add('selection');
    selectedChoice = clickedButton; // Tracks the selected choice.
 }

  
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!selectedChoice) {
      console.log("Please select a choice."); // *****Turn into an alert later.*****
      return;
    }

    const currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at idex 0 -- the first set.
    const choiceText = selectedChoice.textContent; // Obtains the text content from the clicked button.

      if (choiceText === currentQuestion.answer) {
      console.log("Good!");
        selectedChoice.classList.replace('selection', 'correct');
        explanationText.textContent = currentQuestion.explanation;
    } else {
      console.log("Wrong.");
      selectedChoice.classList.replace('selection', 'incorrect');
    }



      if (currentQuestionIndex < questionsChoicesAnswers.length) {
    } else {
      // // Completed. All questions answered.
      // questionText.textContent = "Quiz complete!";
      // choicesContainer.innerHTML = ""; // No choices to list.
      // explanationText.textContent = ""; // No questions to explain.
      // nextQuestion.style.display = "none"; // No need for a next button.
    }

    // renderQuestion();
  })

  nextQuestion.addEventListener('click', (e) => {

    if (currentQuestionIndex < questionsChoicesAnswers.length) {
      renderQuestion();
    } else {
      // Completed. All questions answered.
      questionText.textContent = "Quiz complete!";
      choicesContainer.innerHTML = ""; // No choices to list.
      explanationText.textContent = ""; // No questions to explain.
      nextQuestion.style.display = "none"; // No need for a next button.
    }
  })

  renderQuestion(); // Initial rendering.

////////////////////
})
