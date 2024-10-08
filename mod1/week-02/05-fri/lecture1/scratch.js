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


function isPartOfArr(arr, item){
    return arr.includes(item);
}

function getGoodColors(testColors, myIncludes){
    let res = [];
    for(let color of testColors){
        if(myIncludes(colors, color)){
            if(!myIncludes(res, color)){
                res.push(color);
            }
        }
    }
    return res;
}


// console.log(isPartOfArr(["red", "white", "blue"], "orange"))




// DO NOT DELETE THIS TEST
let test1 = ["orange", "green", "blue", "white", "yellow", "black", "blue", "orange", "green"];
console.log(getGoodColors(test1, isPartOfArr))
// ["blue", "white"]
