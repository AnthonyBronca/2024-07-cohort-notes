/*

Write a function called emotionString. It will take in a string, and an emotion string.

The function should add the the emotion to the passed in string. Emotions can be punctuation marks or emojis

If no emotion is passed in, return a string that says "No emotion passed in."


*/

// YOUR CODE HERE


let emotion1 = "!!!"
let emotion2 = "💙"
let emotion3 = "😠"
let emotion4 = "..."

// console.log(emotionString("I can code", emotion1)); // "I can code !!!"
console.log(emotionString("JavaScript is love", emotion2)); // JavaScript is love 💙
// console.log(emotionString("I am hungry!", emotion3)); // I am hungry! 😠
// console.log(emotionString("Will my test specs pass", emotion4)); // "Will my test specs pass ..."
// console.log(emotionString("This should fail!")); // No emotion passed in.



/* DO NOT MODIFY ANYTHING BELOW THIS LINE */

module.exports = {emotionString};
