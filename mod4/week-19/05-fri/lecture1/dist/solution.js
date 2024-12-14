"use strict";
const anthonyObj = {
    name: "anthony",
    email: "test@gmail.com",
    age: 30,
    occupations: ["software enginner", "instructor"],
};
const changeAge = (userObj, newAge) => {
    userObj.age = newAge;
};
changeAge(anthonyObj, 35);
console.log(anthonyObj.age);
