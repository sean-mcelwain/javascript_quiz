var containerEl = $(".container");
var containerHeader = $("<div>").addClass("header").text("JavaScript Quiz");
var containerBody = $("<div>").addClass("containerBody");
// var quizStart = $(".quizStart");
var questionBoxEl = $("<div>").addClass("questionBox");
var questionTextBox = $("<div>").addClass("questionTextBox");

var questionResponse00 = $("<div>").addClass("questionResponse");
var questionResponse01 = $("<div>").addClass("questionResponse");
var questionResponse02 = $("<div>").addClass("questionResponse");
var questionResponse03 = $("<div>").addClass("questionResponse");

var quizBtn = $("<div>").addClass("quizBtn");
var lineBreak00 = $("<div>").addClass("lineBreak");
var lineBreak01 = $("<div>").addClass("lineBreak");

var weatherBox = $("<div>").addClass("weatherBox");
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

// Question Bank
var question00 = {
        question : "What must a variable start with?",
        response00 : "A letter, $ or _",
        response01 : "Wrong00",
        response02 : "Wrong00",
        response03 : "Wrong00",
        correct : "00"
    };
var question01 = {
        question : "What is a variable?",
        response00 : "Container for a piece of data",
        response01 : "Wrong01",
        response02 : "Wrong01",
        response03 : "Wrong01",
        correct : "00"
    };
var question02 = {
        question : "Are variables case sensitive?",
        response00 : "Yes",
        response01 : "Wrong02",
        response02 : "Wrong02",
        response03 : "Wrong02",
        correct : "00"
    };
    var question03 = {
        question : "What will an undeclared variable return?",
        response00 : "Undefined",
        response01 : "Wrong03",
        response02 : "Wrong03",
        response03 : "Wrong03",
        correct : "00"
    };
    var question04 = {
        question : "Two types of variable scope?",
        response00 : "Local and Global",
        response01 : "Wrong04",
        response02 : "Wrong04",
        response03 : "Wrong04",
        correct : "00"
    };
    var question05 = {
        question : "What are the properties of a Local Scope?",
        response00 : "Within a function, only available within function",
        response01 : "Wrong05",
        response02 : "Wrong05",
        response03 : "Wrong05",
        correct : "00"
    };
    var question06 = {
        question : "What are the properties of Global Scope?",
        response00 : "Outside a function, available to any code outside that function (also within).",
        response01 : "Wrong05",
        response02 : "Wrong05",
        response03 : "Wrong05",
        correct : "00"
    };




// Function to load a question and answer from the Question Bank to the quiz
function loadQuestion(){
//    questionTextValue = questionBank.question;

}

// Function to start the Quiz

    $(".quizStart").click(function(){
        $(".quizStart").css({"display": "none"});
        $(".container").css({"display": "block"});
    });
    console.log(questionTextValue);
    console.log(question00.question);


/*function loadQuestion(){
    var = questionBank[questionCurrent];

};
*/

var questionTextValue = question00.question;
var questionResponseVal00 = question00.response00;
var questionResponseVal01 = question00.response01;
var questionResponseVal02 = question00.response02;
var questionResponseVal03 = question00.response03;



containerEl.append(containerHeader);
containerEl.append(containerBody);
containerBody.append(questionBoxEl);

questionBoxEl.append(questionTextBox);
questionTextBox.text(questionTextValue);
questionBoxEl.append(questionResponse00);
questionResponse00.text(questionResponseVal00);
questionBoxEl.append(questionResponse01);
questionResponse01.text(questionResponseVal01);
questionBoxEl.append(questionResponse02);
questionBoxEl.append(questionResponse03);
questionResponse03.text(questionResponseVal02);
questionResponse02.text(questionResponseVal03);

questionBoxEl.append(lineBreak00);




containerBody.append(weatherBox);
weatherBox.append(timeBox);
timeBox.text("Container for Timer");


weatherBox.append(scoreBox);
scoreBox.append(scoreCurrent);
scoreCurrent.text(scoreCurrentVal);
scoreBox.append(lineBreak01);
scoreBox.append(scoreSaved00);
scoreSaved00.text(scoreSavedVal00);
scoreBox.append(scoreSaved01);
scoreSaved01.text(scoreSavedVal00);
scoreBox.append(scoreSaved02);
scoreSaved02.text(scoreSavedVal00);

$(".questionResponse").click(function(){
    console.log("Hello")
    questionTextBox.text(question01.question);
    questionResponse00.text(question01.response00);
    questionResponse01.text(question01.response01);
    questionResponse02.text(question01.response02);
    questionResponse03.text(question01.response03);
});


