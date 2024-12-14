

// let num:number = 2;
// let str:string = "hello world";
// let numArr: number[] = [1,2,3];
// let strArr: string[] = ["hello", "world"];
// let bool: boolean = true;


// const myCalculator = (num1, num2) => {
//     if(typeof num1 !== "string" || typeof num2 !== "string"){
//         throw new Error("num1 and num2 must both be numbers")
//     } else {
//         return num1 + num2;
//     }
// }

// const myCalculator = (num1:number, num2:number) => {
//    return num1 + num2;
// }


// console.log(myCalculator(1,2));
// console.log(myCalculator(3,2));





// OBJECTS: INTERFACE


// interface UserObjI {
//    username: string,
//    password: string,
//    profilePic?: string,
//    posts?: string[] | null // intersection type
// }


// const userObj: UserObjI = {
//    username: "anthony",
//    password: "123abc",
// // }

// userObj.profilePic = "http://someimage.com"


// console.log(userObj.profilePic)




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
