document.addEventListener("DOMContentLoaded", (e) => {

  const question1Container = document.querySelector("#question1Container")
  const choice = document.querySelectorAll(".choice");
  const choice2 = document.querySelectorAll(".choice2");
  const choice3 = document.querySelectorAll(".choice3");

  const bonus = document.querySelector("#bonus");
  const submit = document.querySelector("#submit");

  let clickedElement: HTMLElement;
  let selectedChoice: string;
  let correctAnswer: string | boolean;

  // const userInput = clickedElement.value.trim();

  function removeEffect(variable) {
    variable.forEach((variable) => {
      variable.classList.remove("bold");
      variable.classList.remove("correct");
      variable.classList.remove("incorrect");
  })
  }


  question1Container.addEventListener("click", (e) => {

    clickedElement = e.target as HTMLElement;
    selectedChoice = clickedElement.innerText.trim();
    correctAnswer = "No";
    removeEffect(choice);

    clickedElement.classList.toggle("bold");

    if (selectedChoice === correctAnswer) {
      console.log("Nice!")
      clickedElement.classList.add("correct")
    } else {
      console.log("not nice");
      clickedElement.classList.add("incorrect");
    }
  });



  // submit.addEventListener("click", (e) => {


  //   if (isCorrect("questionBonus", userInput)) {
  //     console.log("Outstanding!");
  //   } else {
  //     console.log("Not quite.");
  //   }
  // });
});
