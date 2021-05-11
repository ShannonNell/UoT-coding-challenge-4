var root = document.getElementById('root');
var timerEl = document.getElementById('timer');
var highscoresEl = document.getElementById('highscores');
//main
var mainDiv = document.querySelector('.mainDiv');
var startBtn = document.querySelector('.startBtn');
//quiz
var quiz = document.querySelector('.quiz');
var question = document.querySelector('.question');
var choices = document.getElementById('choices');
var choice = document.getElementById('choice');
var choice1 = document.getElementById('ch1');
var choice2 = document.getElementById('ch2');
var choice3 = document.getElementById('ch3');
var choice4 = document.getElementById('ch4');
//answer
var checkAnsDiv = document.querySelector('.checkAnswer');
//game over
var finishGame = document.querySelector('.finishGame');
var finishedText = document.querySelector('.finishedText');
var finalScoreInfo = document.getElementById('finalScoreInfo');
var submitBtn = document.getElementById('submitBtn');


//array of questions to loop through
var questions = [
    { 
        q1: 'Commonly used data types DO NOT include:', 
        a1: 'Strings',
        a2: 'Booleans',
        a3: 'Alerts - CORRECT', 
        a4: 'Numbers',
        correctAnswer: 'ch3'
    },
    { 
        q1: 'The condition in an if/else statement is enclosed within _______.', 
        a1: 'Quotes',
        a2: 'Curly Brackets',
        a3: 'Parentheses - CORRECT', 
        a4: 'Square Brackets',
        correctAnswer: 'ch3'
    },
    { 
        q1: 'Arrays in JavaScript can be used to store _______.', 
        a1: 'Numbers and Strings',
        a2: 'Other Arrays',
        a3: 'Booleans', 
        a4: 'All of the Above - CORRECT',
        correctAnswer: 'ch4'
    },
    { 
        q1: 'String values must be enclosed within _______ when being assigned to variables.', 
        a1: 'Commas',
        a2: 'Curly Brackets',
        a3: 'Quotes - CORRECT', 
        a4: 'Parentheses',
        correctAnswer: 'ch3'
    },
    { 
        q1: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
        a1: 'JavaScript',
        a2: 'Terminal/Bash',
        a3: 'For loops', 
        a4: 'Console.log - CORRECT',
        correctAnswer: 'ch4'
    },
];


// global variables
var timeInterval;
var timeLeft = 75;
var lastQuest = questions.length - 1;
var currentQuest = 0;


// start quiz function
startBtn.addEventListener('click', function() {
    //timer starts
    timeInterval = setInterval(function() {
        //if time left still
        if(timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--; 
        }
        //if no time left
        else {
            timerEl.textContent = 'Time: ' + timeLeft;
            clearInterval(timeInterval);
            gameOver();
        }    
    }, 1000);
    //question appears
    mainDiv.style.display = 'none';
    quiz.style.display = 'block';
    //question function runs
    quizQuestions();
}); 

 
// function to present questions
function quizQuestions() {
    // curent question will equal my questions array's current index number, starting at 0
    var quest = questions[currentQuest];

    question.textContent = quest.q1;
    choice1.textContent = '1. ' + quest.a1;
    choice2.textContent = '2. ' + quest.a2;
    choice3.textContent = '3. ' + quest.a3;
    choice4.textContent = '4. ' + quest.a4;
};



// check answer
function checkAnswer(answer) {
    //check if user answer matches correct answer
    if(answer === questions[currentQuest].correctAnswer){
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    //if there are still more questions, go to next question
    if(currentQuest < lastQuest) {
        currentQuest++;
        quizQuestions();
    //if there are no more questions, display end/ game over
    } else {
        timerEl.textContent = 'Time: ' + timeLeft;
        clearInterval(timeInterval);
        gameOver();
    }
}

function answerIsCorrect() {
    checkAnsDiv.textContent = 'Correct!';
    checkAnsDiv.style.display = 'block';
;}

function answerIsWrong() {
    checkAnsDiv.textContent = 'Wrong!';
    checkAnsDiv.style.display = 'block';
    timeLeft = timeLeft - 10;
};

// Game over function
var finalScore = 0;
function gameOver() {
    checkAnsDiv.style.display = 'none';
    quiz.style.display = 'none';

    finishGame.style.display = 'block';
    finishedText.textContent = 'All done!';
    finalScoreInfo.textContent = 'Your final score is ' + timeLeft;

}


// TODO: When game over, save initials and score
