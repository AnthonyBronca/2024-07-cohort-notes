/*

USING TYPESCRIPT
make a function that will take in a user object. and it will allow us to change the age of the user, but only to a valid number


a user object looks like this:

user {
   name: "anthony",
   email: "someemail@gmail.com",
   age: 30,
   occupations: [
      "software engineer",
      "instructor"
   ]

}


changeAge(userObj, 35);
// console.log(user.age) 35


*/

// interface IUser {
//     name: string,
//     email: string,
//     age: number,
//     occupations: string[]
// }

interface IUser {
    name: string;
    email: string;
    age: number;
    occupations: string[];
}


const anthony:IUser = {
    name: "anthony",
    email: "someemail@gmail.com",
    age: 30,
    occupations: [
        "software engineer",
        "instructor"
    ]
}


const changeAge = (userObj:IUser, newAge: number): void => {
    userObj.age = newAge;
}



changeAge(anthony, 35);
console.log(anthony.age);
