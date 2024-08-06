




/*

FOR LOOP

1. Declartive -> Starting point -- done
2. Conditional step -> ending point -- done
3. iterative step -> how do we get from step 1 to step 2 -- done
4. iterative functionality

*/


// for(let i = 0; i < 200; i++){
//     console.log(i);
//     console.log(firstName);
// }


//* INDEXING */
// indexing starts at 0
// .length starts at 1

// let firstName = "sam"
// //                           3 - 1
// // console.log(firstName)

// // 3 - 1 (2)
// for(let i = 0; i < firstName.length; i++){
//     console.log(firstName[i])
// }

/*

start -> 0
end -> 3

--- 1st iteration ---
i -> 0
i < 3 -> true
console.log(firstName[0]) // s
i increments by 1 -> i = 1

--- 2nd iteration ---
i -> 1
i < 3 -> true
console.log(firstName[1]) // a
i increments by  1 -> i = 2

--- 3rd iteration ---
i -> 2
i < 3 -> true
console.log(firstName[2]) // m
i increments by  1 -> i = 3

--- 4th iteration ---
i -> 3
i < 3 -> false

*/


// console.log(firstName[0])
// console.log(firstName[1])
// console.log(firstName[2])
// console.log(firstName[3])
// console.log(firstName[4])
// console.log(firstName[5])
// console.log(firstName[6])


/* WHILE LOOP */

// for(let i = 0; i < firstName.length; i++){
//     console.log(firstName[i])
// }


// let firstName = "aaefseserwgsrthgs rg srg srtg sdgrfb srg srg";
// let i = 0;
// while(i < firstName.length){
//     console.log(firstName[i])
//     i++
// }






let mySentence = "welcome to app academy";


function countWords(sentence){
    let count = 1;

    for(let i = 0; i < sentence.length; i++ ){
        let char = sentence[i];
        if(char === " "){
            count++
        }
    }
    return count
}

let sentenceCount = countWords(mySentence);

if(sentenceCount <= 4){
    console.log(`The sentence has ${sentenceCount} words`)
} else{
    console.log("The sentence is too much!! Too many words ^.^")
}
