/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


// function reverse(str){
//   if(str.length === 0) return "";
//   return str[str.length -1] + reverse(str.slice(0, str.length - 1));
// }



function reverse(str, res = []){
  if(str.length === 0) return res.join("");
  // turn the str intop an array
  let strArr = str.split("");
  // remove the last element
  let lastEl = strArr.pop()
  // add it to the res
  res.push(lastEl);

  // pass in the modified array as a string
  return reverse(strArr.join(""), res);

}



console.log(reverse("house")); // "esuoh"
// console.log(reverse("dog")); // "god"
// console.log(reverse("atom")); // "mota"
// console.log(reverse("q")); // "q"
// console.log(reverse("id")); // "di"
// console.log(reverse("")); // ""


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
