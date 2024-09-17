
// CLASS FACTORY/BLUEPRINT TO CREATE OBJECTS


// CLASSES ARE PASCAL CASE
// PascalCasing
// camelCase


class Person {

    // // static variable
    // static count = 0;

    // on creation, create key value pairs
    constructor(name, age, occupation) { // params
        // key    =   value
        this.name = name;
        this.age = age;
        this.occupation = occupation
        this.favoriteLanguages = [];
        this.characters = [];

        // Person.incrementCount();
    }

    // instance method -> function that relates to a SPECIFIC instance of a class
    addLanguage(...lang){
        // "this" -> when invoked on anthony is the anthony object
        this.favoriteLanguages.push(...lang);
    }

    addCharacter(character){
        this.characters.push(character);
    }

    // static variables act on the class itself not on the individual instances
    // static incrementCount(){
    //     console.log(Person.count);
    //     Person.count ++;
    // }

    // static getCount(){
    //     console.log(Person.count);
    // }

}

// initializing an instance of a class
const anthony = new Person("anthony", 30, "software engineer"); // new -> runs the constructor -> adds key value pairs to the empty object
// // console.log(anthony) // before the add
anthony.addLanguage("Typescript", "Javascript", "Swift", "Bash");
// console.log(anthony) // after the add






const sam = new Person("sam", 28, "software engineer");
sam.addLanguage("Javascript", "Python")
// console.log(sam);

// Person.getCount();




// const person1 = {
//     name: "Anthony",
//     age: 30,
//     occupation: "software engineer",
//     favoriteLanguage: "Typescript",
//     languages: ["Typescript", "Javascript", "Python", "Swift", "Bash", "Java"],
//     dad: {
//         name: "Dad",
//         age: 100
//     },
//     // method
//     sayHello(){
//         console.log("Anthony says hello");
//     }
// };

// const person2 = {
//     name: "Sam",
//     age: 28,
//     occupation: "software engineer",
//     favoriteLanguage: "Javascript",
//     languages: ["Javascript", "Python",],
//     dad: {
//         name: "Sam Dad",
//         age: 100
//     },
//     // method
//     sayHello() {
//         console.log("Sam says hello");
//     }
// };


// console.log(person1);
// person1.sayHello();
// console.log(person2);
// person2.sayHello();



// sing/ plural
module.exports = {anthony, sam};
