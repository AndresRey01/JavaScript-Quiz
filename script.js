var timer = document.querySelector('#time');
var content = document.querySelector('.content');
var questionText = document.querySelector('.questionText');
var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var choiceA = document.querySelector('.choiceA');
var choiceB = document.querySelector('.choiceB');
var choiceC = document.querySelector('.choiceC');
var choiceD = document.querySelector('.choiceD');
var checkedA = document.querySelector('#A');
var checkedB = document.querySelector('#B');
var checkedC = document.querySelector('#C');
var checkedD = document.querySelector('#D');
var highscore = 0
var firstQuestion = {
    question:"What does `DOM` stand for in JavaScript?",
        choice1:"Dollar Object Modem",
        choice2:"Document Original Module",
        choice3:"Document Object Model",
        choice4:"Dogs Over Monkeys"
}

var nextQuestions = [ 
    {
    question: "What is the purpose of the console.log() function?",
    choice1: "To open a new tab",
    choice2: "It doesn't do anything",
    choice3: "To log something onto the screen",
    choice4: "To open up the console"
    },
    {
    question:"What does the title element represent in html?",
    choice1: "The header of the webpage",
    choice2: "The name of the document on the tab",
    choice3: "Content shown on the webpage",
    choice4: "Listed items on a webpage"
    },
    {
    question: "Which type of sheet would you create to properly style your webpage?",
    choice1: "Javascript",
    choice2: "HTML",
    choice3: "Reset",
    choice4: "Stylesheet"
    }
]


function startGame() {
    startBtn.classList.add('hide');
    content.classList.add('hide');
    nextBtn.classList.add('show');
    var timerStart = 75;
    var startTimer = setInterval(function() {
        timerStart--;
        timer.textContent = timerStart;
        if(timerStart <= 0)
        clearInterval(startTimer);
    }, 1000);
    questionText.textContent = firstQuestion.question;
    choiceA.textContent = firstQuestion.choice1;
    choiceB.textContent = firstQuestion.choice2;
    choiceC.textContent = firstQuestion.choice3;
    choiceD.textContent = firstQuestion.choice4;
}

function secondQuestion() {
    if ((checkedA.checked) ||
    (checkedB.checked) ||
    (checkedD.checked)) {
        window.alert("wrong!")
        checkedA.checked = false;
        checkedB.checked = false;
        checkedD.checked = false;
questionText.textContent = nextQuestions[0].question;
choiceA.textContent = nextQuestions[0].choice1;
choiceB.textContent = nextQuestions[0].choice2;
choiceC.textContent = nextQuestions[0].choice3;
choiceD.textContent = nextQuestions[0].choice4;

} else if(checkedC.checked) {
    window.alert("correct!")
    checkedC.checked = false;
    highscore++;
questionText.textContent = nextQuestions[0].question;
choiceA.textContent = nextQuestions[0].choice1;
choiceB.textContent = nextQuestions[0].choice2;
choiceC.textContent = nextQuestions[0].choice3;
choiceD.textContent = nextQuestions[0].choice4;
}}

function thirdQuestion() {
    if((checkedB.checked) ||
    (checkedC.checked) ||
    (checkedD.checked)) {
        window.alert("wrong!")
        checkedB.checked = false;
        checkedC.checked = false;
        checkedD.checked = false;
questionText.textContent = nextQuestions[1].question;
choiceA.textContent = nextQuestions[1].choice1;
choiceB.textContent = nextQuestions[1].choice2;
choiceC.textContent = nextQuestions[1].choice3;
choiceD.textContent = nextQuestions[1].choice4;

} else if(checkedA.checked) {
    window.alert("correct!")
    checkedA.checked = false;
    highscore++;
questionText.textContent = nextQuestions[1].question;
choiceA.textContent = nextQuestions[1].choice1;
choiceB.textContent = nextQuestions[1].choice2;
choiceC.textContent = nextQuestions[1].choice3;
choiceD.textContent = nextQuestions[1].choice4;
}}


startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', secondQuestion,);