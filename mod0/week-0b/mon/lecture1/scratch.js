const random = require("getrandomjs")

// console.log(4 === 4) // true
// console.log(4 !== 4); // false


// let num1 = 4;
// let num2 = 6;


// function isEven(num1, num2){
//     console.log((num1 % 2 === 0), "first half");
//     console.log((num2 % 2 === 0), "second half")
//     return ((num1 % 2 === 0)  (num2 % 2 === 0));
// }

// console.log(isEven(num1, num2))



// write a function that returns true if a number is odd
// function isOdd(num1){
//     return num1 % 2 !== 0
// }

// console.log(isOdd(5))



// ** LOGICAL CONDITIONAL OPERATIONS **

// // true
// if (false){
//     console.log("hello world")
// } else if(2 % 2 === 0){
//     console.log("we are in the else if")
// } else{
//     console.log("odd number")
// }


// if("brown hair"){
//     console.log(["anthony", "sam"])
// } else if("red shirt"){
//     console.log(["anthony"])
// } else if("white shoes"){
//     console.log([])
// } else {
//     //
// }

// console.log("could not find who we are looking for")
// let myNum = "2";

// let answer = undefined;


// if(myNum === 5){
//     answer = 5;
// } else if(myNum > 5){
//     answer = "greater than 5";
// } else if(myNum === "5"){
//     answer = "myNumber is odd"
// } else if(myNum < 0){
//     answer = "negative number"
// } else{
//     answer = "N/A"
// }

// console.log(answer)








// ROCK PAPER SCISSORS
// ROCK > SCISSORS
// SCISSORS > PAPER
// PAPER > ROCK

let computerSelection = random(["rock", "paper", "scissors"])


function rps(selection, computerSelection){
    if(selection ===  "rock" && computerSelection === "scissors"){
        console.log(`You picked: ROCK, CPU Picked ${computerSelection} --  You Win`);
    } else if(selection === "paper" && computerSelection === "rock"){
        console.log(`You picked: PAPER, CPU Picked ${computerSelection} --  You Win`);
    } else if (selection === "scissors" && computerSelection === "paper"){
        console.log(`You picked: SCISSORS, CPU Picked ${computerSelection} --  You Win`);
    } else if( selection === "paper" && computerSelection === "scissors"){
        console.log(`You picked: PAPER, CPU Picked ${computerSelection} --  You LOSEEEE!!`);
    } else if( selection === "scissors" && computerSelection === "rock"){
        console.log(`You picked: SCISSORS, CPU Picked ${computerSelection} --  You LOSEEEE!!`);
    } else if( selection === "rock" && computerSelection === "paper"){
        console.log(`You picked: ROCK, CPU Picked ${computerSelection} --  You LOSEEE!!`);
    } else if(selection === computerSelection){
        console.log(`You picked: ${selection}, CPU Picked ${computerSelection} -- YOU DRAW!!!`)
    } else{
        console.log("you did not pass in a valid selection")
    }
}

console.log(computerSelection, "this is computer selection")

rps("rock", computerSelection)
