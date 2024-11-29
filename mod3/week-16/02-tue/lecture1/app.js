const express = require("express");
const app = express();
app.use(express.json());

const database = {
    Users: [
        { name: "anthony" },
        { name: "sam" },
        { name: "alexi" }
    ]
}

app.get("/users", (req, res) => {
    return res.json({ Users: database.Users })
});

app.post("/users", (req, res) => {
    const {name} = req.body;
    database.Users.push({name});
    return res.json({Users: database.Users})
})


// http -> does NOT USE THE DELETE/PUT/PATCH METHODS


// THIS IS AN API METHOD !!!!!
app.delete("/users", (req, res)=> {
    const {name} = req.body;
    for(let user of database.Users){
        if(user.name === name){
            delete user;
        }
    }
    return res.json({ Users: database.Users })
})

const port = 8000;

app.listen(port, ()=> console.log("hello from ", port));
