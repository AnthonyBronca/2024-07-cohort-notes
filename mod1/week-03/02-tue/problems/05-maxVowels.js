/*

CHALLENGE PROBLEM

Write a function called maxVowels. It will take an object where the values may be a string or number. The function
should return the KEY where the associated value has the most vowels.

Vowels are "aeiou"

Try to figure out what the edge cases are and account for them

Hint: Consider using a helper function

*/







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
