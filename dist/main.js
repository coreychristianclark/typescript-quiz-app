document.addEventListener("DOMContentLoaded", function () {
    var h1 = document.querySelector('#h1');
    var quizCompletedText = document.querySelector('#quizCompletedText');
    var quizCompletedTextContainer = document.querySelector('#quizCompletedTextContainer');
    var quizContainer = document.querySelector('#quizContainer');
    var questionText = document.querySelector('#questionText');
    var choicesContainer = document.querySelector('#choicesContainer');
    var explanationContainer = document.querySelector('#explanationContainer');
    var explanationText = document.querySelector('#explanationText');
    var nextQuestionButton = document.querySelector('#nextQuestionButton');
    var form = document.querySelector('#form');
    var submit = document.querySelector('#submit');
    var startOverButton = document.querySelector('#startOverButton');
    var currentQuestionIndex = 0;
    var selectedChoice = null; // Keeps track of selected choice.
    var isCorrectAnswerSubmitted = false;
    var questionsChoicesAnswers = [
        {
            question: "Can browsers interpret TypeScript alone?",
            choices: ["Yes", "Only Google Chrome Can", "No", "Only FireFox Can"],
            answer: "No",
            explanation: "Correct! TypeScript alone cannot be understood by web browsers. TypeScript needs to be transpiled (converted) into JavaScript so a web browser can execute it."
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
            explanation: "Excellent work! TypeScript is a strongly-typed superset of JavaScript. Due to its static nature and need for exactness, it helps developers catch bugs and errors very quickly, as opposed to vanilla JavaScript, which will let many errors slide without notice."
        },
        {
            question: "Which TypeScript type should be avoided at all costs?",
            choices: ["Any", "Void", "Generic Types", "Null"],
            answer: "Any",
            explanation: "Fantastic! Type 'any' pretty much turns TypeScript back into JavaScript. Anything goes, which is not what we want. Remember, 'any' is bad, and we can do better."
        },
        {
            question: "Which type should be used on a function that performs an action, but doesn't produce a result?",
            choices: ["<T>", "Void", "None", "Unknown"],
            answer: "Void",
            explanation: "Outstanding! If a function serves as a utility/provides a service, it doesn't have an output like a string, number, array, or whatever. Thus, we mark its output as 'void'."
        },
        {
            question: "Unless specified, which type does TypeScript default to?",
            choices: ["Undefined", "Object", "Boolean", "Any"],
            answer: "Any",
            explanation: "Superb! TypeScript will, by default, assign type 'any' to everything. Type 'any' means 'anything goes', and that negates the benefits/purpose of TypeScript. Remember, 'any' is bad, and we can do better."
        },
    ];
    function renderQuestion() {
        selectedChoice = null;
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
        startOverButton.style.display = "none"; // Button will not appear until the final question has been submitted correctly.
        explanationContainer.style.display = "none"; // Hidden by default -- only appears when the correct answer is submitted.
        explanationText.textContent = ""; // Set to blank/empty by default.
        nextQuestionButton.style.display = "none"; // Button does not appear until the question is answered/submitted.
    }
    function handleChoiceClick(clickedButton) {
        removeEffects();
        clickedButton.classList.add('selection');
        selectedChoice = clickedButton; // Tracks the selected choice.
    }
    function removeEffects() {
        var buttons = document.querySelectorAll('.choiceButtons'); // This is not re-declaring 'choiceButtons'. It is simply gathering any buttons that have that class identification.
        buttons.forEach(function (button) {
            if (button instanceof HTMLElement) {
                button.classList.remove('selection', 'correct', 'incorrect');
            }
        });
    }
    function disableChoiceButtons(correctButton) {
        var buttons = document.querySelectorAll('.choiceButtons');
        buttons.forEach(function (button) {
            button.classList.add('disabled');
            button.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation(); // Prevents the click event from propagating further up the event list.
            }, true); // Ensures this runs before any other click listeners.
            if (button === correctButton) {
                button.classList.remove('disabled');
            }
        });
    }
    form.addEventListener('click', function (e) {
        e.preventDefault();
        if (!selectedChoice) {
            alert("Please select a choice.");
            return;
        }
        var currentQuestion = questionsChoicesAnswers[currentQuestionIndex]; // Starts at idex 0 -- the first set.
        var choiceText = selectedChoice.textContent; // Obtains the text content from the clicked button.
        if (choiceText === currentQuestion.answer) {
            console.log("Good!");
            selectedChoice.classList.replace('selection', 'correct');
            explanationContainer.style.display = "block";
            explanationText.textContent = currentQuestion.explanation;
            nextQuestionButton.style.display = "block";
            isCorrectAnswerSubmitted = true;
            submit.style.display = "none";
            disableChoiceButtons(selectedChoice);
        }
        else {
            console.log("Wrong.");
            selectedChoice.classList.replace('selection', 'incorrect');
        }
    });
    nextQuestionButton.addEventListener('click', function (e) {
        if (currentQuestionIndex < questionsChoicesAnswers.length - 1 && isCorrectAnswerSubmitted === true) { // The '-1' will prevent it from incrementing beyond the length of the array.
            currentQuestionIndex++;
            renderQuestion();
            submit.style.display = "block";
        }
        else {
            // Completed.
            h1.style.display = "none";
            quizContainer.style.display = "none";
            choicesContainer.innerHTML = "";
            explanationContainer.style.display = "none";
            explanationText.textContent = "";
            nextQuestionButton.style.display = "none";
            quizCompletedTextContainer.style.display = "block";
            quizCompletedText.style.display = "block";
            startOverButton.style.display = "block";
        }
    });
    startOverButton.addEventListener('click', function (e) {
        quizCompletedTextContainer.style.display = "none";
        quizCompletedText.style.display = "none";
        h1.style.display = "block";
        currentQuestionIndex = 0;
        renderQuestion();
        quizContainer.style.display = "block";
        submit.style.display = "block";
    });
    renderQuestion(); // Initial rendering.
});
