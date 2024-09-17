/*

--- awake ---
    --- dream level 1 ---
        -- question a -> answer b
        --- dream level 2 ---
            --- question b -> answer c
            --- dream level 3 ---
                --- information ---
            --- dream level 3 collapses
        --- dream level 2 collapses ---
    --- dream level 1 collapse ---
--- awake: we have the information ---
*/



// push the num into an array, up until num is 5. include 5

// [1,2,3,4,5]
// [1, [2, [3,[4]]]]

// function addNumToArr(n){
//     // base case: stop looping when we hit 5
//     if(n === 5) return [n];
//     return [n, ...addNumToArr(++n)]

// }



// default parameters


// function addNumToArr(n){
//     let res = [];
//     for(let i = n; i <= 5; i++){
//         res.push(i)
//     }

//     return res;

// }


// function addNumToArr(n, res = []){
//     if(n > 5) return res;
//     res.push(n);
//     return addNumToArr(++n, res)

// }

// console.log(addNumToArr(1));




// write a recursive function that will go through string and collect all the vowels within an array

// const vowels = "aeiou";
// let str = "eat"; // ["e", "a"];
// //         ""       ["e", "a"]

// // t
// const collectVowels = (str, res = []) => {
//     // base case
//     if(str.length === 0) return res;
//     // recursive case
//     let firstLetter = str[0];
//     if(vowels.includes(firstLetter)){
//         res.push(firstLetter);
//     }
//     return collectVowels(str.slice(1), res)

// }


// console.log(collectVowels(str))





// let name = "anthony"; // assigned a variable to data




// let people = ["anthony", "bronca", "is", "so", "cool"];


// console.log(people, "before the the array methods");


// let idk = people.slice(2, 3); // does not mutate

// console.log(idk);

// people.splice(0, 1); // mutates the array


// let idk = people.pop(); // mutates the array, returns something



// console.log(people, "after the array methods");




// let str = "anthony is awesome";


// // get an array of the original string


// let idk = str.slice(0 , 4); // nothing mutates a string, strings a primatives
// console.log(idk);

// let strArr = str.split(" ");

// // turn the arr into a string
// console.log(strArr);

// let idk = strArr.join("")
// console.log(idk);

// console.log(str, "this is the original string")
