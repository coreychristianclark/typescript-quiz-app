const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");
// const v8 = document.querySelector("#v8")
// const v12 = document.querySelector("#v12")
// const v6 = document.querySelector("#v6")
// const v10 = document.querySelector("#v10")
// const assaultRifle = document.querySelector("#assaultRifle")
// const autoRifle = document.querySelector('#autoRifle')
// const acogRifle = document.querySelector('#acogRifle')
// const armaliteRifle = document.querySelector('#armaliteRifle')
// const shorts = document.querySelector('#shorts')
// const nothing = document.querySelector('#nothing')
// const coat = document.querySelector('#coat')
// const sandals = document.querySelector('#sandals')
const answer = document.querySelector("#answer");
// const button = document.querySelector("button")

document.addEventListener("DOMContentLoaded", (e) => {
  const choice = document.querySelectorAll(".choice");

  const correctAnswers = {
    question1: "V8",
    question2: "Armalite Rifle",
    question3: "Coat",
  };

  choice.forEach(function (choice) {
    choice.addEventListener("click", function () {
      const selectedChoice = choice.innerText.trim();

      const isCorrect = function (question, selection) {
        return correctAnswers[question] === selection;
      };
      // FIXING THE CONSOLE LOGS ACTIVATING FOR EACH ONE.
      if (isCorrect("question1", selectedChoice)) {
        console.log("nice");
      } else {
        console.log("wrong");
      }

      if (isCorrect("question2", selectedChoice)) {
        console.log("Extra nice");
      } else {
        console.log("Extra wrong");
      }

      if (isCorrect("Question3", selectedChoice)) {
        console.log("Mega nice");
      } else {
        console.log("Mega wrong");
      }
      //   const choice2 = document.querySelectorAll(".choice2");

      //   choice2.forEach(function (choice2) {
      //     choice2.addEventListener("click", function () {
      //       if (isCorrect) {
      //         console.log("Very nice");
      //       } else {
      //         console.log("Very wrong");
      //   }
      // });
      //   });
    });
  });
});
// submit.addEventListener('submit', (e) => {
//     e.preventDefault

//     if (answer === 16) {
//         answer.correct
//     } answer.incorrect
// })
