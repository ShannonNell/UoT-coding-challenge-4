var root = document.getElementById('root');
var timerEl = document.getElementById('timer');
var highscoresEl = document.getElementById('highscores');
// var headerEl = document.querySelector('.header');
// Main body elements
var mainDiv = document.createElement('div');
var h1El = document.createElement('h1');
var infoEl = document.createElement('p');
var startBtnEl = document.createElement('button');
// Quiz elements
var quizDiv = document.createElement('div');
var h2El = document.createElement('h2');
// var answerUl = document.createElement('ul');
var answerDiv = document.createElement('div');
var answerEl1 = document.createElement('p');
var answerEl2 = document.createElement('p');
var answerEl3 = document.createElement('p');
var answerEl4 = document.createElement('p');


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
mainDiv.setAttribute('style', 'margin: auto; width: 60%; text-align: center');
mainDiv.className = 'mainDiv'; // MAIN STARTING PAGE CLASS
h1El.setAttribute('style', 'font-size: 28px;');
infoEl.setAttribute('style', 'font-size: 24;');
startBtnEl.setAttribute('style', 'background-color: purple; color: #fff;');
startBtnEl.className = 'startBtn'; // START BUTTON CLASS
// Quiz attributes
quizDiv.setAttribute('style', 'margin:auto; width: 50%; border: 3px solid');
quizDiv.className = 'quizDiv'; // QUIZ DIV CLASS
h2El.setAttribute('style', 'font-size: 20px;');
h2El.className = 'h2'; // HEADING 2 CLASS
//answer attributes
answerDiv.setAttribute('style', 'font-size: 16px;');
answerDiv.className = 'answerDiv'; // ANSWER DIV CLASS


//APPEND ELEMENTS
//main append
root.appendChild(mainDiv);
mainDiv.appendChild(h1El);
mainDiv.appendChild(infoEl);
mainDiv.appendChild(startBtnEl);




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
    //removes Main Div and displays question
    mainDiv.remove();
    quizQuestions();
});

// function to present questions
function quizQuestions() {
    //quiz append
    root.appendChild(quizDiv);
    quizDiv.appendChild(h2El);
    quizDiv.appendChild(answerDiv);
    quizDiv.appendChild(answerEl1);
    quizDiv.appendChild(answerEl2);
    quizDiv.appendChild(answerEl3);
    quizDiv.appendChild(answerEl4);

    //Questions
    h2El.textContent = 'Commonly used data types DO NOT include:';
    answerEl1.textContent = '1: Strings';
    answerEl2.textContent = '2: Booleans'; 
    answerEl3.textContent = '3: Alerts'; 
    answerEl4.textContent = '2: Numbers'; 
    
    // '3: Alerts', '4: Numbers';
    //for loop to loop through all the questions
    // for (var i = 0; i < questions.length; i++) {
        // var answer = questions[i].q;
    // }
};

// TODO: When answer question, presented with another question

// TODO: If question answered wrong, time subtracted from clock

// TODO: When timer at 0 or questions answered, game over

// TODO: When game over, save initials and score
