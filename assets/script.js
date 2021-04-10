const startQuiz = document.getElementById("startQuiz");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const answerD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const scoreEl = document.getElementById("scoreContainer");
const saveContainerEl = document.getElementById("saveContainer");
const saveResult = document.getElementById("saveResults");

// Question Bank
let questionBank = [
    {
        question : "What must a variable start with?",
        answerA : "A letter, $ or _",
        answerB : "Wrong",
        answerC : "Wrong",
        answerD : "Wrong",
        correct : "A"
    },{
        question : "What is a variable?",
        answerA : "Wrong",
        answerB : "Container for a piece of data",
        answerC : "Wrong",
        answerD : "Wrong",
        correct : "B"
    },{
        question : "Are variables case sensitive?",
        answerA : "Wrong",
        answerB : "Wrong",
        answerC : "Yes",
        answerD : "Wrong",
        correct : "C"
    },{
        question : "What will an undeclared variable return?",
        answerA : "Wrong",
        answerB : "Wrong",
        answerC : "Undefined",
        answerD : "Wrong",
        correct : "C"
    },{
        question : "Two types of variable scope?",
        answerA : "Wrong",
        answerB : "Wrong",
        answerC : "Local and Global",
        answerD : "Wrong",
        correct : "C"
    },{
        question : "What are the properties of a Local Scope?",
        answerA : "Wrong",
        answerB : "Wrong",
        answerC : "Within a function, only available within function",
        answerD : "Wrong",
        correct : "C"
    },{
        question : "What are the properties of Global Scope?",
        answerA : "Wrong",
        answerB : "Wrong",
        answerC : "Outside a function, available to any code outside that function (also within).",
        answerD : "Wrong",
        correct : "C"
    },
];

// Additional Variables

const questionFinal = questionBank.length - 1;
var questionCurrent = 0;
var count = 30;
const questionTime = 0; // 30s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / 30;
var timer;
var score = 0;

// Function to load a question and answer from the Question Bank to the quiz
function renderQuestion(){
    let q = questionBank[questionCurrent];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
    answerD.innerHTML = q.answerD;
}

startQuiz.addEventListener("click",startQuizQuiz);

// Function to start the Quiz
function startQuizQuiz(){
    startQuiz.style.display = "none";
    quiz.style.display = "block";
    renderQuestion();
    renderCounter();
    timer = setInterval(renderCounter,1000); // 1000ms = 1s
}

// Function to load and run the counter with a time remaining guage

function renderCounter(){
    if(count >= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--
    }else{
        // Function for Correct Answer behaviors, and then loan the next Question Set
        answerIncorrect();
        if(questionCurrent < questionFinal){
            questionCurrent++;
            renderQuestion();
        }else{
            // Ends the Quiz if no more questions remain
            clearInterval(timer);
            endQuiz();
        }
    }
    if(count == 0){
        endQuiz();
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questionBank[questionCurrent].correct){
        score++;
        answerCorrect();
    }else{
        answerIncorrect();
    }

    if(questionCurrent < questionFinal){
        questionCurrent++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(timer);
        endQuiz();
    }
}

// Function for Correct Answer behaviors, changes the timer color to green and resets the count to 30 seconds
function answerCorrect(){
    count = 30;
    document.getElementById("timer").style.color = "#12CB3C";
    }

// Function for Incorrect Answer behaviors, changes the timer color to red and reduces the time by 5 seconds
function answerIncorrect(){
    var penalty = count - 5;
    count = penalty;
    document.getElementById("timer").style.color = "#B91428";
}

// Function to end the Quiz and call the Score Function

function endQuiz(){
    quiz.style.display = "none";
    scoreEl.style.display = "none"
    renderScore();
}

// Score Function
function renderScore(){
    scoreEl.style.display = "inline-block";
    scoreEl.style.width = "300px";

    // Calculate Score as a Percentage
    const scorePerCent = Math.round(100 * score/questionBank.length);


    // Display Score and Save Result Button
    scoreEl.innerHTML += "<h2>My Results:</h2><p>Score: "+ scorePerCent +"%</p>";
    scoreEl.innerHTML += "<div id='saveResults'>Save Results</div>";
    
    
}
saveResult.addEventListener("click", function (event){
    event.preventDefault();
    saveContainerEl.style.display = "inline-block";
});