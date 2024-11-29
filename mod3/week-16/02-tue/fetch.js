async function getUsers(){
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    return data;
}

async function addUser(newName){

    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: newName})
    };

    const res = await fetch("http://localhost:8000/users", options);
    const data = await res.json();
    return data;
}
async function deleteUser(name){
    const options = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name})
    };

    const res = await fetch("http://localhost:8000/users", options);
    const data = await res.json();
    return data;
}

async function runFunctions(){
    let users = await getUsers();
    // let newUser = await addUser("Bill");
    // console.log(newUser);
    let deletedUsers = await deleteUser("Bill");
    console.log(deletedUsers);
}




runFunctions();
