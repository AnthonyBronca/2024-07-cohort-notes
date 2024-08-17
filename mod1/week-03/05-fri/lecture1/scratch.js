// const obj = {};


// Syntax for creating a key value pair?
// obj["key"] = 1; // one way to do it -> bracket notation
// obj.key = "1"; // another way to do it -> dot notation

// console.log(obj)


// Syntax for checking if a key-value exists
// if(obj["key"] !== undefined){
//     console.log("'key' is a key inside of object")
// } else{
//     console.log("'key' is not a key inside the object");
// }

// syntax for updating a value within an object
// obj["key"]++ // updating a number to go up by 1;
// obj["key"] = "water"// updating the key to have the value of 'water'

// what is the DATA TYPE of Object.keys();

// console.log(Object.keys(obj)); // returns an array of strings, where each string is a key


// what is the DATA TYPE of Object.values();

// console.log(Object.values(obj)); // returns an array of all the values


// what for...loop do we use for objects.

// obj.test = "test";
// obj.food = "pizza";
// obj.country = "japan";

// for(let key in obj){
//     let value = obj[key];
//     console.log(`when key is ${key}`);
//     console.log(`the value is ${value}`);
// }

// How do we DELETE a key value pair. (in this example, how do we delete the test k-v pair)

// delete obj.test;
// delete obj["test"];

// const {key, test} = obj;

// console.log(key, test)

// for(let key in obj){
//     if(key === "key" || key === "test"){
//         delete obj[key]
//     }
// }


// console.log(obj)




// CALL BACKS



const addNums = (n1, n2) => n1 + n2;
const minusNums = (n1, n2) => n1 - n2;



// function that takes in another func as an argument and then invokes it
const calculator  = (n1, n2, cb) => {
    return cb(n1, n2);
}


console.log(calculator(1,2, addNums))
console.log(calculator(5,1, minusNums))


const nums = [1,2,3,4,5];


const doubledNums = nums.map(function(el){
    return el * 2;
})
console.log(doubledNums);
