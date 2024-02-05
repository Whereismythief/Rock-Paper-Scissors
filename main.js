// Rock Paper Scissors

// declare variable userChoice as string
var userChoice = '';

//function to make userChoice lowercase for comparison and to ensure valid input

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {
        return userChoice = userInput;
    } else {console.log(` ${userInput} is not a valid selction. try again`)}
    };

getUserChoice('Scissors');

// console log the user selection
console.log(`User selected: ${userChoice}`);

// generate a computer selection
getComputerChoice = function() {
    return Math.floor(Math.random(3) * 3);
};

var getComputerChoicevar = getComputerChoice();


if (getComputerChoicevar === 0) {
    computerChoice = 'rock'
} else if (getComputerChoicevar === 1) {
    computerChoice = 'paper'
} else {computerChoice = 'scissors'};

console.log(`Computer selected: ${computerChoice}`);

// test inputs and comparison
// console.log(userChoice == computerChoice);

var announceResult = '';

// function to compare userChoice and computerChoice and determine winner

function determineWinner(userChoice, computerChoice) {
    if (userChoice == computerChoice) 
    return 'tie';
    else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'The computer wins!';
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'The user wins!';
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'The user wins!';
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'The computer wins!';
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'The user wins!';
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'The computer wins!';
    }
    else if (userChoice === 'bomb') {
        return 'Boom! The user wins!';
    }
};

announceResult = determineWinner(userChoice, computerChoice);

console.log(announceResult);
