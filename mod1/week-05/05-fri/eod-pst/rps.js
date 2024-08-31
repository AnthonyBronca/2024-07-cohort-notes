const random = require("getrandomjs");

const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let username;

const leaderBoard = {
    userWins: 0,
    aiWins: 0,
    ties: 0
}

function updateLeaderBoard(updateKey){
    leaderBoard[updateKey]++;
}

function printLeaderBoard(){
    console.log(`Wins: ${leaderBoard.userWins} | Loss: ${leaderBoard.aiWins} | Ties: ${leaderBoard.ties}`);
}


function printUsername(){
    console.log(`Welcome, ${username}`);
}

function checkSelection(selection){

    const validSelection = ["rock", "paper", "scissors", "r", "s", "p"];

    if(validSelection.includes(selection)){
        return true;
    } else{
        return false;
    }
}

function aiSelection(){
    const validSelections = ["rock", "paper", "scissors"];
    return random(validSelections);
}


function checkWinCondition(userSelection, aiSelection){
    const winSelection = {
        rock: {
            win: "scissors",
            lose: "paper"
        },
        paper: {
            win: "rock",
            lose: "scissors"
        },
        scissors: {
            win: "paper",
            lose: "rock"
        }
    };

    if(userSelection === aiSelection){
        return 2
    } else if(winSelection[userSelection].win === aiSelection){
        return 3
    } else{
        return 1
    }
}

function playAgain(){
    rl.question(`Play Again?  Yes(y)/ No(n):        `, (userInput) => {
        let lowerCaseUserInput = userInput.toLowerCase();
        if(lowerCaseUserInput === "yes" || lowerCaseUserInput === "y"){
            // play again
            console.clear();
            printUsername();
            rockPaperScissors();
        } else{
            rl.close();
        }
    });
}

function rockPaperScissors(){
    rl.question(`Rock(R), Paper(P), Scissors(S)?:    `, (userSelection) => {
        let lowerCaseSelection = userSelection.toLowerCase();
        if(lowerCaseSelection === "r") lowerCaseSelection = "rock";
        if(lowerCaseSelection === "p") lowerCaseSelection = "paper";
        if(lowerCaseSelection === "s") lowerCaseSelection = "scissors";
        const isValidSelection = checkSelection(lowerCaseSelection);
        if(isValidSelection){
            // todo keep playing game
            console.clear();
            printUsername();
            printLeaderBoard();
            // grab the ai selection
            const aiChoice = aiSelection();
            console.clear();
            const results = checkWinCondition(lowerCaseSelection, aiChoice);
            // results -> 1 = lose | results -> 2 = tie | results -> 3 = win
            console.log(`You selected ${lowerCaseSelection} | AI selected: ${aiChoice}`);
            if(results === 3 ){
                // key will be userWins, aiWins, ties
                console.log("You win");
                updateLeaderBoard("userWins")
            } else if(results === 2){
                console.log("This was a tie");
                updateLeaderBoard("ties")
            } else{
                console.log("the ai wins");
                updateLeaderBoard("aiWins");
            }
            printLeaderBoard();
            playAgain();

        } else{
            console.clear();
            console.log("You did not pick a valid selection. Try again")
            rockPaperScissors();
        }
    });
}



(function init(){

    console.clear();
    rl.question(`Enter a username:   `, (userInput) => {
        username = userInput;
        console.clear();
        printUsername();
        printLeaderBoard();
        rockPaperScissors();
    });


})();
