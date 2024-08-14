/*

You are provided a problem that will return all the vowels in a string.
Refactor the code to use fat arrow syntax, and replace all the "let"s
with "const", when necessary.

*/



function getVowels(str){
    let vowels = "aeiouAEIOU";

    let result = [];

    for(let letter of str){
        if(vowels.includes(letter)){
            result.push(letter);
        }
    }

    return result;

}


console.log(getVowels("Hello World")); // ["e", "o", "o"];
console.log(getVowels("Assessment one")); // ["A", "e", "e", "o", "e"];
