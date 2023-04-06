// Declare variables that will allow us access the DOM
var hScoresWrapper = document.querySelector("#wrapper");
var hScoresDiv = document.querySelector("#quizQuestions");
var HScoresUl = document.querySelector("#quizUl");
var hScoresBackBtn = document.querySelector("#back");
var hScoresClearBtn = document.querySelector("#clear");
// Create variables for Elements

var hScoresUl = document.createElement("ul");


//Change main wrapper background
hScoresWrapper.style.backgroundImage = "url('assets/images/hsbgc.jpg')"; 


// Retrieve highscores from local storage
var highScores = localStorage.getItem("highScores");
highScores = JSON.parse(highScores);

if (highScores !== null) {
    for (var i = 0; i<highScores.length; i++) {
        var hScoresLi = document.createElement("li");
        hScoresLi.setAttribute("id", "hScoresLi");
        hScoresLi.textContent = highScores[i].initials + " ---------- " + highScores[i].score +"%";
        hScoresDiv.appendChild(hScoresLi);
    }
    
}

// Add event listener for Back button
hScoresBackBtn.addEventListener("click", function() {
    window.location.replace("./index.html");
});

// Add event listener for Clear button
hScoresClearBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

