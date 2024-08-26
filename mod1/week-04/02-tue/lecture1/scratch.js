


// GLOBAL SCOPE


// let el = "anthony";

function saySomething(){
    // function scope
    let sum = 0; // function scope

    for(let i = 0; i < 5; i++){
        // block
        sum += 1;
        console.log(sum);
    }

    console.log(sum); //  function scope
}
// function saySomething2(){
//     // function scope
//     let name = "sam";
//     console.log(name)
// }


saySomething();
// saySomething2()


//  console.log(el);
