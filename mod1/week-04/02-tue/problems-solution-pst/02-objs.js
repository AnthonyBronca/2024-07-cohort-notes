/*

Write a function that will go through an array of fruit and count each fruit.
Return an object that has the count of each fruit



{
    apple : 3,
    banana: 2,
    watermelon: 1,
    strawberry: 1,

}



*/

const countFruits = (fruits) => {
    const res = {};
    for(let fruit of fruits){
        if(res[fruit] === undefined) {
            res[fruit] = 1
        } else {
            res[fruit]++;
        }
        // console.log(fruit);
    }
    return res;
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
