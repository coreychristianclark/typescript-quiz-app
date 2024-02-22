document.addEventListener("DOMContentLoaded", () => {

  const questionText = document.querySelector('#questionText');
  const choicesContainer = document.querySelector('#choicesContainer');
  const explanationText = document.querySelector('#explanationText');
  const nextQuestion = document.querySelector('#nextQuestion') as HTMLElement;

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

  // let clickedElement: HTMLElement;
  // let selectedChoice: string | null = null;

  // function removeEffects() {
  //   choice.forEach((choice) => {
  //     choice.classList.remove('selection', 'correct', 'incorrect');
  //   })
  // }

  function renderQuestion() {
    const currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at index 0 -- the first set.
    questionText.textContent = currentQuestion.question; // Pulls the text from the 'question' category of the current index of the array.

    choicesContainer.innerHTML = ""; 
    currentQuestion.choices.forEach((choice, index) => {
      const choiceButton = document.createElement('button');
      choiceButton.textContent = choice;
      choiceButton.addEventListener('click', () => handleChoiceClick(choice));
      choicesContainer.appendChild(choiceButton);
    })

    explanationText.textContent = ""; // Set to blank/empty by default.
    nextQuestion.style.display = "none"; // Button does not appear until the question is answered/submitted.

  }
  
  // choice.forEach((choice) => {
  //   choice.addEventListener('click', (e) => {
  //     e.stopPropagation();      
  //       removeEffects();
      
  //     clickedElement = e.target as HTMLElement; // Type assertion.

  //     clickedElement.classList.add("selection");

  //     selectedChoice = clickedElement.innerText.trim();
  //   })
  // })

  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   // removeEffects();

  //   // const selectedElement = selectedChoice as HTMLElement;

  //     if (selectedChoice !== null) {
      

  //       if (correctAnswer.includes(selectedChoice)) {
  //         console.log("Nice!");

  //       clickedElement.classList.replace('selection', 'correct');
  //     } else {
  //       console.log("not nice");
  //       clickedElement.classList.replace('selection', 'incorrect');
  //     }
  //   } else {
  //       console.log("No answer selected.")
  //   }
  // })



////////////////////
});
