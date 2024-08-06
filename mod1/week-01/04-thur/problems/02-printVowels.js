/*

Write a function called printVowels that will print all the vowels in a nested array, where the
subArray has 1 string per element:

Example:
    [
        ["A", "n", "t", "h", "o", "n", "y"],
        ["S", "a", "m"],
        ["E", "d"]
    ]


Prints out:
 "A",
 "o",
 "a",
 "E"

*/




function printVowels(arr){
    let vowels = "aeiouAEIOU";
    for(let subArr of arr){
        for(let letter of subArr){
            if(vowels.includes(letter)){
                console.log(letter)
            }
        }
    }
}



// function printVowels(arr){
//     let vowels = "aeiouAEIOU";
//     for(let i = 0; i < arr.length; i++){
//         let subArr = arr[i];
//         for(let j = 0; j < subArr.length; j++){
//             let letter = subArr[j];
//             if(vowels.includes(letter)){
//                 console.log(letter)
//             }
//         }
//     }
// }




let example1 = [
    ["A", "n", "t", "h", "o", "n", "y"],// subarr
    ["S", "a", "m"], // sub arr
    ["E", "d"] // subarr
]

let example2 = [
    ["W", "i", "l", "l"],
    ["G", "a", "b", "e"],
    ["J", "e", "s", "s", "e"]
]

// printVowels(example1); // "A". "o", "a","E"
printVowels(example2); // "i", "a", "e", "e", "e"
