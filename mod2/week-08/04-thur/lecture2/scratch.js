const random = require('getrandomjs');

console.log(random(1,5));





// // const myObj = {
// //     name: "anthony",
// //     sayName(){
// //         console.log(this)
// //     }
// // }

// // myObj.sayName();


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     // FAT ARROW ENCLOSES OUR CONTEXT WITHIN ITS OWN LEXICAL CONTEXT.
//     sayName = () => {
//         console.log(`My name is ${this.name}`);
//     }
// }


// const anthony = new Person("Anthony");


// // CALL, BIND, APPLY, FAT ARROWS

// // BIND

// // const idk =  anthony.sayName;

// // BIND - RETAINS CONTEXT FOR A FUNCTION
// const sayAnthonyName = anthony.sayName;

// // const sayAnthonyName = anthony.sayName.bind(anthony);
// sayAnthonyName();




// class Car {
//     constructor(name){
//         this.name = name;
//     }

//     revEngine(){
//         console.log(`${this.name} revs its engine`);
//     }
// }


// class Bicycle {
//     constructor(name){
//         this.name = name;
//     }

//     pedalBike(min){
//         console.log(`${this.name} pedals for ${min} minutes`);
//     }
// }


// const ferrari = new Car("Ferrari");
// const mountainBicycle = new Bicycle("Mountain Bicycle");

// // CALL and APPLY
// // ferrari.revEngine.apply(mountainBicycle);


// // CALL AND APPLY -> WORK WITH THE RETURN VALUE OF THE METHOD
// mountainBicycle.pedalBike.apply(ferrari, [5]);// APPLY -> NEEDS AN ARRAY OF ARGUMENTS
// mountainBicycle.pedalBike.call(ferrari, 5); // CALL -> NEEDS ANY NUMBER OF ARGMENT


// FAT ARROWS -> ARE OP




// global scope -> context is the global object
// function sayName(){
//     console.log("anthony");
// }

// const sayName = function thisIsTheSayNameFunction(){
//     console.log("anthony");
// }

// const sayName = function(){
//     console.log("anthony");
// }

// node package manager
