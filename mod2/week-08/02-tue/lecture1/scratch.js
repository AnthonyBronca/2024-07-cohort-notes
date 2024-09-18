
// INHERITANCE


class Person {
    // function on start
    constructor(name, age = 0){
        this.name = name;
        this.age = age
    }

    // instance method
    sayName(){
        console.log(this.name); // "prints out the name variable"
    }
};

class Developer extends Person {


    constructor(name, age, languages = []){
       // required key word when inheritance
        super(name, age);
        this.languages = languages; // an array of languages on the instance
    }

    sayLanguages(){
        for(let lang of this.languages){
            console.log(lang);
        }
    }

}

const cayden = new Developer("Cayden", 30, ["JavaScript"]);

console.log(cayden)
cayden.sayLanguages();
cayden.sayName()



// instance of the class
const anthony = new Person("Anthony", 30);
anthony.sayName();
console.log(anthony)




























// const obj1 = {
//     name: "anthony",
//     occupation: "software engineer",
//     ...{
//         languages: ["JavaScript", "Python"],
//         ide: "VSCode"
//     }
// }


// console.log(obj1)
