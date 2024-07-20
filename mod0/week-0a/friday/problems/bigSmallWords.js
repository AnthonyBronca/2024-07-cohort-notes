/*

Write a function called bigLittleWords. it will take in two words. The first word will
be everything in the first word capitalized. The second word will be lower cased. The function will return the phrase of combining
these two words, space seperated

example:

word1 -> sam
word2 -> AntHONy

answer should be: "SAM anthony"

POLYAS"

1. Understand the problem
     - we will get two words, and output the first one as lowercase, and the second one as uppercase
     - Make sure to return the two case changed words together using a space to seperate them

2. Pseudocode

    1. write a function called bigLittleWords ✅
        - take in word1✅
        - take in word2✅
    2. capitalize the first word -> we can use .toUpperCase()✅
    3. lowercase the second word -> we can use .toLowerCase()✅
    4. make a new string where we use step 2 and 3 to make a new sentence✅
        - ensure we seperate the words using a space✅
    5. return the new string

*/



function bigLittleWords(word1, word2){

    return `${word1.toUpperCase()}  ${word2.toLowerCase()}`;
    // let bigWord = word1.toUpperCase();
    // let smallWord = word2.toLowerCase();
    // let newString = bigWord + " " + smallWord;
    // return newString
}


console.log(bigLittleWords("sam", "anthony")) // SAM anthony
