/*

Write a function called emotionString. It will take in a string, and an emotion string.

The function should add the the emotion to the passed in string. Emotions can be punctuation marks or emojis

If no emotion is passed in, return a string that says "No emotion passed in."


*/












let emotion1 = "!!!"
let emotion2 = "💙"
let emotion3 = "😠"
let emotion4 = "..."

emotionString("I can code", emotion1); // "I can code!!!"
emotionString("JavaScript is love", emotion2); // JavaScript is love💙
emotionString("I am hungry!", emotion3); // I am hungry!😠
emotionString("Will my test specs pass", emotion4); // "Will my test specs pass..."
emotionString("This should fail!"); // No emotion passed in.



/* DO NOT MODIFY ANYTHING BELOW THIS LINE */

module.exports = {emotionString};
