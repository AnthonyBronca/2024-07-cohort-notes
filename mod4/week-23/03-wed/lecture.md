# Sequelize and Express functions


## Aggregate Data

When working with data, we often need to manipulate the data in some ways prior to sending it to the end user. This can mean doing things like performing math operations, or seperating data. Let's look at an example. Imagine you had some data like this:



`LIKES`

| id | postId | userId |
| -- | ------ | ------ |
|  1 |    1   |    1   |
|  2 |    1   |    2   |
|  3 |    1   |    3   |
|  4 |    2   |    2   |
|  5 |    2   |    3   |


If our table looks like this, we have no way of already seeing how many likes each post has. What we do have, however, is the ability to add up values. `postId` 1 is liked by `Users`: 1 , 2, and 3. If we add that up we would know that `postId` 1 has 3 likes. So to do this same process with code we have a few ways.

### Lazy Loading

This is a very effective way of performing aggregate mathamatical operations on our data using `sequelize`. We have a few methods we can use:

`count()` -> gets the number of entries/records
`min()` -> gets the value that was smallest within a column
`max()` -> gets the value that is the largest within a column
`sum()` -> gets the sum value of all the entries withion a column

For our example, we would want to use `count()` to see how many likes each post got

An express route would look like
```js
// boiler plate and imports

router.get("/posts", async(req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: Like,
            },
            attributes: {
                include: [
                    [Sequelize.fn('COUNT', Sequelize.col('Likes.id')), 'likeCount']
                ],
            },
            group: ['Post.id'],
        });
        return res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
});

// other routes and stuff


```

The problem with these types of queries is that they can be unintutitve to build, and will not always return data the way we want so easily. Sometimes we have a niche type of query that we want to do, or that we need to do quickly using `javascript` given time contraints within a sprint. So we can instead use another option

### Eager Loading

This is when you load a query, then you do some `javascript` to get it to work. Here is an example using the likes again:

```js

router.get("/posts", async(req, res, next) => {
  try {
        const posts = await Post.findAll({
            include: {
                model: Like,
            },
        });

        // get the likes of each post

        let resArr = [];

        for (let post of posts) {
            let count = 0;
            // convert sequelize object into a js object
            let postBody = await post.toJSON();
            for (let i = 0; i < postBody.Likes.length; i++) {
                count++;
            }
            postBody.likesCount = count;
            resArr.push(postBody);
        }

        return res.status(200).json({ Posts: resArr });
    } catch (error) {
        next(error);
    }
});

```



# Sequelize and Express Pagination

Pagination is the process of getting limited data and segmenting all the data into `pages`. This is the basis for infinite scrolls.

Say we have our data for posts:

```json
{
    "Posts": [
        {
            "id": 1,
            "post": "hello world",
            "userId": 1,
            "createdAt": "2025-01-15T21:08:10.000Z",
            "updatedAt": "2025-01-15T21:08:10.000Z",
            "Likes": [
                {
                    "id": 4,
                    "postId": 1,
                    "userId": 2,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                },
                {
                    "id": 7,
                    "postId": 1,
                    "userId": 3,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                },
                {
                    "id": 10,
                    "postId": 1,
                    "userId": 4,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                }
            ],
            "likesCount": 3
        },
        {
            "id": 2,
            "post": "I am alexi",
            "userId": 2,
            "createdAt": "2025-01-15T21:08:10.000Z",
            "updatedAt": "2025-01-15T21:08:10.000Z",
            "Likes": [
                {
                    "id": 1,
                    "postId": 2,
                    "userId": 1,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                },
                {
                    "id": 8,
                    "postId": 2,
                    "userId": 3,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                }
            ],
            "likesCount": 2
        },
        {
            "id": 3,
            "post": "I am edward",
            "userId": 3,
            "createdAt": "2025-01-15T21:08:10.000Z",
            "updatedAt": "2025-01-15T21:08:10.000Z",
            "Likes": [
                {
                    "id": 2,
                    "postId": 3,
                    "userId": 1,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                },
                {
                    "id": 5,
                    "postId": 3,
                    "userId": 2,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                }
            ],
            "likesCount": 2
        },
        {
            "id": 4,
            "post": "I am edward",
            "userId": 4,
            "createdAt": "2025-01-15T21:08:10.000Z",
            "updatedAt": "2025-01-15T21:08:10.000Z",
            "Likes": [
                {
                    "id": 3,
                    "postId": 4,
                    "userId": 1,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                },
                {
                    "id": 6,
                    "postId": 4,
                    "userId": 2,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                },
                {
                    "id": 9,
                    "postId": 4,
                    "userId": 3,
                    "createdAt": "2025-01-15T21:08:10.000Z",
                    "updatedAt": "2025-01-15T21:08:10.000Z"
                }
            ],
            "likesCount": 3
        }
    ]
}
```

This may be a lot of data to show on a site. So what we can do is use
`pagination` in order to segment it.

In the same route, we can make an object for the page and the amount of items we want per page:

```js
router.get('/posts', async(req, res, next) => {
    try {

        const paginationObj = {
            limit: 2,  // amount of items per page
            offset: 0
        }

        const posts = await Post.findAll({
            include: {
                model: Like,
            },
            ...paginationObj
        });

        // get the likes of each post

        let resArr = [];

        for (let post of posts) {
            let count = 0;
            // convert sequelize object into a js object
            let postBody = await post.toJSON();
            for (let i = 0; i < postBody.Likes.length; i++) {
                count++;
            }
            postBody.likesCount = count;
            resArr.push(postBody);
        }

        return res.status(200).json({ Posts: resArr });
    } catch (error) {
        next(error);
    }
});

```

We will learn how to make this dynamic in the future when we cover `search filters` and how to `query`
