/*

Write a function that will go through an array of fruit and count each fruit.
Return an object that has the count of each fruit


*/

const countFruits = (fruits) => {
    let obj = {};

    for(let fruit of fruits){
        // console.log(fruit);
        if(obj[fruit] === undefined){ // if the key does not exist
            obj[fruit] = 1 // create the key value pair defaulting value to 1
        } else{ // does exist
            obj[fruit] ++ // update the count
        }
    }
    return obj;
};


const fruits = ["apple", "banana", "watermelon", "strawberry", "apple", "apple", "banana", "strawberry"];
console.log(countFruits(fruits));

/*
{
    apple: 3,
    banana: 2,
    watermelon: 1
    strawberry: 2
}

*/
