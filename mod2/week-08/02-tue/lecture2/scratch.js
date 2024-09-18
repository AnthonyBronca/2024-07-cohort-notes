


// class Person {
//     constructor(name, age) {
//         // instance variables
//         this.name = name;
//         this.age = age;
//     }

//     // function ->  instance method
//     sayName() {
//         console.log(this.name); // print the name
//     }
// }



// class Developer extends Person {
//     constructor(name, age, languages = []) {
//         super(name, age);
//         this.languages = languages
//     }

//     sayLanguages() {
//         for (let lang of this.languages) {
//             console.log(lang);
//         }
//     }
// }


// const anthony = new Person("Anthony", 30);
// const sam = new Developer("Sam", 30, ["JavaScript", "Python"]);


// const person1 = { name: 'Anthony', age: 30 };

// const developer1 = {
//     ...person1,
//     languages: ['JavaScript', 'Python']
// };

// console.log(developer1)

// anthony.sayName();
// sam.sayLanguages();


// console.log(anthony);
// console.log(sam)






















// const obj1 = {
//     name: "Anthony",
//     age: 30,
//     ...{
//         title: "Software Engineer",
//         skills: ["JavaScript", "Python"]
//     }
// }

// console.log(obj1)
