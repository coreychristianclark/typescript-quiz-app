document.addEventListener("DOMContentLoaded", () => {

  const question1Container = document.querySelector("#question1Container")
  const choice = document.querySelectorAll(".choice");
  const choice2 = document.querySelectorAll(".choice2");
  const choice3 = document.querySelectorAll(".choice3");

  const form = document.querySelector("#form");
  const submit = document.querySelector("#submit");

  const listOfQuestions =
    [
      "Can browsers interpret TypeScript alone?",
      "Who developed TypeScript?",
      "What is a major to using TypeScript?",
    ];
  
  const correctAnswer: number[] | string[] = [
    "No",
  ]

  let clickedElement: HTMLElement;
  let selectedChoice: string | null = null;

  function removeEffects() {
    choice.forEach((choice) => {
      choice.classList.remove('selection', 'correct', 'incorrect');
    })
  }
  
    choice.forEach((choice) => {
      choice.addEventListener('click', (e) => {
        e.stopPropagation();      
        removeEffects();
      
          clickedElement = e.target as HTMLElement; // Type assertion.

          clickedElement.classList.add("selection");

          selectedChoice = clickedElement.innerText.trim();
        
    })
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // removeEffects();

    // const selectedElement = selectedChoice as HTMLElement;

      if (selectedChoice !== null) {
      

        if (correctAnswer.includes(selectedChoice)) {
          console.log("Nice!");

        clickedElement.classList.replace('selection', 'correct');
      } else {
        console.log("not nice");
        clickedElement.classList.replace('selection', 'incorrect');
      }
    } else {
        console.log("No answer selected.")
    }
  })



////////////////////
});
