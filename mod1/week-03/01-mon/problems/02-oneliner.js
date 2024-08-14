/*

Turn this function into a one liner

It should return true of false if the letter is a vowel

HINT: You can solve this with a ternary or without. Try to solve it in
two ways

*/


const vowels = "aeiouAEIOU";

function isLetterVowel(letter){
    if(vowels.includes(letter)){
        return true;
    } else{
        return false;
    }
}


console.log(isLetterVowel("A")); // true
console.log(isLetterVowel("B")); // false
console.log(isLetterVowel("e")); // true
