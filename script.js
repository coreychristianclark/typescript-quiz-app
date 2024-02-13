// document.addEventListener("DOMContentLoaded", (e) => {
//   const choice = document.querySelectorAll(".choice");
//   const choice2 = document.querySelectorAll(".choice2");
//   const choice3 = document.querySelectorAll(".choice3");
//   const bonus = document.querySelector("#bonus");
//   const submit = document.querySelector("#submit");

//   const correctAnswers = {
//     question1: "V8",
//     question2: "Armalite Rifle",
//     question3: "Coat",
//     questionBonus: "16",
//   };

//   const isCorrect = function (questionNum, selection) {
//     return correctAnswers[questionNum] === selection;
//   };

//   choice.forEach(function (option) {
//     option.addEventListener("click", (e) => {
//       const selectedChoice = option.innerText.trim();

//       if (isCorrect("question1", selectedChoice)) {
//         return "Nice!"
//       } else {
//         console.log("not nice");
//       }
//     });
//   });

//   choice2.forEach(function (option) {
//     option.addEventListener("click", (e) => {
//       const selectedChoice = option.innerText.trim();

//       if (isCorrect("question2", selectedChoice)) {
//         console.log("extra nice");
//       } else {
//         console.log("extra not nice");
//       }
//     });
//   });

//   choice3.forEach(function (option) {
//     option.addEventListener("click", (e) => {
//       const selectedChoice = option.innerText.trim();

//       if (isCorrect("question3", selectedChoice)) {
//         console.log("ultra nice");
//       } else {
//         console.log("ultra not nice");
//       }
//     });
//   });

//   submit.addEventListener("click", (e) => {

//     const userInput = bonus.value.trim();

//     if (isCorrect("questionBonus", userInput)) {
//       console.log("Outstanding!");
//     } else {
//       console.log("Not quite.");
//     }
//   });
// });
