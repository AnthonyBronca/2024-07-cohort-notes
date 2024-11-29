

// to retrive information from an API we can use fetch keyword ?
// to pause code and make it behave async we use the await key word ?


// by default most things in JS behave syncronously. To change this to instead be set to asyncrounous mode we use the ____ keyword


async function getUsers(){
    const res = await fetch("http://localhost:8000/users"); // async
    const data = await res.json();  // turn the body datastream from the response into a usable object
    console.log(data); // sync -> behave async
    return data;
};


async function addUser(name){

    // we need 3 things to declare our data for transmit
    // 1. method
    // 2. headers
    // 3. body
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: name}) // turns our JSON object into a string -> packaging our data for delivery
    }

    const res = await fetch("http://localhost:8000/users", options); //by default fetch is a GET, but we can pass in an options object to it
    const data = await res.json();
    console.log(data);
    return data;

}



async function deleteUser(name){


    const options = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name})
    }

    const res = await fetch("http://localhost:8000/users", options);
    const data = await res.json();
    console.log(data);
    return data;
}

// addUser("patrick");
// deleteUser("patrick");




getUsers();
