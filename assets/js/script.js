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




//array of questions to loop through
var questions = [
    { 
        q1: 'Commonly used data types DO NOT include:', 
        a1: 'Strings',
        a2: 'Booleans',
        a3: 'Alerts', 
        a4: 'Numbers',
        correctAnswer: '3'
    },
    { 
        q2: 'The condition in an if/else statement is enclosed within _______.', 
        a1: 'Quotes',
        a2: 'Curly Brackets',
        a3: 'Parentheses', 
        a4: 'Square Brackets',
        correctAnswer: '3'
    },
    { 
        q3: 'Arrays in JavaScript can be used to store _______.', 
        a1: 'Numbers and Strings',
        a2: 'Other Arrays',
        a3: 'Booleans', 
        a4: 'All of the Above',
        correctAnswer: '4'
    },
    { 
        q4: 'String values must be enclosed within _______ when being assigned to variables.', 
        a1: 'Commas',
        a2: 'Curly Brackets',
        a3: 'Quotes', 
        a4: 'Parentheses',
        correctAnswer: '3'
    },
    { 
        q5: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
        a1: 'JavaScript',
        a2: 'Terminal/Bash',
        a3: 'For loops', 
        a4: 'Console.log',
        correctAnswer: '4'
    },
];

// global variables
var timeInterval;
var timeLeft = 75;
var lastQuest = questions.length - 1;
var currentQuest = 0;


// function to present questions
function quizQuestions() {
    // curent question will equal my questions array's current index number, starting at 0
    var quest = questions[currentQuest];

    question.textContent = quest.q1;
    choice1.textContent = '1. ' + quest.a1;
    choice2.textContent = '2. ' + quest.a2;
    choice3.textContent = '3. ' + quest.a3;
    choice4.textContent = '4. ' + quest.a4;
    console.log(choice1);
    console.log(choice2);
    console.log(choice3);
    console.log(choice4);

};


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
    mainDiv.style.display = 'none';
    quiz.style.display = 'block';
    quizQuestions();
}); 


// TODO: When answer question, presented with another question
// TODO: If question answered wrong, time subtracted from clock
function checkAnswer(answer) {
    //check if user answer matches correct answer
    if(questions[currentQuest].correctAnswer == answer){
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    //if there are still more questions, go to next question
    if(currentQuest < lastQuest) {
        currentQuest++;
    //if there are no more questions, display end/ game over
    } else {
        gameOver();
    }
}


// TODO: When timer at 0 or questions answered, game over
//gameOver();
// answerIsCorrect();
// answerIsWrong();

// TODO: When game over, save initials and score
