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
  const choice2 = document.querySelectorAll(".choice2");

  const correctAnswers = {
    question1: "V8",
    question2: "Armalite Rifle",
    question3: "Coat",
  };

  const isCorrect = function (questionNum, selection) {
    return correctAnswers[questionNum] === selection;
  };

    choice.forEach(function (option) {
        option.addEventListener("click", (e) => {
                const selectedChoice = option.innerText.trim();

      
            if (isCorrect("question1", selectedChoice)) {
                console.log("nice");
            } else {
                console.log("not nice");
            }
        });
    })

    choice2.forEach(function (option) {
        option.addEventListener('click', e => {
            const selectedChoice = option.innerText.trim();

            if (isCorrect("question2", selectedChoice)) {
                console.log("extra nice")
            } else {
                console.log("extra not nice")
            }
    })
})



  //   if (isCorrect("question2", selectedChoice)) {
  //     console.log("extra nice");
  //   } else {
  //     console.log("extra not nice");
  //   }

  //   choice.forEach(function (option) {
  //     option.addEventListener("click", function () {
  //       const selectedChoice = option.innerText.trim();

  //       const isCorrect = function (questionNum, selection) {
  //         return correctAnswers[questionNum] === selection;
  //       };

  //   if (isCorrect("question1", selectedChoice)) {
  //     console.log("nice");
  //   } else {
  //     console.log("wrong");
  //   }
  // });
  //   });
  // });
  // submit.addEventListener('submit', (e) => {
  //     e.preventDefault

  //     if (answer === 16) {
  //         answer.correct
  //     } answer.incorrect
});
