
//          0    1    2
// let arr = ["a", "b", "c"];


// console.log(arr[5])


// const obj = {letter1: "a", letter2: "b", letter3: "c"};
// object[index] the same thing as the value

// indexing into an object using the key to retrieve the value associated.
// console.log(obj["letter1"]);

// when you index into an object using a key that DOES NOT EXIST then you get an undefined value back.
// console.log(obj["letter100"]);


// creating our own key value pair, after an object has already been created


// obj["letter100"] = "anthony";


// loops

// 1. get all the keys and put them within an array
// console.log(Object.keys(obj));

// 2. get all the values and put them within an array
// console.log(Object.values(obj));
// let vals = Object.values(obj);



// 3. basic loop for objects - for...in
//      variable for the key


// for(let key in obj){
//     // index into the obj to get a value
//     let value = obj[key];
//     // whatever youi want to do with the data.
// }

// console.log(obj);






/*
Create a function called count letters in a string.
Return an object that will have letters as a key
and values as the number of times the letter appeared

*/



/*
1. create an empty object so that we can add key value pairs to it
    - The key is the letter
    - The value is the number of times it showed up in the string
2. go through every letter within the provided string
    - for each letter,
        - check to see if the current letter already exists within the object
            - if it does: update the count
            - if it does not: set the count to 1

3. after all iterations return the object

*/

function countLetters(word){
    let obj = {};
    for(let letter of word){
        // syntax for checking if an object has a key
        if(obj[letter] === undefined){ // if it does not have a key
            // create a key value pair
            obj[letter] = 1;
        } else{
            // otherwise it must exist. lets update it
            obj[letter]++;
        }
    }
    return obj
}

console.log(countLetters("apple")); // {a: 1, p: 2, l: 1, e: 1}
console.log(countLetters("banana")); // {b: 1, a: 3, n: 2}
console.log(countLetters("orange")); // {o: 1, r: 1, a: 1, n:1, g: 1, e: 1}
