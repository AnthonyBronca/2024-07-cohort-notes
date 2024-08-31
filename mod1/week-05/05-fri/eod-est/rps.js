const random = require('getrandomjs');

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let playerName;

const leaderBoard = {
    userWins: 0,
    aiWins: 0,
    tie: 0
};

// result should be userWins, aiWins, tie
function leaderBoardFunc(result) {
    leaderBoard[result]++;
}

function printUserName(){
    console.log(`Welcome, ${playerName}`);
}


// check if we have a good selection
function checkSelection(selection){
    const validChoices = ["rock", "paper", "scissors", "r", "s", "p"];
    if(validChoices.includes(selection)){
        return true;
    } else{
        console.log("You did not pass in a valid selection. Please try again");
        return false;
    }
}

function computerFunctionality(){
    const validChoices = ["rock", "paper", "scissors"];
    return random(validChoices);
}

function playAgain(){
    let userAnswer;
    rl.question("Do you want to play again?: Yes(Y)/ No(N)   ", (answer)=>  {
        userAnswer = answer.toLowerCase();
        if(userAnswer === "yes" || userAnswer === "y"){
            console.clear();
            printUserName();
            console.log(`Win: ${leaderBoard.userWins} |  Loss: ${leaderBoard.aiWins} | Tie: ${leaderBoard.tie}`);
            rockPaperScissorsQuestion();
        } else{
            leaderBoardFunc();
            rl.close();
        }
    })
}



function rockPaperScissorsQuestion(){
    rl.question("Select Rock(R), Paper(P), Scissors(S):     ", (selection) => {
        console.clear();
        printUserName()
        let lowerCaseSelection = selection.toLowerCase();
        const isGoodSelection = checkSelection(lowerCaseSelection);
        if(!isGoodSelection){
            return rockPaperScissorsQuestion();
        } else{
            const computerSelection = computerFunctionality();
            console.log(`You selected: ${lowerCaseSelection} | The Computer selected ${computerSelection}`);
            const outcome = checkWinCondition(lowerCaseSelection, computerSelection); // win - 3 | loss - 1 | tie - 2
            if(outcome === 3){ // win
                // fireworks("Congrats!")
                leaderBoardFunc("userWins")
                playAgain()
            } else if(outcome === 2){ // tie
                leaderBoardFunc("tie")
                playAgain()
            } else{ // lose
                leaderBoardFunc("aiWins")
                playAgain()
            }


        }
    })
}

function checkWinCondition(userSelection, aiSelection){
    if(userSelection === "r") userSelection = "rock";
    if(userSelection === "p") userSelection = "paper";
    if(userSelection === "s") userSelection = "scissors";

    const winConditions = {
        rock: {
            win: "scissors",
            lose: "paper"
        },
        paper: {
            win: "rock",
            lose: "scissors"
        },
        scissors: {
            win : "paper",
            lose: "rock"
        }
    }

    // check if we have a tie
    if(userSelection === aiSelection){
        console.log("That was anticlimatic. That was a tie.");
        return 2;
    } else if(winConditions[userSelection].win === aiSelection){
        console.log("You won!!");
        return 3;
    } else{
        console.log("You lose!! HA LOSER!!");
        return 1;
    }

}


(function init(){
    console.clear()

    rl.question("Please enter your name:    ", (name) => {
        playerName = name;
        console.clear();
        printUserName()
        rockPaperScissorsQuestion();
    })

})()


// function init(){

// }

// init()
