var containerEl = $(".container");
var containerHeader = $("<div>").addClass("header").text("JavaScript Quiz");
var containerBody = $("<div>").addClass("containerBody");
// var quizStart = $(".quizStart");
var questionBoxEl = $("<div>").addClass("questionBox");
var questionTextBox = $("<div>").addClass("questionTextBox");
var resultBox = $("<div>").addClass("resultBox");
var saveBtn = $("<div>").addClass("saveBtn");
var retryBtn = $("<div>").addClass("saveBtn");
var userName


var questionResponse00 = $("<div>").addClass("questionResponse").attr('id', "question00");
var questionResponse01 = $("<div>").addClass("questionResponse").attr('id', "question00");
var questionResponse02 = $("<div>").addClass("questionResponse").attr('id', "question00");
var questionResponse03 = $("<div>").addClass("questionResponse").attr('id', "question00");

var quizBtn = $("<div>").addClass("quizBtn");
var lineBreak00 = $("<div>").addClass("lineBreak");
var lineBreak01 = $("<div>").addClass("lineBreak");

var sideBox = $("<div>").addClass("sideBox");
var timeBox = $("<div>").addClass("timeBox");
var scoreBox = $("<div>").addClass("scoreBox");
var scoreCurrent = $("<div>").addClass("scoreCurrent");
var scoreCurrentVal = "scoreCurrent";
var scoreSaved00 = $("<div>").addClass("scoreSaved");
var scoreSavedVal00 = "Saved Score 00";
var scoreSaved01 = $("<div>").addClass("scoreSaved");
var scoreSavedVal01 = "Saved Score 00";
var scoreSaved02 = $("<div>").addClass("scoreSaved");
var scoreSavedVal02 = "Saved Score 00";

var quiz = {
    data: [
    {
            question : "What must a variable start with?",
            responses : [
                        "A letter, $ or _",
                        "Wrong00",
                        "Wrong00",
                        "Wrong00",
                        ],
            answer : 0
            },
    {
            question : "What is a variable?",
            responses : [
                        "Container for a piece of data",
                        "Wrong00",
                        "Wrong00",
                        "Wrong00",
                        ],
            answer : 0
            },
    {
            question : "Are variables case sensitive?",
            responses : [
                        "Yes",
                        "Wrong00",
                        "Wrong00",
                        "Wrong00",
                        ],
            answer : 0
            },
    {
            question : "What will an undeclared variable return?",
            responses : [
                        "Undefined",
                        "Wrong00",
                        "Wrong00",
                        "Wrong00",
                        ],
            answer : 0
            },
    {
            question : "Two types of variable scope?",
            responses : [
                        "Local and Global",
                        "Wrong00",
                        "Wrong00",
                        "Wrong00",
                        ],
            answer : 0
            },
    {
            question : "What are the properties of a Local Scope?",
            responses : [
                        "Within a function, only available within function",
                        "Wrong00",
                        "Wrong00",
                        "Wrong00",
                        ],
            answer : 0
            },
    {
            question : "What are the properties of Global Scope?",
            responses : [
                        "Within a function, only available within function",
                        "Wrong00",
                        "Wrong00",
                        "Wrong00",
                        ],
            answer : 0
            }

    ],
    now: 0, // current question

};



// Function to start the Quiz

    $(".quizStart").click(function(){
        $(".quizStart").css({"display": "none"});
        $(".container").css({"display": "block"});
    });

    console.log(quiz.data[quiz.now].question)


/*function loadQuestion(){
    var = questionBank[questionCurrent];

};


var questionTextValue = questionBank.question;
var questionResponseVal00 = questionBank.response00;
var questionResponseVal01 = questionBank.response01;
var questionResponseVal02 = questionBank.response02;
var questionResponseVal03 = questionBank.response03;
*/


containerEl.append(containerHeader);
containerEl.append(containerBody);
containerBody.append(questionBoxEl);

questionBoxEl.append(questionTextBox);

questionBoxEl.append(questionResponse00);
questionBoxEl.append(questionResponse01);
questionBoxEl.append(questionResponse02);
questionBoxEl.append(questionResponse03);
questionBoxEl.append(lineBreak00);

var dataIndex = 0;
var score = 0; // current score

function loadQuestion(){
    if (dataIndex < 6){
    questionTextBox.text(quiz.data[dataIndex].question);
    questionResponse00.text(quiz.data[dataIndex].responses[0]).attr('id', "correct");
    questionResponse01.text(quiz.data[dataIndex].responses[1]);
    questionResponse03.text(quiz.data[dataIndex].responses[2]);
    questionResponse02.text(quiz.data[dataIndex].responses[3]);
    }
    else{
        questionTextBox.css({"display": "none"});
        questionResponse00.css({"display": "none"});        
        questionResponse01.css({"display": "none"});
        questionResponse02.css({"display": "none"});
        questionResponse03.css({"display": "none"});
        lineBreak00.css({"display": "none"});
        questionBoxEl.append(resultBox);
    }

}
loadQuestion();






containerBody.append(sideBox);
sideBox.append(timeBox);
timeBox.text("Container for Timer");
       
var scoreSavedVal02 = (localStorage.getItem("Saved_Score03"));
localStorage.setItem("Saved_Score04", (scoreSavedVal02));
var scoreSavedVal01 = (localStorage.getItem("Saved_Score02"));
localStorage.setItem("Saved_Score03", (scoreSavedVal01));
var scoreSavedVal00 = (localStorage.getItem("Saved_Score"));
localStorage.setItem("Saved_Score02", (scoreSavedVal00));

sideBox.append(scoreBox);
scoreBox.append(scoreCurrent);
scoreCurrent.text(score +" / 6");
scoreBox.append(lineBreak01);
scoreBox.append(scoreSaved00);
scoreSaved00.text(scoreSavedVal00);
scoreBox.append(scoreSaved01);
scoreSaved01.text(scoreSavedVal01);
scoreBox.append(scoreSaved02);
scoreSaved02.text(scoreSavedVal02);

$(".questionResponse").on("click", function (){

    dataIndex++;
    loadQuestion();

});

$("#correct").on("click", function (){
    score++;
    console.log(score);
    scoreCurrent.text(score +" / 6");
    resultBox.text(score +" / 6")
    var p = $("<p>")
    if (score > 3){
        resultBox.append(p);
        p.text("You passed!");
        resultBox.append(saveBtn);
        saveBtn.text("Save your score")

    } else{
        resultBox.append(p);
        p.text("Better Luck Next Time")
        resultBox.append(retryBtn);
        retryBtn.text("Retry")
        retryBtn.on("click", function (){
        window.location.reload();
    });
    }
    saveBtn.on("click", function (){
        userName = prompt("What is your name?")
        localStorage.setItem("Saved_Score", (userName + ": " + score + " / 6"));
        window.location.reload();
    });

    
    
    


});

resultBox.text(score +" / 6")



//$("#question01").on("click", function (){


//});

