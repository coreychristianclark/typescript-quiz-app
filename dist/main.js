document.addEventListener("DOMContentLoaded", function (e) {
    var choice = document.querySelectorAll(".choice");
    var choice2 = document.querySelectorAll(".choice2");
    var choice3 = document.querySelectorAll(".choice3");
    var bonus = document.querySelector("#bonus");
    var submit = document.querySelector("#submit");
    var correctAnswers = {
        question1: "V8",
        question2: "Armalite Rifle",
        question3: "Coat",
        questionBonus: "16",
    };
    var isCorrect = function (questionNum, selection) {
        return correctAnswers[questionNum] === selection;
    };
    choice.forEach(function (option) {
        option.addEventListener("click", function (e) {
            var selectedChoice = option.innerText.trim();
            if (isCorrect("question1", selectedChoice)) {
                console.log("Nice!");
            }
            else {
                console.log("not nice");
            }
        });
    });
    choice2.forEach(function (option) {
        option.addEventListener("click", function (e) {
            var selectedChoice = option.innerText.trim();
            if (isCorrect("question2", selectedChoice)) {
                console.log("extra nice");
            }
            else {
                console.log("extra not nice");
            }
        });
    });
    choice3.forEach(function (option) {
        option.addEventListener("click", function (e) {
            var selectedChoice = option.innerText.trim();
            if (isCorrect("question3", selectedChoice)) {
                console.log("ultra nice");
            }
            else {
                console.log("ultra not nice");
            }
        });
    });
    submit.addEventListener("click", function (e) {
        var userInput = bonus.value.trim();
        if (isCorrect("questionBonus", userInput)) {
            console.log("Outstanding!");
        }
        else {
            console.log("Not quite.");
        }
    });
});
