document.addEventListener("DOMContentLoaded", function () {
    var questionText = document.querySelector('#questionText');
    var choicesContainer = document.querySelector('#choicesContainer');
    var explanationText = document.querySelector('#explanationText');
    var nextQuestion = document.querySelector('#nextQuestion');
    var form = document.querySelector('#form');
    var questionsChoicesAnswers = [
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
    var currentQuestionIndex = 0;
    // let clickedElement: HTMLElement;
    // let selectedChoice: string | null = null;
    // function removeEffects() {
    //   choice.forEach((choice) => {
    //     choice.classList.remove('selection', 'correct', 'incorrect');
    //   })
    // }
    function renderQuestion() {
        var currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at index 0 -- the first set.
        questionText.textContent = currentQuestion.question; // Pulls the text from the 'question' category of the current index of the array.
        choicesContainer.innerHTML = "";
        currentQuestion.choices.forEach(function (choice) {
            var choiceButtons = document.createElement('button');
            choiceButtons.textContent = choice;
            choiceButtons.className = 'choiceButtons';
            choiceButtons.addEventListener('click', function () { return handleChoiceClick(choice); });
            choicesContainer.appendChild(choiceButtons);
            // choiceButtons.style.display = "block"
        });
        explanationText.textContent = ""; // Set to blank/empty by default.
        nextQuestion.style.display = "block"; // Button does not appear until the question is answered/submitted.
        ///////////////////////// change display to "none" when done!
    }
    function handleChoiceClick(clickedChoice) {
        var currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at idex 0 -- the first set.
        if (clickedChoice === currentQuestion.answer) {
            console.log("Good!");
        }
        else {
            console.log("Wrong.");
        }
        if (currentQuestionIndex < questionsChoicesAnswers.length) {
            renderQuestion();
        }
        else {
            // Completed. All questions answered.
            questionText.textContent = "Quiz complete!";
            choicesContainer.innerHTML = ""; // No choices to list.
            explanationText.textContent = ""; // No questions to explain.
            nextQuestion.style.display = "none"; // No need for a next button.
        }
    }
    renderQuestion(); // Initial rendering.
    ////////////////////
});
