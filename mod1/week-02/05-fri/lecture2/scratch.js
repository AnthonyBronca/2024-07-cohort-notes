/*

Let's build some cool code. We want to build a function that can take a list of string.
It will tell us if the string is a color from a provided list. We also want to remove any duplicate colors.

The function should return a list of only colors from the allowed list.

Example:

colors = ["red", "white", "blue"]

test1 = ["orange", "banana", "white", "white", "green"] -> ["white"]

Explanation:
- Orange, White, and Green are all colors, but only "white" is is listed as a provided color.
- there are two "white" strings provided, so our solution will only have 1 "white"

*/



let colors = ["red", "white", "blue"];

// helper func
function isInColors(colorToCheck){
    return colors.includes(colorToCheck);
}


// main func
function colorsInColors(arrOfColors, myFunc){
    let res = [];
    for(let color of arrOfColors){
        if(myFunc(color)){
            if(!res.includes(color)){
                res.push(color);
            }
        }
    }
    return res;
}



// DO NOT DELETE THIS TEST
let test1 = ["orange", "green", "blue", "white", "yellow", "black", "blue", "orange", "green"];
console.log(colorsInColors(test1, isInColors))
// console.log(isInColors("white", test1))
// ["blue", "white"]
