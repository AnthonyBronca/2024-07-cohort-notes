

// // // const obj = {
// // //     name: "anthony",
// // //     sayName(){
// // //         console.log(this)
// // //     }
// // // }

// // // obj.sayName();

// // global scope -> context of this is the global object
// function sayName(){

// }

// // scoped to the current context
// const sayName = function(){

// }

// const sayName = () => {

// }



// class Person {
//     constructor(name){
//         this.name = name;
//     }
// //               fat arrows retain lexical context! They do this by enclosing our function in its own context
//     sayName = () => {
//         console.log(`${this.name} is my name`);
//     }
// }

// const anthony = new Person("anthony");



// // console.log(anthony);
// // BIND
// const sayAnthonysName = anthony.sayName
// // const sayAnthonysName = anthony.sayName.bind(anthony);
// sayAnthonysName()

// BIND -> ESTABLISH AND RETAIN CONTEXT FOR A FUNCTION (METHOD)


// BIND, CALL, APPLY, FAT ARROW

// console.log(module)


// sayAnthonysName()


// const addNums = (x,y) => x + y;

// // console.log(addNums(1,3));
// function doubler(cb){
//     return cb(3,5)
// }

// console.log(doubler(addNums))
// console.log(this)

// const double = addNums;

// console.log(double(3,5));




// CALL AND APPLY -> WORK ON THE CONTEXT RESULT OF A FUNCTION

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
//         console.log(`${this.name} pedals for ${min} min`)
//     }
// }


// const ferrari = new Car("Ferrari");
// const mountainBike = new Bicycle("Mountain Bike");

// // mountainBike.pedalBike(5);

// mountainBike.pedalBike.apply(ferrari, [5]); // works with the return, and NEEDS AN ARRAY
// mountainBike.pedalBike.call(ferrari, 5); // works with the return, and TAKES ANY NUMBER OF ARGS

// ferrari.revEngine.call(mountainBike, null)

// ferrari.revEngine();
