/*
Write a function called "pigLatin" that will take in a string parameter. This function will take the string return
the pig latinized version of the word.


Pig Latin is a pseudo-language based on English.
Rules:
      1. If the word starts with a vowel, simply add "yay" to the end
      2. If the word starts with a vowel AND ends with a "y", do not move characters and add an "ay" to the end
      3. If the word starts with a consonant, the first consonant/consonant cluster should be moved to the end with an "ay" attached to the end
      4. If there are no vowels in the word at all (assume that 'y' is not a vowel in this problem), add an "ay" to the end

You can assume that all characters (if provided) will be in lowercase and an English letter.
*/


/* WRITE YOUR FUNCTION HERE*/


/* ----------------- COMMENT THESE OUT WHEN YOU ARE TO TEST OUT YOUR TEST SPECS FOR A CLEANER TEST ----------------- */
console.log(pigLatin("apple"))         // appleyay
console.log(pigLatin("eagle"))         // eagleyay
console.log(pigLatin("cat"))           // atcay
console.log(pigLatin("school"))        // oolschay
console.log(pigLatin("banana"))        // ananabay
console.log(pigLatin("rhythm"))        // rhythmay
console.log(pigLatin("unhappy"))       // unhappyay



/* DO NOT MODIFY ANYTHING BELOW THIS LINE */
module.exports = { pigLatin };
