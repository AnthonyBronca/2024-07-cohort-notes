const express = require('express');
const app = express();
const {User} = require('./db/models')

// middleware
app.use(express.json());


// routes

// SELECT * FROM users;
app.get('/users', async (req, res, next)=>{
    console.log(User);
    const users = await User.findAll(); // returns an array of objects from the model (or null if no data)

    return res.json({users})

});


// SELECT * FROM USERS where id = 3
app.get('/users/:id', async (req, res, next) =>{

    const userId = req.params.id;
    const user = await User.findByPk(userId) // takes an id and finds (quickly) or returns null if not found
    return res.json({user: user})

})


const port = process.env.PORT || 8000

app.listen(port, ()=> console.log("Happy 2025 from port ", port));


/*

CREATE TABLE users (
    id ksmerjkgaserg
    firstName ajwdfnajwnd
    username akjwndajkwdn

);



INSERT INTO users (firstname, username) VALUES ('anthony', 'anthonybronca')


 */
