


// class Student {
//     // a function that runs once on creation
//     constructor(name){
//         this.name = name
//     }


//     // instant methods - work on the instance value (this)
//     sayName(){
//         console.log(this.name)
//     }
// }


// // create an instance
// const student = new Student("anthony");
// console.log(student)


// student.sayName()







// class Car {
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     printInfo(){
//         console.log(`The ${this.make} ${this.model} car was built in ${this.year}`)
//     }
// }


// const bmw3 = new Car("BMW", "m3", 2005)
// bmw3.printInfo()
// console.log(bmw3)


// Closure

// const outter = (num1) => {
//     const inner = (num2) =>{
//         return num1 + num2;
//     }
//     return inner
// }

// const addOne = outter(1);
// const addFive = outter(5);
// console.log(addOne(5))

// console.log(addFive(2))


/*

const middleware = (req, res, next)=> {
    if(req is trash){
        throw error
    } else{
        next()
    }
}

router.get("/", middleware, (req, res, next) => {


})

*/
