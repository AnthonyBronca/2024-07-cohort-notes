/*

Write a function called getValues that takes an object and returns the values within an array.

Optional Challenge - Can you solve this using a one liner?

*/

// const getValues = (obj) => Object.values(obj);


const getValues = (obj) => {
    const res = [];
    for(let key in obj){
        let value = obj[key];
        res.push(value);
    }

    return res;
}




const obj = {
    instructor: "Anthony",
    cohort: "07-15-pt",
    students: 60
}
console.log(getValues(obj)); // ["Anthony", "07-15-pt", 60];
