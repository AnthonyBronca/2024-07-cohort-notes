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


changeAge(35);
// console.log(user.age) 35



*/




interface UserObjI {
    name: string;
    email: string;
    age: number;
    occupations: string[];
}

const anthonyObj: UserObjI = {
    name: "anthony",
    email: "test@gmail.com",
    age: 30,
    occupations: ["software enginner", "instructor"],
}


const changeAge = (userObj: UserObjI, newAge: number): void => {
    userObj.age = newAge;
}



changeAge(anthonyObj, 35);
console.log(anthonyObj.age); // 35
