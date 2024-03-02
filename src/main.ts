document.addEventListener("DOMContentLoaded", () => {

  const h1 = document.querySelector('#h1') as HTMLElement;
  const quizCompletedText = document.querySelector('.quizCompletedText') as HTMLElement;
  const quizContainer = document.querySelector('#quizContainer') as HTMLElement;
  const questionText = document.querySelector('#questionText') as HTMLElement;
  const choicesContainer = document.querySelector('#choicesContainer') as HTMLElement;
  const explanationContainer = document.querySelector('#explanationContainer') as HTMLElement;
  const explanationText = document.querySelector('#explanationText') as HTMLElement;
  const nextQuestionButton = document.querySelector('#nextQuestionButton') as HTMLElement;
  const form = document.querySelector('#form') as HTMLFormElement;
  const submit = document.querySelector('#submit') as HTMLElement;
  const startOver = document.querySelector('#startOver') as HTMLElement;

  let currentQuestionIndex: number = 0;
  let selectedChoice: HTMLElement | null = null; // Keeps track of selected choice.
  let isCorrectAnswerSubmitted = false;

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

      // {
      //   question: "Who developed TypeScript?",
      //   choices: ["Brendan Eich", "Microsoft", "Google", "Anders Hejlsberg"],
      //   answer: "Anders Hejlsberg",
      //   explanation: "Good job! TypeScript is a Microsoft product, but the credit goes to Anders Hejlsberg for developing it. Development of TypeScript was announced in October 2012 and its popularity grew rather quickly."
      // },

      // {
      //   question: "What is a major benefit to using TypeScript?",
      //   choices: ["It Works With Any Language", "It's Not Strict", "It's Faster", "It Reduces Bugs And Errors"],
      //   answer: "It Reduces Bugs And Errors",
      //   explanation: "Excellent work! TypeScript is a strongly-typed superset of JavaScript. Due to its static nature and need for exactness, it helps developers catch bugs and errors very quickly, as opposed to vanilla JavaScript that will let many errors slide without notice."
      // },
    ];
  

  function renderQuestion(): void { // This function merely provides a service. Thus, it's output is void.
    selectedChoice = null;

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
    startOver.style.display = "none"; // Button will not appear until the final question has been submitted correctly.
    explanationContainer.style.display = "none"; // Hidden by default -- only appears when the correct answer is submitted.
    explanationText.textContent = ""; // Set to blank/empty by default.
    nextQuestionButton.style.display = "none"; // Button does not appear until the question is answered/submitted.
  }

  
  function handleChoiceClick(clickedButton: HTMLElement): void { // This function merely provides a service. Thus, it's output is void.
    removeEffects();
    
    clickedButton.classList.add('selection');
    selectedChoice = clickedButton; // Tracks the selected choice.
  }
  

  function removeEffects(): void { // This function merely provides a service. Thus, it's output is void.
    const buttons = document.querySelectorAll('.choiceButtons'); // This is not re-declaring 'choiceButtons'. It is simply gathering any buttons that have that class identification.
    buttons.forEach((button) => {
      if (button instanceof HTMLElement) {
        button.classList.remove('selection', 'correct', 'incorrect');
      }
    })
  }
  

  function disableChoiceButtons(correctButton): void {
    const buttons = document.querySelectorAll('.choiceButtons');
    buttons.forEach(button => {
      button.classList.add('disabled');

      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevents the click event from propagating further up the event list.
      }, true); // Ensures this runs before any other click listeners.

      if (button === correctButton) {
        button.classList.remove('disabled');
      }
    });
  }

  
  form.addEventListener('click', (e) => {
    e.preventDefault();

    if (!selectedChoice) {
      alert("Please select a choice.");
      return;
    }

    const currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at idex 0 -- the first set.
    const choiceText = selectedChoice.textContent; // Obtains the text content from the clicked button.

      if (choiceText === currentQuestion.answer) {
      console.log("Good!");
        selectedChoice.classList.replace('selection', 'correct');
        explanationContainer.style.display = "block";
        explanationText.textContent = currentQuestion.explanation;
        nextQuestionButton.style.display = "block";
        isCorrectAnswerSubmitted = true;
        submit.style.display = "none";
        disableChoiceButtons(selectedChoice);

    } else {
        console.log("Wrong.");
      selectedChoice.classList.replace('selection', 'incorrect');
    }
  })


  nextQuestionButton.addEventListener('click', (e) => {

    if (currentQuestionIndex < questionsChoicesAnswers.length - 1 && isCorrectAnswerSubmitted === true) { // The '-1' will prevent it from incrementing beyond the length of the array.
      currentQuestionIndex++;
      renderQuestion();
      submit.style.display = "block";

    } else {
      // Completed.
      h1.style.display = "none";
      quizCompletedText.style.display = "block";
      // quizCompletedText.classList.add('quizCompletedText');
      startOver.style.display = "block";
      quizContainer.style.display = "none";
      choicesContainer.innerHTML = ""; // No choices to list.
      explanationContainer.style.display = "none";
      explanationText.textContent = ""; // No questions to explain.
      nextQuestionButton.style.display = "none"; // No need for a next button.
    }
  })


  startOver.addEventListener('click', (e) => {
    quizCompletedText.style.display = "none";
    h1.style.display = "block";
    currentQuestionIndex = 0;
    renderQuestion();
    quizContainer.style.display = "block";
    submit.style.display = "block";
  })

  renderQuestion(); // Initial rendering.

////////////////////
})
