/*

Write a function called replaceEnd, which will take in an array and a string as arguments. The function should remove the item at the end of the array
, and replace it
with the string that was passed in. The function should return a sentence string


Edge cases to consider:
    - Array may be empty. If it is, just add the string
    - 2nd argument may not be passed in. If it is not, return a message that says "A string replacement argument was not passed in."


There are two ways to solve this. Try to think of array methods you can use to approach this in 2 ways

*/

function replaceEnd(arr, newWord){

    if(newWord === undefined){
        return "A string replacement argument must be passed in.";
    } else{
        if(arr.length === 0){
            arr.push(newWord);
            return arr.join(" ");
        } else{
            // version 1 - splice
            // arr.splice(arr.length - 1, 1, newWord);
            // return arr.join(" ");

            // version 2 - pop and then push
            arr.pop();
            arr.push(newWord);
            return arr.join(" ")
        }
    }


}



let testArr = ["hello", "how", "are", "you", "doin"];
let testArr2 = ["I", "want", "to", "go", "to", "work"];

console.log(replaceEnd(testArr, "doing")); // hello how are you doing
console.log(replaceEnd(testArr2, "sleep")); // I want to go to sleep
console.log(replaceEnd([], "hello")); // hello
console.log(replaceEnd(["This", 'should', "fail"])); // A string replacement argument must be passed in.
