const express = require("express");

const router = express.Router();


router.get("/", (req, res, next) => {
    res.json({ posts: [] })
})

router.get("/:id", (req, res, next) => {
    res.json({ post: {} })
})


module.exports = router;
