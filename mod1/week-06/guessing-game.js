const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let secretNumber = 0;
let numAttempts = 0;

function askRange() {
    rl.question("Enter a minimum: ", min => {
        rl.question("Enter a maximum: ", max => {
            secretNumber = randomInRange(Number(min), Number(max));
            console.log(`I'm thinking of a number between ${min} and ${max}...\n\n`)
            
            askGuess();
        })
    })
}
function askLimit() {
    rl.question("How many guesses? ", limit => {
        numAttempts = Number(limit);
        askRange();
    })
}


function checkGuess(guess) {
    if (guess < secretNumber) {
        console.log('Too Low')
    } else if (guess > secretNumber) {
        console.log('Too High');
    } else {
        console.log('Correct!');
        return true;
    }

    return false;
}

function askGuess() {
    rl.question("Enter a guess: ", ans => {
        numAttempts--;
        let isCorrect = checkGuess(Number(ans));

        if (isCorrect) {
            console.log('\n\nYou Win!')
            rl.close();
        } else if (numAttempts <= 0) {
            console.log('\n\nOut of Attempts')
            rl.close();
        }else {
            askGuess();
        }
    })
}

askLimit();