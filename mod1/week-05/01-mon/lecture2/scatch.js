
// truthy falsy
// let name = "anthony";

// if(name){
//     console.log("we hit the true");
// } else {
//     console.log("we hit the false");
// }



// recursion

/*

Recursion is made up of 3 distict parts

1. base case -> the condition where we want to stop some sort loop
    -> when dormamew accepts a bargain
2. recursive case -> What do you want to do during the loop -> recursive call
    -> when dormamew is not accepting bargain
        check the wrist for time spell
        yell dormamew's name
3. recursive step -> how do we get from point a -> to our base case
    -> keep dying until you get dormaemew to be tired

*/


// write a function that prints a number until we get to 100.

// function recursivePrintNum(currNum){
//     // base case
//     debugger
//     if(currNum > 4) return;
//     // recursive case
//     console.log(currNum)
//     // recursive step
//     return recursivePrintNum(++currNum);
// }

// recursivePrintNum(0);

/*

abbreviate recursivePrintNum -> RPN

RPN 1-> num = 0
    RPN 2 -> num = 1
        RPN 3 -> num = 2
            RPN 4 -> num = 3
                RPN 5 -> num = 4
            RPN 5 -> returns undefined
        RPN 4 -> returns undefined
    RPN 3 -> returns undefined
RPN 2 -> returns undefined

RPN1 -> return undefined

*/


// write a function that prints every letter from a provided string

// let name = "anthony";


// function recursivePrintName(str){
//     // base case
//     if(!str) return;
//     // recursive
//     console.log(str[0]);
//     // recursive step
//     let newStr = str.slice(1);
//     return recursivePrintName(newStr);

// }

// recursivePrintName(name);


// write a function that will return true if an array has the number 50 in it, and false if it does not


// function findFifty(arr){
//     // base case 1:
//     if(arr[0] === 50) return true;
//     // base case 2:
//     if(arr.length === 0) return false;
//     // recursive case
//     // recursive step
//     arr.pop();
//     // recursive call
//     return findFifty(arr);

// }

// const arr = [1,2,3,10,15,60,32,75,50,100,99,777,44,14,119]; // true
// console.log(findFifty(arr));





// write a function that checks if a favorite flavor of ice cream is sold at an icecream store

const iceCreamFlavors = ["mint", "chocolate", "vanilla", "neopolitan", "rocky road", "double chocolate", "dulce de leche"];
const anthonyfavorite = "pistachio";


const hasFavoriteIcecream = (flavors, fav) => {
    // base case: if we found the favorite
    if(flavors[0] === fav) return true;

    // base case 2: if dont have the flavors in the array
    if(flavors.length === 0) return false;
    // recursive case
    // recursive step - make the array smaller
    flavors.shift(); // mutates the array of flavors
    return hasFavoriteIcecream(flavors, fav);
}

console.log(hasFavoriteIcecream(iceCreamFlavors, anthonyfavorite))
