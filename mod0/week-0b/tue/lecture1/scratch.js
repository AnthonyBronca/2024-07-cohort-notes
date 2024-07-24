



/*
1. set the start - done
2. set the condition for finishing the loop - done
3. set the iterative step  -- done
4. the action
*/



//                           3   - 1
// console.log(firstName[firstName.length/2])

// for(let i = 0; i < 5; i++){
//     console.log(firstName)
// }


// let firstName = "sam"; // 3 chars
// // console.log(firstName.length)
// //      i - 0 ;   0 < 3



/*
start - 0
end - 3
--- 1st iteration ---
i -> 0
is 0 < 3 -> true
console.log(firstName[0]) // s
i -> 1
--- 2nd iteration ---
i -> 1
is 1 < 3 -> true
console.log(firstName[1]) // a
i -> 2
--- 3rd iteration ---
i -> 2
is 2 < 3 -> true
console.log(firstName[2]) // m
i -> 3
--- 4th iteration ---
i -> 3
is 3 < 3 ->  false
for loop stops





*/


// console.log(firstName[0]);
// console.log(firstName[1]);
// console.log(firstName[2]);



// let i = 0;
// let firstName = "anthony"; // 3 chars
// let i = 0;

// while(i >= 0){
//     console.log(firstName[i])
//     i++
// }


// for (let i = 0; i < firstName.length; i++) {
//     console.log(firstName[i])
// }




let mySentence = "I did my homework";

function countWords(sentence){

    let count = 1;

    for(let i = 0; i < sentence.length; i++){
        let char = sentence[i];
        if(char === " "){
            count++
        }
    }

    return count
}

console.log(countWords(mySentence))
