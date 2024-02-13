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


  // const questions: string[] = ["question1", "question2", "question3", "questionBonus"];

  // const isCorrect = function (question: string, selection: string): boolean {
  //   return questions[question] === selection;
  // };


  question1Container.addEventListener("toggle", (e) => {

    clickedElement = e.target as HTMLElement;
    selectedChoice = clickedElement.innerText.trim();
    correctAnswer = "No";

    clickedElement.classList.add(".bold");

    if (selectedChoice === correctAnswer) {
      console.log("Nice!")
      clickedElement.classList.add(".correct")

    } else {
      console.log("not nice");
    }
  });

  // choice2.forEach(function (option) {
  //   option.addEventListener("click", (e) => {
  //     const selectedChoice = option.textContent.trim();

  //     if (isCorrect("question2", selectedChoice)) {
  //       console.log("extra nice");
  //     } else {
  //       console.log("extra not nice");
  //     }
  //   });
  // });

  // choice3.forEach(function (option) {
  //   option.addEventListener("click", (e) => {
  //     const selectedChoice = option.textContent.trim();

  //     if (isCorrect("question3", selectedChoice)) {
  //       console.log("ultra nice");
  //     } else {
  //       console.log("ultra not nice");
  //     }
  //   });
  // });

  // submit.addEventListener("click", (e) => {


  //   if (isCorrect("questionBonus", userInput)) {
  //     console.log("Outstanding!");
  //   } else {
  //     console.log("Not quite.");
  //   }
  // });
});
