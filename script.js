const questions = [
    // Questions for the quiz in an array
    {
        question: "What does the acronym `DOM` stand for in JavaScript?",
        answers: [
            { text: "Document Object Model", correct: true},
            { text: "Data Object Model", correct: false},
            { text: "Document Orientation Model", correct: false},
            { text: "Document Object Manipulation", correct: false},
        ]
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            { text: "int", correct: false},
            { text: "variable", correct: false},
            { text: "var", correct: true},
            { text: "declare", correct: false},
        ]
    },
    {
        question: "What is the result of typeof null in JavaScript?",
        answers: [
            { text: "null", correct: false},
            { text: "object", correct: true},
            { text: "undefined", correct: false},
            { text: "string", correct: false},
        ]
    },
    {
        question: "What does JavaScript primarily add to a website?",
        answers: [
            { text: "Styling", correct: false},
            { text: "Interactivity", correct: true},
            { text: "Structure", correct: false},
            { text: "Animation", correct: false},
        ]
    }
];
// these const allow the ids from the html to be grabbed
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
// this starts the quiz off 
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// this function grabs the questions from the array above
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


// this resets the original questions so they are not shown in the webpage
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// gives correct or incorrect depending on which answer was chosen
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
// this function shows score at the end of the game 
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();