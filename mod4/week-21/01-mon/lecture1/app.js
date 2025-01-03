const express = require('express');
const app = express();

// middle ware
app.use(express.json());


app.get('/test', (req, res, next) => {
    return res.json(":)");
})


const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log("Happy holidays from port: ", port));
