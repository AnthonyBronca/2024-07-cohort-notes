"use strict";
const anthony = {
    name: "anthony",
    email: "someemail@gmail.com",
    age: 30,
    occupations: [
        "software engineer",
        "instructor"
    ]
};
const changeAge = (userObj, newAge) => {
    userObj.age = newAge;
};
changeAge(anthony, 35);
console.log(anthony.age);
//# sourceMappingURL=solution.js.map