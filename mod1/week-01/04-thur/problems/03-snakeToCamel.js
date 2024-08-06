/*

Write a function called snakeToCamel that will take in a snake cased string and turn it into camel casing.

Snake case is words seperated by underscores
Example: hello_how_are_you

Camel case is words seperated by capital cased first letter of every word starting at the 2nd word
Example: helloHowAreYou

The function should also return a string that says "Not a valid string." if a non-string data-type is passed in.


*/



/*
1. create a function called snakeToCamel that will take in a snake cased string
2. turn the string into an array -> get rid of the underscore
3. iterate through the array of words
    3a. starting at word index 1, check the first letter
        - uppercase the letter and store it back into the word
4. after all iterations, turn the array back into a string


*/


// let snakeToCamel = function(snakeStr){
//     if (typeof snakeStr !== "string") {
//         return "Not a valid string."
//     }
//     let strArr = snakeStr.split("_");
//     for(let i = 1; i < strArr.length; i++){
//         let word = strArr[i];
//         // console.log(word);
//         let wordArr = word.split("");
//         wordArr[0] = wordArr[0].toUpperCase()
//         let camelCaseWord = wordArr.join("");
//         strArr[i] = camelCaseWord;
//     }

//     return strArr.join("")
// }


// function snakeToCamel(snakeStr) {
//     if(typeof snakeStr !== "string"){
//         return "Not a valid string."
//     }

//     let strArr = snakeStr.split("_");
//     for(let i = 1; i < strArr.length; i++){
//         let word = strArr[i];
//         let firstLetter = word[0].toUpperCase();
//         let restOfWord = word.slice(1);
//         let camelCaseWord = firstLetter + restOfWord;
//         strArr[i] = camelCaseWord
//     }

//     return strArr.join("")
// }




// Try not to turn it into an array

function snakeToCamel(snakeStr){
    if(typeof snakeStr !== "string"){
        return "Not a valid string.";
    }

    let res = "";
    let wordIndex = 1;
    let doUppercase = false;

    for(let letter of snakeStr){
        if(letter === "_"){
            wordIndex ++
            doUppercase = true;
        } else{
            if(doUppercase === true){
                res += letter.toUpperCase();
            } else{
                res+= letter
            }
            doUppercase = false;
        }
    }

    return res;
}

// console.log(snakeToCamel("hello")); // hello
console.log(snakeToCamel("hello_how_are_you")); // helloHowAreYou
// console.log(snakeToCamel("do_you_want_to_build_a_snowman")); // doYouWantToBuildASnowman
// console.log(snakeToCamel(3)); // Not a valid string.
