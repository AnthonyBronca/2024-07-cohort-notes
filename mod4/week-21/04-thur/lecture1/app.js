const express = require('express');
const app = express();
const {User} = require('./db/models');

// middleware
app.use(express.json());




// routes
app.get('/users', async (req, res, next) => {


    // method to replicate the query: SELECT * FROM <table>
    const users = await User.findAll(); //  returns an array of data objects (or an empty array if nothing is found)
    console.log(users);
    return res.json({Users: users})

});

app.get('/users/:id', async(req, res, next) => {

    const userId = req.params.id;

    const user = await User.findByPk(userId);

    return res.json({user: user})

})




const port = process.env.PORT || 8000

app.listen(port, ()=> console.log("Happy new year from port, ", port));
