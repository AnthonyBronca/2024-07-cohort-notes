
/*

write a function called removeVowels. It will take in a string of text that may or may not include vowels.
Vowels are defined as "a", "e", "i", "o", "u".

The function should return a string with all the vowels removed.

Example:

input -> "hello"
output -> "hll"

Example2:

input -> "GOOD bye"
output -> GD by"


Try to solve this in 2 ways. One way will be by working with just a string, The other is by working with an array


*/

/*

1. create a function called removeVowels, it will take in a string -- done
2. create a variable pointing to the possible vowels: "a", "e", "i","o", "u" -- done
3. create a piggybank variable to store our solution -- done
4. iterate through the entire string -- done
    - for each letter check if the letter is a vowel
        - if it is a vowel -> do nothing
        - if it is not a vowel -> add it to the piggybank from step 3
5. after all iterations, return our piggy bank

*/


// YOUR CODE HERE




console.log(removeVowels("hello")); // "hll"
// console.log(removeVowels("GOOD bye")); // "GD by"
// console.log(removeVowels("TRY")); // "TRY"



/* DO NOT MODIFY ANYTHING BELOW THIS LINE */

module.exports = {removeVowels};
