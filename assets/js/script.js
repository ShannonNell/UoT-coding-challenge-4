var root = document.getElementById('root');
var timerEl = document.getElementById('timer');
var highscoresEl = document.getElementById('highscores');
//main
var mainDiv = document.querySelector('.mainDiv');
var startBtn = document.querySelector('.startBtn');
//quiz
var quiz = document.querySelector('.quiz');
var question = document.querySelector('.question');
var choice1 = document.getElementById('ch1');
var choice2 = document.getElementById('ch2');
var choice3 = document.getElementById('ch3');
var choice4 = document.getElementById('ch4');



//array of questions to loop through
var questions = [
    { q1: 'Commonly used data types DO NOT include:', 
        a1: {
            1: 'Strings',
            2: 'Booleans',
            3: 'Alerts', 
            4: 'Numbers',
        },
        correctAnswer: '3'
    },
    { q2: 'The condition in an if/else statement is enclosed within _______.', 
        a1: {
            1: 'Quotes',
            2: 'Curly Brackets',
            3: 'Parentheses', 
            4: 'Square Brackets',
        },
        correctAnswer: '3'
    },
    { q3: 'Arrays in JavaScript can be used to store _______.', 
        a1: {
            1: 'Numbers and Strings',
            2: 'Other Arrays',
            3: 'Booleans', 
            4: 'All of the Above',
        },
        correctAnswer: '4'
    },
    { q4: 'String values must be enclosed within _______ when being assigned to variables.', 
        a1: {
            1: 'Commas',
            2: 'Curly Brackets',
            3: 'Quotes', 
            4: 'Parentheses',
        },
        correctAnswer: '3'
    },
    { q5: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
        a1: {
            1: 'JavaScript',
            2: 'Terminal/Bash',
            3: 'For loops', 
            4: 'Console.log',
        },
        correctAnswer: '4'
    },
];


// TODO: When click start button, timer starts and question is presented
var timeInterval;
var timeLeft = 75;
// timer countdown function
startBtn.addEventListener('click', function() {
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
    //removes Main Div and displays question
    mainDiv.remove();
    // quizQuestions();
}); 

// function to present questions
function quizQuestions() {

};

// TODO: When answer question, presented with another question

// TODO: If question answered wrong, time subtracted from clock

// TODO: When timer at 0 or questions answered, game over

// TODO: When game over, save initials and score
