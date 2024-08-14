/*

CHALLENGE PROBLEM

Write a function called maxVowels. It will take an object where the values may be a string or number. The function
should return the KEY where the associated value has the most vowels.

Vowels are "aeiou"

Try to figure out what the edge cases are and account for them

Hint: Consider using a helper function

*/


/*
HELPER FUNCTION
1. write a function called countVowels
2. it will take in a string and iterate over each letter
    - for each letter, check if it is it a vowel or not (aeiou)
        - if it is, increment the ocunt
        - if it is not, do nothing
3. after all iterations return the total count of the vowels


*/


const countVowels = (str) => {
    const vowels = "aeiou";
    let count = 0;

    for(let letter of str){
        if(vowels.includes(letter.toLowerCase())){
            count++;
        }
    }
    return count;
}

/*

1. write a function called maxVowels, that takes in an object (keys can be strings or numbers)
2. iterate over all the keys in the object
    2a. for each key, check if the key is a string
        - if it is a string
            - get the count of the vowels for the value
        - if it is not a string, do nothing
3. after all iterations return the count vowels

*/


const maxVowels = (obj) => {

    let maxCount = 0;
    let res;

    for(let key in obj){
        let val = obj[key];
        if(typeof val === "string"){
            let countOfVowels = countVowels(val);
            if(countOfVowels > maxCount){
                maxCount = countOfVowels;
                res = key;
            }
        }
    }
    return res;
}



const obj1 = {
    name: "Bob",
    age: 10,
    food: "Sushi",
    fruit: "Orange"
};


const obj2 = {
    name: "Joe",
    age: 20,
    food: "Pizza",
    fruit: "Watermelon"
};

const obj3 = {
    name: "Regal",
    age: 14,
    food: "Coconut Cashew Curry",
    fruit: "Strawberry"
};

console.log(maxVowels(obj1)); // fruit -> explanation: the key of fruit is "Orange" and Orange has 3 vowels
console.log(maxVowels(obj2)); // fruit
console.log(maxVowels(obj3)); // food
