
const express = require("express");
const app = express();

// import the user model
const {User} = require("./db/models");

// middlewares

app.use(express.json());



// routes

app.get("/users", async (req, res, next) => {

    // query all of the users from the database
    const users = await User.findAll();
    console.log(users);
    return res.json(users);
});

app.get("/users/:id", async(req, res, next) => {
    try {

        const userId = req.params.id;

        const user = await User.findByPk(userId);

        if(user){
            return res.json(user);
        } else {
            throw new Error("No User found");
        }

    } catch (error) {
        next(error);
    }
});

// route to create a new user

app.post("/users", async(req, res, next) => {
    try {

        const {firstName, username, age, isAdmin} = req.body;
        // check to make sure we have all the items needed to create a new user

        if(!firstName || !username || age === undefined || isAdmin === undefined){
            throw new Error("You need to pass in all the of correct body items");
        } else{
            // create a new user if we have all the valid stuff
            const newUser = await User.create({firstName, username, age, isAdmin})

            return res.json(newUser);
        }



    } catch (error) {
        next(error);
    }
})


// route to update a user
app.put("/users/:id", async(req, res, next)=> {
    try {
        const userId = req.params.id;
        const {firstName, username, age, isAdmin } = req.body;

        const userToUpdate = await User.findByPk(userId); // either find the user, or we get null
        if(!userToUpdate){
            throw new Error("User could not be found with the provided ID");
        } else{
            userToUpdate.update({firstName, username, age, isAdmin});
            console.log(userToUpdate);
            return res.json({user: userToUpdate});
        }
    } catch (error) {
        next(error);
    }
});


// route to delete a user
app.delete("/users/:id", async(req, res, next)=> {
    try {

        const userId = req.params.id;

        // find that the user we want to delete exists
        const userToDelete = await User.findByPk(userId);
        if(userToDelete){
            // delete the user
            const deletedUser = await userToDelete.destroy();
            return res.json({deletedUser});
        } else{
            throw new Error("User could not be found with the provided ID");
        }

    } catch (error) {
        next(error);
    }
})




// error handling middleware
app.use((err, req, res, next)=> {
    const errorMessage = err.message;
    res.status = 500;
    return res.json({
        message: errorMessage,
        status: res.status
    })
})


const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log("Hello from port: ", port));
