/*

--- awake ---
    --- dream level 1 ---
        -> carry information a
        --- dream level 2 ---
            -> carry information b
            --- dream level 3 ---
                -- grab information --
            --- dream level 3 collapses --
        -- dream level 2 collapses
    --- dream level 1 collapses
--- awake: the information ---


default parameter
*/


//    [1, 2, 3,4, 5]

// function addNumToFive(num){
//     // base case
//     if(num === 5) return [num];
//     // recursive case
//     // recurive call + recursive step
//     return [num, ...addNumToFive(++num)]
// }



// function addNumToFive(num, res = []){
//     if(num === 5){
//         res.push(num);
//         return res;
//     }
//     res.push(num);
//     return addNumToFive(++num, res)
// }

// console.log(addNumToFive(1));




// go through a word and collect all the vowels in the word, adding it to an array

// recursive way

// let word = "mississippi"; // [e,a]
// // let word = ""; // [e,a]
// const vowels = "aeiou";

// function collectVowels(word, res = []){
//     // base case when we go through the entire string
//     if(word.length === 0) return res;

//     // recursive case
//     // grab the letter
//     let firstLetter = word[0];
//     if(vowels.includes(firstLetter)) res.push(firstLetter);
//     return collectVowels(word.slice(1), res)
// }

// console.log(collectVowels(word))






// iterative way
// let word = "eat"; // [e,a]

// let res = [];
// let vowels = "aeiou";

// for(let letter of word){
//     if(vowels.includes(letter)){
//         res.push(letter);
//     }
// }

// console.log(res);





function addPunctions(thing, thingToAdd, numberToAdd, counter=0){
    if(counter === numberToAdd) return thing;

    let newStr = thing + thingToAdd;
    counter += 1;

    return addPunctions(newStr, thingToAdd, numberToAdd, counter)



}


console.log(addPunctions("hello world", "!", 5))




// let arr = ["anthony","bronca","is", "cool"];

// console.log(arr, "before mutating");

// arr.shift(); // mutates
// let newArr = arr.slice(1) // returns a copy, does not mutate
// arr.pop(); // removes from back of arr, mutates
// arr.splice(0, 1); // mutates the existing

// "anthony bronca is cool"

// let newStr = arr.join(" "); // returns a string
// console.log(newStr)
// console.log(newArr)

// console.log(arr, "after mutation")





// let str = "anthony bronca is cool";

// // ["anthony", "bronca", "is", "cool"]

// let idk = str.split(" "); // does not mutate, strings are immutable
// console.log(idk); // arr
// idk.pop();
// console.log(idk)


// console.log(str);
