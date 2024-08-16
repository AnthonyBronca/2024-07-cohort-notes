/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:
***********************************************************************/

function arrayConverter(array) {
  const res = {};
  for(let word of array){
    if(res[word] === undefined){
      // if the obj does not have the word already, the count starts at 1
      res[word] = 1; // creates a key-value pair  -> apple: 1
    } else{
      res[word]++;
    }
  }
  return res;
}





console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
