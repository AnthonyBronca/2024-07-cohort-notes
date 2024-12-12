
// if(false){
//     console.log('hello world');
// } else{
//     console.log("in the else")
// }



try{
    function isNameAnthony(name){
        if(name === "anthony"){
            throw new Error("Name can not be Anthony")
        } else{
            return false;
        }
    }

    isNameAnthony("anthony");

    // console.log("hello world");

} catch(err){
    console.log(err.message);
}
