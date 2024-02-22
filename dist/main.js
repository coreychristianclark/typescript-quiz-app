document.addEventListener("DOMContentLoaded", function () {
    var question1Container = document.querySelector("#question1Container");
    var choice = document.querySelectorAll(".choice");
    var choice2 = document.querySelectorAll(".choice2");
    var choice3 = document.querySelectorAll(".choice3");
    var form = document.querySelector("#form");
    var submit = document.querySelector("#submit");
    var listOfQuestions = [
        "Can browsers interpret TypeScript alone?",
        "Who developed TypeScript?",
        "What is a major to using TypeScript?",
    ];
    var correctAnswer = [
        "No",
    ];
    var clickedElement;
    var selectedChoice = null;
    function removeEffects() {
        choice.forEach(function (choice) {
            choice.classList.remove('selection', 'correct', 'incorrect');
        });
    }
    choice.forEach(function (choice) {
        choice.addEventListener('click', function (e) {
            e.stopPropagation();
            removeEffects();
            clickedElement = e.target; // Type assertion.
            clickedElement.classList.add("selection");
            selectedChoice = clickedElement.innerText.trim();
        });
    });
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // removeEffects();
        // const selectedElement = selectedChoice as HTMLElement;
        if (selectedChoice !== null) {
            if (correctAnswer.includes(selectedChoice)) {
                console.log("Nice!");
                clickedElement.classList.replace('selection', 'correct');
            }
            else {
                console.log("not nice");
                clickedElement.classList.replace('selection', 'incorrect');
            }
        }
        else {
            console.log("No answer selected.");
        }
    });
    ////////////////////
});
