
// console.clear()
//         0     1    2
// let arr = ["a", "b", "c"];

// console.log(arr[3]); //look something using an index


//           letter1           letter2      letter3
// let obj = {letter1: "a", letter2: "b", letter3: "c"};

// obj["key"] -> this is the same thing as the value -> retrieve the value of the object

// console.log(obj["letter100"]); // undefined key does not point to a value

// obj["letter100"] = "anthony"; // create a key value pair

// console.log(obj["letter100"]);
// let key = "letter100";

// console.log(obj[key]);


// loops

// loop to get all the keys within an array
// console.log(Object.keys(obj))

// loop to get all the values within an arrayu
// console.log(Object.values(obj))


// console.log(obj);
// built in for..in

// let keys = [];
// let vals = [];

// for(let key in obj){
//     let val = obj[key];
// }


// if(obj["letter600"] === undefined){ // check if the value with a given key, is undefined (does not exist)
//     console.log("1") // if does not exist -> do an action
// } else{
//     // otherwise the key must exist with a corresponding value pair
//     console.log("2"); // do a different action
// }






/*

Write a function that will go through a string, and count all the letters.
Return an object with the letter as a key, and the value the amount of times it showed up

*/

/*

1. create an empty object
2. go through every letter within the word
    2a. for each letter, check if the letter already exists in the object
        - if it does not exist: create a key value pair. The key is the letter, the value sould start at 1
        - if it does exist: update the value at the current letter
3. after all iterations, return object.



*/


function countLetters(word){
    let obj = {};

    for(let i = 0; i < word.length; i++){
        let letter = word[i];
        // check if the letter is exists in the object
        if( obj[letter] === undefined){ // does not exist
            obj[letter] = 1 // created a key value pair
        } else { // does exist
            obj[letter] ++;
        }
    }
    return obj

}



console.log(countLetters("apple")); // {a:1, p:2, l:1, e: 1}
console.log(countLetters("banana")); // {b:1, a: 3, n: 2}
console.log(countLetters("orange")); // {o:1, r: 1, a:1, n:1, g: 1, e: 1}
