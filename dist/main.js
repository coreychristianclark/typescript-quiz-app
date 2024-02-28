document.addEventListener("DOMContentLoaded", function () {
    var questionText = document.querySelector('#questionText');
    var choicesContainer = document.querySelector('#choicesContainer');
    var explanationText = document.querySelector('#explanationText');
    var nextQuestion = document.querySelector('#nextQuestion');
    var form = document.querySelector('#form');
    var explanationText = document.querySelector('#explanationText');
    var currentQuestionIndex = 0;
    var selectedChoice = null; // Keeps track of selected choice.
    var questionsChoicesAnswers = [
        {
            question: "Can browsers interpret TypeScript alone?",
            choices: ["Yes", "Only Google Chrome Can", "No", "Only FireFox Can"],
            answer: "No",
            explanation: "Correct! TypeScript alone cannot be understood by web browsers. TypeScript needs to be transpiled (converted) into JavaScript because a web browser can execute it."
        },
        {
            question: "Who developed TypeScript?",
            choices: ["Brendan Eich", "Microsoft", "Google", "Anders Hejlsberg"],
            answer: "Anders Hejlsberg",
            explanation: "Good job! TypeScript is a Microsoft product, but the credit goes to Anders Hejlsberg for developing it. Development of TypeScript was announced in October 2012 and its popularity grew rather quickly."
        },
        {
            question: "What is a major benefit to using TypeScript?",
            choices: ["It Works With Any Language", "It's Not Strict", "It's Faster", "It Reduces Bugs And Errors"],
            answer: "It Reduces Bugs And Errors",
            explanation: "Excellent work! TypeScript is a strongly-typed superset of JavaScript. Due to its static nature and need for exactness, it helps developers catch bugs and errors very quickly, as opposed to vanilla JavaScript that will let many errors slide without notice."
        },
    ];
    function renderQuestion() {
        var currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at index 0 -- the first set.
        questionText.textContent = currentQuestion.question; // Pulls the text from the 'question' category of the current index of the array.
        choicesContainer.innerHTML = "";
        currentQuestion.choices.forEach(function (choice) {
            var choiceButtons = document.createElement('button');
            choiceButtons.textContent = choice;
            choiceButtons.className = 'choiceButtons';
            choiceButtons.addEventListener('click', function () {
                handleChoiceClick(this);
            });
            choicesContainer.appendChild(choiceButtons);
            choiceButtons.style.display = "block";
        });
        explanationText.textContent = ""; // Set to blank/empty by default.
        nextQuestion.style.display = "block"; // Button does not appear until the question is answered/submitted.
        ///////////////////////// *********change display to "none" when done!*************
    }
    function removeEffects() {
        var buttons = document.querySelectorAll('.choiceButtons'); // This is not re-declaring 'choiceButtons'. It is simply gathering any buttons that have that class identification.
        buttons.forEach(function (button) {
            if (button instanceof HTMLElement) {
                button.classList.remove('selection', 'correct', 'incorrect');
            }
        });
    }
    function handleChoiceClick(clickedButton) {
        removeEffects();
        clickedButton.classList.add('selection');
        selectedChoice = clickedButton; // Tracks the selected choice.
    }
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!selectedChoice) {
            console.log("Please select a choice."); // *****Turn into an alert later.*****
            return;
        }
        var currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at idex 0 -- the first set.
        var choiceText = selectedChoice.textContent; // Obtains the text content from the clicked button.
        if (choiceText === currentQuestion.answer) {
            console.log("Good!");
            selectedChoice.classList.replace('selection', 'correct');
            explanationText.textContent = currentQuestion.explanation;
        }
        else {
            console.log("Wrong.");
            selectedChoice.classList.replace('selection', 'incorrect');
        }
        if (currentQuestionIndex < questionsChoicesAnswers.length) {
        }
        else {
            // // Completed. All questions answered.
            // questionText.textContent = "Quiz complete!";
            // choicesContainer.innerHTML = ""; // No choices to list.
            // explanationText.textContent = ""; // No questions to explain.
            // nextQuestion.style.display = "none"; // No need for a next button.
        }
        // renderQuestion();
    });
    nextQuestion.addEventListener('click', function (e) {
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
    });
    renderQuestion(); // Initial rendering.
    ////////////////////
});
