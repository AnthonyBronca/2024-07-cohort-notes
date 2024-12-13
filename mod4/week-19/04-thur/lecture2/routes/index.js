const express = require("express");

const router = express.Router();



// get all posts
router.get("/", (req, res, next) => {
    return res.json({ posts: [] })
})

// get one post
router.get("/:id", (req, res, next) => {
    return res.json({ post: {} })
})


module.exports = router;
