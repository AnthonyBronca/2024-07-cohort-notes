
// to pause our syncronous program we can use the AWAIT in front of the fetch?
// to use this keyword, our function needs to be set to ASYNC?


// pretty much everything in JS, such as a function defaults to being syncronous in nature
// we can change setting for functions by adding the "ASYNC" keyword in front of it
async function getUsers(){
    // to grab things from an api we use ----> fetch (ASYNC)
    const res = await fetch("http://localhost:8000/users"); //async
    const data =  await res.json();  //to grab the body from the response we use.... but this returns a promise which we will have to ....
    return data;
};

async function createUser(name){

    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"name": name})
    }


    const res = await fetch("http://localhost:8000/users", options); // DO A POST TO THIS
    const data = await res.json();
    return data;
};


async function deleteUser(name){

    const options = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({"name": name})
    }


    const res = await fetch("http://localhost:8000/users", options);
    const data = await res.json();
    console.log(data);

}
console.log(deleteUser("spongebob"));


// createUser('patrick');



// console.log(getUsers());
