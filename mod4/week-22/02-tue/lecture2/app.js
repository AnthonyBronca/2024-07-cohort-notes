const express = require('express');
const app = express();

// model imports
const {User, Post, Like} = require('./db/models');

// middleware
app.use(express.json());

// routes
app.get('/users', async(req, res, next)=>{
    try {
        const users = await User.findAll({
            where: {
                id: 1
            },
            include: {
                model: Post,
                include: {
                    model: Like,
                    as: "Likes"
                }
            }
        });
        return res.json(users);
    } catch (error) {
        next(error);
    }
});
app.get('/posts', async(req, res, next)=>{
    try {
        const posts = await Post.findAll({
            include: [
                {
                model: User
            },
            {
                model: Like,
                as: "Likes"
            }
        ]
        });
        return res.json(posts);
    } catch (error) {
        next(error);
    }
});
app.get('/likes', async(req, res, next)=>{
    try {
        const likes = await Like.findAll({
            order: [
                ['postId', 'DESC'],
                ['userId', 'ASC']
            ]
        });
        return res.json(likes);
    } catch (error) {
        next(error);
    }
});

// error handling middleware
app.use((err, req, res, next) => {
    res.status = 500;
    return res.json({message: err.message, statusCode: 500});
});

// set up
const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log('Port: ', port));
