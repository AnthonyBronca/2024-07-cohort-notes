/***********************************************************************
Write a function makeAnimalSound(animal, sound) that accepts two strings. Use
**string interpolation** to return a new string using both arguments.  See the
examples for more information.

Examples:
console.log(makeAnimalSound("cow", "moo")); // => "cow goes moo!"
console.log(makeAnimalSound("DUCK", "QUACK")); // => "DUCK goes QUACK!"
***********************************************************************/

// Your code here 
function makeAnimalSound(animal, sound) {
  // return `${animal} goes ${sound}!`;
  return animal + ' goes ' + sound + '!';
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = makeAnimalSound;
} catch {
  module.exports = null;
}
