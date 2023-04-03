// Declare Array Variable that stores questions as objects
var quizQuestions = [
    //Object 1
    {
        question: "Which of the following is NOT a data type in JavaScript?",
        choices: ["Number", "Undefined", "Object", "Null"],
        answer: "Null", 
    
    },
    //Object 2
    {
        question: "Which of the following is used to comment in JavaScript?",
        choices: ["\"", "//", "<!-->", "&"],
        answer: "//",     
    },
    //Object 3
    {
        question: "Arrays in JavaScript can be used to store which of the following?",
        choices: ["Variables", "Objects", "Arrays", "All of the above"],
        answer: "All of the above", 
    },
    //Object 4
    {
        question: "What does this operation === do?",
        choices: ["Compares values", "Compares contents", "Compares values and types", "Compares types"],
        answer: "Compares values and types", 
    },
    //Object 6
    {
        question: "Which of the following is used for debugging?",
        choices: ["prompt", "CSS", "console log", "alert"],
        answer: "console log", 
    },
]; 

// console log to see what was logged
console.log(quizQuestions);

// Declare variables that will allow us access the DOM
var mainwrapper = document.querySelector("#wrapper");
var divquizQuestions = document.querySelector("#quizQuestions");
var ulquizList = document.querySelector("#quizList");
var divquizTimer = document.querySelector("#timer");
var btnstarQuiz = document.querySelector("#startQuiz");

// Declare variable for score
var score = 0;
// Declare variable to identify Question Object (index)
var questionIndex = 0;
// Declare variables related to timer
var timeLeft = 60;
var timePenalty = 10;

divquizTimer.textContent = "Time : 01:00";

// Add event listener for Start Quiz button using StarQuiz variable
starQuiz.addEventListener("click", function(){
divquizTimer.textContent = "01:00"
});