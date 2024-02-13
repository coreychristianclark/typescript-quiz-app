document.addEventListener("DOMContentLoaded", function (e) {
    var question1Container = document.querySelector("#question1Container");
    var choice = document.querySelectorAll(".choice");
    var choice2 = document.querySelectorAll(".choice2");
    var choice3 = document.querySelectorAll(".choice3");
    var bonus = document.querySelector("#bonus");
    var submit = document.querySelector("#submit");
    var clickedElement;
    var selectedChoice;
    var correctAnswer;
    // const userInput = clickedElement.value.trim();
    function removeEffect(variable) {
        variable.forEach(function (variable) {
            variable.classList.remove("bold");
            variable.classList.remove("correct");
            variable.classList.remove("incorrect");
        });
    }
    question1Container.addEventListener("click", function (e) {
        clickedElement = e.target;
        selectedChoice = clickedElement.innerText.trim();
        correctAnswer = "No";
        removeEffect(choice);
        clickedElement.classList.toggle("bold");
        if (selectedChoice === correctAnswer) {
            console.log("Nice!");
            clickedElement.classList.add("correct");
        }
        else {
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
