

// function declaration

// function isNameAnthony(name){
//     // action
//     if(name === "anthony"){
//         console.log("Name is Anthony")
//     }
// }

// isNameAnthony("anthony");


// function expression

// let isNameAnthony = function (name){
//     //     // action
//         if(name === "anthony"){
//             console.log("Name is Anthony")
//         }
// }

// isNameAnthony("anthony");





function getFirstVowel(str){
    let res = ""; // "o"
    let vowels = "aeiou";

    for(let i = 0; i < str.length; i++){
        let letter = str[i];
        if(vowels.includes(letter)){
            res = letter;
            return res;
        }
    }

    return res;
};


console.log(getFirstVowel("hello")); // e
// console.log(getFirstVowel("igloo")); // i
