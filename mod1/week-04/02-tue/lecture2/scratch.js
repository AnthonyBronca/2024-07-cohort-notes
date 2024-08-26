

// GLOBAL SCOPE

// let name = "anthony";


function sayName(){
    // function scope
    var ourBoolean = undefined;
    if(true){
        // block scope
        // let name = "gabe";
        console.log(name)
        var name = "sam"; //  var is functional scoped
        // let name = "sam";
    }
    console.log(name);


}


sayName()
// console.log(name)
