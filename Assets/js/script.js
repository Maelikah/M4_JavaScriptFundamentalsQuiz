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
        choices: ["Compares values", "Compares values and types", "Compares contents", "Compares types"],
        answer: "Compares values and types", 
    },
    //Object 5
    {
        question: "Which of the following is used for debugging?",
        choices: ["prompt", "CSS", "alert", "console log"],
        answer: "console log", 
    },
    //Object 6
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        choices: ["getElementbyId()", "getElementsByClassName()", "Both A and B", "None of the Above"],
        answer: "Both A and B", 
    },    
]; 

// Declare variables that will allow us access the DOM
var mainwrapper = document.querySelector("#wrapper");
var divquizQuestions = document.querySelector("#quizQuestions");
var ulquizList = document.querySelector("#quizUl");
var divquizTimer = document.querySelector("#timer");
var btnstarQuiz = document.querySelector("#startQuiz");

// Create variables to create elements and add some styling:
var quizH2 = document.createElement("h2");
var quizUl = document.createElement("ul");
quizUl.setAttribute("id", "quizUl");
var quizComment = document.createElement("div");
quizComment.setAttribute("id", "quizComment");

// Declare variables for score
var score = 0;
var calculatedScore = 0;
// Declare variable to identify Question Object numbering or order (index)
var qIndex = 0;
// Declare variables related to timer
var timeLeft = 60;
var timeleftInterval = 0;
var timePenalty = 5;
// Display Timer value on header
divquizTimer.textContent = "Time : 00:00";


// Add event listener for Start Quiz button using StartQuiz variable
startQuiz.addEventListener("click", function(){
    divquizTimer.textContent = "Time : 01:00"
    timeleftInterval = setInterval(function() {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0 || qIndex >= quizQuestions.length ) {
            clearInterval(timeleftInterval);
            calculatedScore = Math.round((score *100)/6);
            timesUp();
        } 
        
    },1000);
    
    renderQuestions(qIndex);
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

// Create renderQuestions function that will display the questions
function renderQuestions(qIndex) {
    // Clears existing data 
    divquizQuestions.innerHTML = "";
    btnstarQuiz.remove()
    quizUl.innerHTML = "";

    // For loop to loop through all info in array
    for (var i = 0; i < quizQuestions.length; i++) {
        var displayQuestion = quizQuestions[qIndex].question;
        var displayChoices = quizQuestions[qIndex].choices;
        quizH2.textContent = displayQuestion;
        divquizQuestions.appendChild(quizH2);
    }

    // New for each for question choices
    displayChoices.forEach(function (newItem) {
        var quizLi = document.createElement("li");
        quizLi.setAttribute("id", "quizLi");
        quizLi.textContent = newItem;
        divquizQuestions.appendChild(quizUl);
        quizUl.appendChild(quizLi);
        quizLi.addEventListener("click", (compareAnswers));
    })
};

// Create function to compare the answer chosen by the user (on click event) vs the correct answer
function compareAnswers(event) {
    // Declare variable that will hold the element that triggered the event
    var clickedChoice = event.target;
    if (clickedChoice.matches("li")) {

        // If the clicked option is correct the score increments by 1 and a message with the correct answer is displayed
        if (clickedChoice.textContent == quizQuestions[qIndex].answer) {
            score++;
            quizComment.setAttribute("style", "background-color: var(--answerright)");
            quizComment.textContent = "✔️ You are correct! The answer is:  " + quizQuestions[qIndex].answer;
        // If the clicked option is incorrect, 5 seconds are substracted from the clock and a message with the correct answer is displayed
        } else {
            
            timeLeft = timeLeft - timePenalty;
            quizComment.setAttribute("style", "background-color: var(--answerwrong)");
            quizComment.textContent = "❌ You are incorrect! The answer is:  " + quizQuestions[qIndex].answer;
        }

        // Question index is incremented by one to show the next question to the user
        qIndex++;

        // Call function timesup() if all questions have been answered

        if (qIndex >= quizQuestions.length) {
            calculatedScore = Math.round((score * 100)/6);
            timesUp();
        } else {
            //set 1 second timeout to show correct answer before rendering next question, give back that second to the timeleft
            setTimeout(function() {
                renderQuestions(qIndex);
                quizComment.textContent = "";
            }, 1000);
            timeLeft = timeLeft+1;
            console.log(timeLeft);
        }
        divquizQuestions.appendChild(quizComment);    
        }
};

// Create timesUp function to be used when timer reaches zero
function timesUp() {
    //clear data inside div with quizQuestions id
    divquizQuestions.innerHTML = "";
    //remove the start quiz button
    btnstarQuiz.remove();
    //change bgc when time is up
    mainwrapper.style.backgroundImage = "url('assets/images/tup.png')"; 
    // Set timer to 0 when timeleft - time penalty <= 0
    if (timeLeft-timePenalty <0)  {
        divquizTimer.textContent = "Time : 00:00";
    }

    //Create variables for Elements
    var timesupH1 = document.createElement("h1");
    var timesupP = document.createElement("p");
    var timesupLabel = document.createElement("label");
    var timesupInput = document.createElement("input");
    var timesupbtn = document.createElement("button");

    // set text content for variables
    timesupH1.textContent = "The quiz has ended!";
    timesupP.textContent = "Your final score is: " + calculatedScore + "%";
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
    quizComment.setAttribute("style", "background-color: var(--button)");
    quizComment.textContent = "🏁 You have completed the quiz." + "\n " + "You got  " + score + "/" + quizQuestions.length + " correct questions!";
    divquizQuestions.appendChild(quizComment);

    // add event listener for timesupbtn Submit
    timesupbtn.addEventListener("click", function() {

        // create variable for initials
        var initials = timesupInput.value;
        
        // force user to enter value
        if (initials === "") {
            alert("Please input your initials");
        } else {
            //create finalScore var object to use for local storage
            var finalScore = {
                initials: initials,
                score: calculatedScore
            }
            //console log finalScore var
            console.log("* Var final score:\nInitials: " + finalScore.initials + "\nScore: " + finalScore.score);
        }

        var highScores = localStorage.getItem("highScores");
        if (highScores === null) {
            highScores = [];
        } else {
            highScores = JSON.parse(highScores);
        }
        highScores.push(finalScore);
        //Sort by score
        highScores.sort(function(a,b) {
            return b.score - a.score;
        });

        localStorage.setItem("highScores", JSON.stringify(highScores));

        // var newhighScore= JSON.stringify(highScores);
        // localStorage.setItem("highScores", newhighScore);
        window.location.replace("./highscores.html");
    
    });
}
///////////////////////////////////////////////////////////////////////////////////////

// divquizQuestions.innerHTML = "";
// //btnstarQuiz.remove();
// quizUl.innerHTML = "";
// renderQuestions(qIndex);

