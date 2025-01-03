const express = require('express');
const app = express();
app.use(express.json());
const {User} = require('./db/models');




app.get('/', async (req, res, next) => {
    const users = await User.findAll(); // SELECT * FROM <table>
    console.log(users);

    return res.json({users});
})


const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log("listening on port: ", port));
