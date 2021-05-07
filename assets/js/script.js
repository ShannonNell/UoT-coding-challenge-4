var body = document.body;

//CREATE ELEMENTS
    // - header to hold Highscores and Time countdown
    // - div to hold coding challenge quiz
        // - h1 : Coding Quiz Challenge
        // - p : Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penilize your screentime by ten seconds!
        // - button : start quiz
    // - div to hold quest1
        // - h2 : Commonly used data types DO NOT include:
        // - ul : 
        // - li : 1. Strings 2. Booleans 3. Alerts 4. Numbers
            // answer 3 alerts
        // - border with wrong/correct underneath?
    // - quest2
        // - h2 : The condition in an if/else statement is enclosed within _______.
        // - ul : 
        // - li : 1. Quotes 2. Curly Brackets 3. Parentheses 4. Square Brackets
            // answer: 3 parentheses
        // - border with wrong/correct underneath?
    // - quest3
        // - h2 : Arrays in JavaScript can be used to store _______.
        // - ul : 
        // - li : 1. Numbers and strings 2. Other Arrays 3. Booleans 4. All of the above
            // answer: 4 All of above
        // - border with wrong/correct underneath?
    // - quest4
        // - h2 : String values must be enclosed within _______ when being assigned to variables.
        // - ul : 
        // - li : 1. Commas 2. Curly Brackets 3. Quotes 4. Parentheses
            // answer: 3 quotes
        // - border with wrong/correct underneath?
    // - quest5
        // - h2 : A very useful tool used during development and debugging for printing content to the debugger is:
        // - ul : 
        // - li : 1. JavaScript 2. Terminal/Bash 3. For loops 4. Console.log
            // answer: 3 quotes
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

//HEADER ELEMENTS
var headerEl= document.createElement('header');
var highScoreEl = document.createElement('p');
var timeEl = document.createElement('p');

// TEXT/content
//header text content
highScoreEl.textContent = 'View High Scores';
timeEl.textContent = 'Time: 0' //+ timer

//SET ELEMENT ATTRIBUTES
//header attributes
headerEl.setAttribute('style', 'display: flex; justify-content: space-between; font-size: 16px; padding-right:5px;');
highScoreEl.setAttribute('id', 'highscore') // do I need a #?
timeEl.setAttribute('style', 'font-weight: bold');
timeEl.setAttribute('id', 'timeCounter'); // do I need a # infront of timeCounter?

//APPEND ELEMENTS
//header append elements
body.appendChild(headerEl);
headerEl.appendChild(highScoreEl);
headerEl.appendChild(timeEl);

// TODO: When click start button, timer starts and question is presented

// TODO: When answer question, presented with another question
// TODO: If question answered wrong, time subtracted from clock

// TODO: When timer at 0 or questions answered, game over

// TODO: When game over, save initials and score
