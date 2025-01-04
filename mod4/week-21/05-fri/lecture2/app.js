const express = require('express');
const app = express();
const {User} = require('./db/models');


// middleware
app.use(express.json());


// routes

// route to get all users
// SELECT * FROM users;
app.get('/users', async(req, res, next)=> {

    const users = await User.findAll();

    return res.json(users);
});

// route to get one user

app.get("/users/:id", async(req, res, next) => {
    try {

        const userId = req.params.id;
        // grab one user based on id
        const user = await User.findByPk(userId);
        if(user){
            return res.json(user);
        } else {
            throw new Error("A user with that id was not found.");
        }
    } catch (error) {
        next(error);
    }
});

// create a new user
app.post("/users", async(req, res, next)=> {
    try {

        const {firstName, username, age, isAdmin} = req.body;
        if(!firstName || !username || age === undefined || isAdmin === undefined){
            throw new Error("You did not pass all of the valid body items required.");
        } else {

            const newUser = await User.create({firstName, username, age, isAdmin});

            return res.json({user: newUser});

        }

    } catch (error) {
        next(error);
    }
})


// update an exisiting user

app.put("/users/:id", async(req, res, next) => {
    try {
        const userId = req.params.id;
        const { firstName, username, age, isAdmin } = req.body;
        if (!firstName || !username || age === undefined || isAdmin === undefined) {
            throw new Error("You did not pass all of the valid body items required.");
        } else {
            // find the user we want to update
            const foundUser = await User.findByPk(userId);
            if(!foundUser){
                throw new Error("No user with that ID found");
            } else{

                foundUser.update({firstName, username, age, isAdmin});
                return res.json({ user: foundUser });
            }
        }

    } catch (error) {
        next(error);
    }
})

// deleting a user
app.delete("/users/:id", async(req, res, next) => {
    try {
        const userId = req.params.id;

        // find the user and see if they exist
        const userToDelete = await User.findByPk(userId);
        if(!userToDelete){
            throw new Error("No user with that ID found.");
        } else{

            userToDelete.destroy();
            return res.json({deletedUser: userToDelete});
        }

    } catch (error) {
        next(error);
    }
})



// error handling middleware
app.use((err, req, res, next) => {
    const errorMessage = err.message;
    const status = 500;
    res.status = status;
    return res.json({
        message: errorMessage,
        status
    })
})



const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log("Hello from port: ", port));
