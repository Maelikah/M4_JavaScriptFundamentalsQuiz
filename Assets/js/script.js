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
var Index = 0;
// Declare variables related to timer
var timeLeft = 60;
var timeleftInterval = 0;
var timePenalty = 10;
// Display Timer value on header
divquizTimer.textContent = "Time : 00:00";
// Create variable to display ul
var quizUl = document.createElement("ul");

// Add event listener for Start Quiz button using StartQuiz variable
startQuiz.addEventListener("click", function(){
    divquizTimer.textContent = "Time : 01:00"
    timeleftInterval = setInterval(function() {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(timeleftInterval);
            timesUp();
        } 
    },1000);
    renderQuestions(Index);
});

// Create timeLeft countdown function: updateTimer
function updateTimer() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    var secondsFormat;
    if (seconds <10) {
        secondsFormat = "0" + seconds
    } else {
        secondsFormat = seconds 
    }
    divquizTimer.textContent = "Time : 0" + minutes + ":"+secondsFormat; 
}

// Create renderQuestions function
function renderQuestions(Index) {
    

}


// Create timesUp function to be used when timer reaches zero
function timesUp() {
    //clear data inside div with quizQuestions id
    divquizQuestions.innerHTML = "";
    //remove the start quiz button
    btnstarQuiz.remove();
    //change bgc when time is up
    mainwrapper.style.backgroundImage = "url('assets/images/tup.png')"; 

    //Create variables for Elements
    var timesupH1 = document.createElement("h1");
    var timesupP = document.createElement("p");
    var timesupLabel = document.createElement("label");
    var timesupInput = document.createElement("input");
    var timesupbtn = document.createElement("button");

    // set text content for variables
    timesupH1.textContent = "Time's Up!";
    timesupP.textContent = "Your final score is: ";
    timesupLabel.textContent = "Please input your initials: ";
    timesupbtn.textContent = "Submit";

    // set attributes for input
    timesupInput.setAttribute("type", "text");
    timesupInput.setAttribute("id", "initials");
    timesupInput.textContent = "";

    // set atrributes for the timesupbtn
    timesupbtn.setAttribute("type","submit");
    timesupbtn.setAttribute("id","startQuiz");

    // append variables to the div and the label, set some style attributes to improve UX
    divquizQuestions.appendChild(timesupH1);
    timesupH1.style.marginBottom = '60px';
    divquizQuestions.appendChild(timesupP);
    timesupP.style.marginBottom = '60px';
    divquizQuestions.appendChild(timesupLabel);
    timesupLabel.appendChild(timesupInput);
    timesupInput.size = 5;
    divquizQuestions.appendChild(timesupbtn);

    // add event listener for timesupbtn
    timesupbtn.addEventListener("click", function() {
        //console log comment to set reviewer to code related to the timesupbtn event listener
        console.log("--------------------------------\nlogs related to timesupbtn event listener :");
        // create variable for initials
        var initials = timesupInput.value;
        
        // force user to enter value
        if (initials === "") {
            console.log("* Alert window must show if user clicks submit without initials input.\nUser can't submit the form without that input");
            alert("Please input your initials");
        } else {
            //console log initials var
            console.log("* Var Initials value: " + initials);
            //create finalScore var to use for local storage
            var finalScore = {
                initials: initials,
                score: score
            }
            //console log finalScore var
            console.log("* Var final score:\nInitials: " + finalScore.initials + "\nScore: " + finalScore.score);
        }

    });
}


// Clear data inside div with quizQuestions id
divquizQuestions.innerHTML = "";
quizUl.innerHTML = "";

// Remove the start quiz button
btnstarQuiz.remove();

// Create variables for the function
var quizH2 = document.createElement("h2");

// Create a for loop that gets data based on questions length
for (var i = 0; i<quizQuestions.length; i++ ) {
    var displayQuestion = quizQuestions[Index].question;
    var displayChoices = quizQuestions[Index].choices;
    // append the question to the div container
    divquizQuestions.appendChild(quizH2);
    // Display the question in the H2 element created above
    quizH2.textContent = displayQuestion;
}


//quick commit




//-------------------------TIMESUP ------------------------
// divquizQuestions.innerHTML = "";
// btnstarQuiz.remove();
// mainwrapper.style.backgroundImage = "url('assets/images/tup.png')"; 
// var timesupH1 = document.createElement("h1");
// var timesupP = document.createElement("p");
// var timesupLabel = document.createElement("label");
// var timesupInput = document.createElement("input");
// var timesupbtn = document.createElement("button");


// // set text content for variables
// timesupH1.textContent = "Time's Up!";
// timesupP.textContent = "Your final score is: ";
// timesupLabel.textContent = "Please input your initials: ";
// timesupbtn.textContent = "Submit";

// // set attributes for input
// timesupInput.setAttribute("type", "text");
// timesupInput.setAttribute("id", "initials");
// timesupInput.textContent = "";

// // set atrributes for the timesupbtn
// timesupbtn.setAttribute("type","submit");
// timesupbtn.setAttribute("id","startQuiz");

// // append variables to the div and the label, set some style attributes to improve UX
// divquizQuestions.appendChild(timesupH1);
// timesupH1.style.marginBottom = '60px';
// divquizQuestions.appendChild(timesupP);
// timesupP.style.marginBottom = '60px';
// divquizQuestions.appendChild(timesupLabel);
// timesupLabel.appendChild(timesupInput);
// timesupInput.size = 5;
// divquizQuestions.appendChild(timesupbtn);

// // add event listener for timesupbtn
// timesupbtn.addEventListener("click", function() {
//     //console log comment to set reviewer to code related to the timesupbtn event listener
//     console.log("--------------------------------\nlogs related to timesupbtn event listener :");
//     // create variable for initials
//     var initials = timesupInput.value;
    
//     // force user to enter value
//     if (initials === "") {
//         console.log("* Alert window must show if user clicks submit without initials input.\nUser can't submit the form without that input");
//         alert("Please input your initials");
//     } else {
//         //console log initials var
//         console.log("* Var Initials value: " + initials);
//         //create finalScore var to use for local storage
//         var finalScore = {
//             initials: initials,
//             score: score
//         }
//         //console log finalScore var
//         console.log("* Var final score: " + finalScore.initials);
//     }

// });
