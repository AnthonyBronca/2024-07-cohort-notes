const express = require("express");

const app = express();
app.use(express.json());

let favoriteFood = "";

// GET
app.get("/favoriteFood", (req, res, next) => {
    return res.json({favoriteFood})
})

// POST to add a new fav food

app.post("/favoriteFood", (req, res, next) => {
    const {newFavoriteFood} = req.body;
    favoriteFood = newFavoriteFood;
    return res.json({favoriteFood: newFavoriteFood});

})



const port = 8000;
app.listen(port, ()=> console.log("<3 from port: ", port));
