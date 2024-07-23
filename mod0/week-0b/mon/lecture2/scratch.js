const random = require('getrandomjs');
// console.log(true !== false);


// console.log(2 !== 2);

// console.log(true);


// console.log(true && false)


// let num1 = 5;
// let randomVar = true;

// console.log(true ^ true);


// let num1 = 2;
// let num2 = 5;



// function bothAreEven(n1, n2){
//     return ((n1 % 2 === 0) (n2 % 2 === 0))
// }


// console.log(bothAreEven(num1, num2))

// let desiredBrand = "awdawdawdwaqd"
// let storeSauce = "RAGU";

// go to the grocery, and buy prego. if they dont have it, get publix brand,
// if they dont have that buy RAGU


// if(desiredBrand === storeSauce ){
//     console.log("you bought prego");
// } else if (desiredBrand === "publix"){
//     console.log("you bought publix brand")
// } else {
//     console.log("you bought RAGU")
// }




// ROCK PAPER SCISSORS
// ROCK > SCISSORS
// SCISSORS > PAPER
// PAPER > ROCK
// console.clear()


function rps(selection, computerSelection){
    if(selection === "rock" && computerSelection === "scissors"){
        console.log(`YOU SELECTED ROCK, CPU SELECTED ${computerSelection} -- YOU WIN`)
        return 1;
    } else if(selection === "rock" && computerSelection === "paper"){
        console.log(`YOU SELECTED ROCK, CPU SELECTED ${computerSelection} -- YOU LOSE`)
        return 2;
    } else if(selection === "paper" && computerSelection === "rock"){
        console.log(`YOU SELECTED paper, CPU SELECTED ${computerSelection} -- YOU WIN`)
        return 1;
    } else if(selection === "paper" && computerSelection === "scissors"){
        console.log(`YOU SELECTED paper, CPU SELECTED ${computerSelection} -- YOU LOSE`)
        return 2;
    } else if(selection === "scissors" && computerSelection === "paper"){
        console.log(`YOU SELECTED paper, CPU SELECTED ${computerSelection} -- YOU WIN`)
        return 1;
    } else if(selection === "scissors" && computerSelection === "rock"){
        console.log(`YOU SELECTED paper, CPU SELECTED ${computerSelection} -- YOU LOSE`)
        return 2;
    } else if(selection === computerSelection){
        console.log(`YOU SELECTED ${selection}, CPU SELECTED ${computerSelection} -- YOU DRAW!!!`)
        return 3;
    }else {
        console.log("YOU DID NOT PASS IN A VALID SELECTION");
    }
}

rps(computer2, computerMove);

// let weWin = 0;
// let computerWin = 0;
// let draw = 0;

// while(true){
//     let computerMove = random(["rock", "paper", "scissors"])
//     let computer2 = random(["rock", "paper", "scissors"]);
//     if(result === 1){
//         weWin ++
//     } else if(result === 2){
//         computerWin++
//     } else{
//         draw++
//     }
//     console.log(`WE WIN: ${weWin} | COMPUTER WIN: ${computerWin} | DRAW: ${draw}`)

// }
