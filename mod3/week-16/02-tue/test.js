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
})

app.post("/users", (req, res) => {
    const { name } = req.body;
    database.Users.push({ name });
    return res.json({ Users: database.Users })
});

app.delete("/users", (req, res) => {
    const { name } = req.body;
    for (let i = 0; i < database.Users.length; i++) {
        let user = database.Users[i];
        if (user.name === name) {
            database.Users.splice(i,1);
        }
    }
    return res.json({ Users: database.Users })
})


const port = 8000;
app.listen(port, () => console.log("tuned in to port ", port));
