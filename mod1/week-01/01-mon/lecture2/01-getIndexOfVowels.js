/*

Write a function called getIndexOfVowels, which will take in a string. The string can contain capital
or lowercase characters, and will only have alphabetical characters.

vowels are "a", "e", "i", "o", "u"

The function should return an array of all the indices where a vowel was found within the string.
If no vowels, as defined by the above characters, are found, the array should only have a -1 inside

Example: passing in "hello" should return -> [1,4]
Example2: passing in "shy" should return -> [-1]

*/


// Type code here

function getIndexOfVowels(str){
    let res = [];
    let vowels = "aeiou"
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            res.push(i);
        }
    }
    if(res.length === 0){
        res.push(-1)
    };
    return res
}





console.log(getIndexOfVowels("pizza")); // [1,4]
console.log(getIndexOfVowels("Aaron")); // [0,1,3]
console.log(getIndexOfVowels("mississippi")); // [1,4,7,10]
console.log(getIndexOfVowels("build a snowman")); // [1,2,6,10,13]
console.log(getIndexOfVowels("try")); // [-1]
