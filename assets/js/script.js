var root = document.getElementById('root');
var timerEl = document.getElementById('timer');
var highscoresEl = document.getElementById('highscores');
// var headerEl = document.querySelector('.header');
// Main body elements
var quizDiv = document.createElement('div');
var h1El = document.createElement('h1');
var infoEl = document.createElement('p');
var startBtnEl = document.createElement('button');


//array of questions to loop through
var questions = [
    `{ q1: "Commonly used data types DO NOT include:", a1: "1. Strings", a2: "2. Booleans", a3: "3. Alerts", a4: "Numbers" }`, //answer: 3. alerts
    `{ q2: "The condition in an if/else statement is enclosed within _______.", a1: "1. Quotes", a2: "2. Curly Brackets", a3: "3. Parentheses", a4: "Square Brackets" }`, //3 parentheses
    `{ q3: "Arrays in JavaScript can be used to store _______.", a1: "1. Numbers and strings", a2: "2. Other Arrays", a3: "3. Booleans", a4: "All of the Above" }`, // 4 all above
    `{ q4: "String values must be enclosed within _______ when being assigned to variables.", a1: "1. Commas", a2: "2. Curly Brackets", a3: "3. Quotes", a4: "Parentheses" }`, //3 quotes
    `{ q5: "A very useful tool used during development and debugging for printing content to the debugger is:", a1: "1. JavaScript", a2: "2. Terminal/Bash", a3: "3. For Loops", a4: "Console.log" }`, //4 console.log
];
// - border with wrong/correct underneath?
    
    // - div for all done 
        // - h3 : All done!
        // - p : Your final score is + score
        // - p : Enter initials: 
        // - text field : empty
        // - button : submit
    // - div for High score
        // - h4 : Highscores
        // - p listing high scores, alternating color for box fill 
        // - button : go back
        // - button : Clear Highscores

// TEXT/content
// Main body Text
h1El.textContent = 'Coding Quiz Challenge';
infoEl.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your screentime by ten seconds!';
startBtnEl.textContent = 'Start Quiz';



//SET ELEMENT ATTRIBUTES
//Main body attributes
quizDiv.setAttribute('style', 'margin: auto; width: 60%; text-align: center');
quizDiv.className = 'quizDiv'; // QUIZ STARTING PAGE ID
h1El.setAttribute('style', 'font-size: 28px;');
infoEl.setAttribute('style', 'font-size: 24;');
startBtnEl.setAttribute('style', 'background-color: purple; color: #fff;');
startBtnEl.className = 'startBtn'; // START BUTTON ID



//APPEND ELEMENTS
//main append
root.appendChild(quizDiv);
quizDiv.appendChild(h1El);
quizDiv.appendChild(infoEl);
quizDiv.appendChild(startBtnEl);



// TODO: When click start button, timer starts and question is presented
var timeInterval;
var timeLeft = 75;
// timer countdown function
startBtnEl.addEventListener('click', function() {
    timeInterval = setInterval(function() {
        if(timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--; 
        }
        else {
            timerEl.textContent = 'Time: ' + timeLeft;
            clearInterval(timeInterval);
        }    
    }, 1000);
});

// TODO: When answer question, presented with another question
function quizQuestions() {

}
// TODO: If question answered wrong, time subtracted from clock

// TODO: When timer at 0 or questions answered, game over

// TODO: When game over, save initials and score
