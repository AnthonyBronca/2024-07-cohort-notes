# Relationships with Sequelize


When coding relationships with Sequelize, we will need to manage a few things:

1. The migrations
2. The models
3. The seeders
4. The queries



## Adding Relationships to a Migration

For this demo, we'll create two models and migrations: `User` and `Post`

```
npx sequelize model:generate --name User --attributes firstName:string,username:string
```

```
npx sequelize model:generate --name Post --attributes postBody:string,userId:integer
```

In the `User` migration file, we can update it as we have been:

```js
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

```

In the `Post` migration file, it will be very similar. There is one caveat, we have to add a `relationship`. We do this by adding a `references` key. We can also add an `onDelete` key to get the `CASCADE` effect we learned about when we did it with SQL.

*NOTE*: Make sure that you refernece the `Users` migration file using the name it was given and the column we want to look it up by (the id)

```js
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postBody: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: "Users", key: "id"},
        onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};


```

## Adding Relationships to a Model

Each `model` file has a section for relationships towards the top. We will want to have two way relationships:

`Users` -> has many `Posts`
`Posts` -> belongs to a `Users`

This will establish a `one-to-many` relationship

In the `Users` model file we can update it to look like this:

```js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, {foreignKey: 'userId', onDelete: 'cascade', hooks: true});
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
        isAlpha: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: true,
        len: [1, 25]
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


```


Our `Post` model will look like:

```js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'cascade', hooks: true});
    }
  }
  Post.init({
    postBody: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 250]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        onDelete: 'cascade',
      }
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};


```

Notice that we are adding a `model` relationship to each one to establish the `one-to-many`

Make sure to migrate:

```
npx dotenv sequelize db:migrate
```

## Adding Relationships to a Seeder

In the seeder file, we can create two seeders:

```
npx sequelize seed:generate --name user
```

```
npx sequelize seed:generate --name post
```

In the `user` seeder, we can create it as normal:

```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Users', [
    {
      firstName: "anthony",
      username: "anthonybronca"
    },
    {
      firstName: "edward",
      username: "edwardfelipe"
    },
    {
      firstName: "sam",
      username: "sambae"
    },

   ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  }
};


```


The `post` seeders will have to refernece the `id` field of the user we want to create.

```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Posts', [
    {
      postBody: "Hello world",
      userId: 1
    },
    {
      postBody: "This is a new Post",
      userId: 1
    },
    {
      postBody: "Hello I am edward",
      userId: 2
    },
    {
      postBody: "Hello I am sam",
      userId: 3
    },


  ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Posts', null, {});
  }
};


```


*Note*, if you simply `undo` seeders and `add` seeders again, the `id` will be thrown off. For this reason, it can often be easier to just `migrate:undo` a database (or delete it entirely in testing) to allow `id` columns to reset to 0


Make sure to seed:

```
npx dotenv sequelize db:seed:all
```


## Querying with Relationships

Back on the `server` side of things, we can add a query to a route to `findAll` users

```js
// app.js
const express = require('express');
const app = express();
// model imports
const {User, Post} = require('./db/models');


// middleware

app.use(express.json());

// routes
app.get("/users", async(req, res, next) => {
    try {
        const users = await User.findAll();
        return res.json({users});

    } catch (error) {
        next(error);
    }
});

// error handling middleware

app.use((err, req, res, next) => {
    res.status = 500;
    return res.json({message: err.message, status: 500});
})


const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log("listening on port: ", port));



```

*Note* remember we have to import the models from the `db/models/index` file.

This current query to the route `/users` will return something like:


```json
{
    "users": [
        {
            "id": 1,
            "firstName": "anthony",
            "username": "anthonybronca",
            "createdAt": "2025-01-07T00:35:42.000Z",
            "updatedAt": "2025-01-07T00:35:42.000Z"
        },
        {
            "id": 2,
            "firstName": "edward",
            "username": "edwardfelipe",
            "createdAt": "2025-01-07T00:35:42.000Z",
            "updatedAt": "2025-01-07T00:35:42.000Z"
        },
        {
            "id": 3,
            "firstName": "sam",
            "username": "sambae",
            "createdAt": "2025-01-07T00:35:42.000Z",
            "updatedAt": "2025-01-07T00:35:42.000Z"
        }
    ]
}
```

Now let's see what `findAll` will do on `posts`. I'll add a new `/posts`route:

```js
app.get("/posts", async(req, res, next)=> {
    try {
        const posts = await Post.findAll();
        return res.json(posts);
    } catch (error) {
        next(error);
    }
})


```

This route will return `JSON` like this:

```json
[
    {
        "id": 1,
        "postBody": "Hello world",
        "userId": 1,
        "createdAt": "2025-01-07T00:35:42.000Z",
        "updatedAt": "2025-01-07T00:35:42.000Z"
    },
    {
        "id": 2,
        "postBody": "This is a new Post",
        "userId": 1,
        "createdAt": "2025-01-07T00:35:42.000Z",
        "updatedAt": "2025-01-07T00:35:42.000Z"
    },
    {
        "id": 3,
        "postBody": "Hello I am edward",
        "userId": 2,
        "createdAt": "2025-01-07T00:35:42.000Z",
        "updatedAt": "2025-01-07T00:35:42.000Z"
    },
    {
        "id": 4,
        "postBody": "Hello I am sam",
        "userId": 3,
        "createdAt": "2025-01-07T00:35:42.000Z",
        "updatedAt": "2025-01-07T00:35:42.000Z"
    }
]
```

Only problem is that we have the `userId` of the user we want to include in the `post` body, but we do not have the actual `user` data. This may lead you to believe that we can just do some for loop through each `post` body and find the userId one at a time. This is known as doing an `N + 1` query. They are extremely ineffective and you should avoid this if possilbe, although sometimes it is required to brute force your way during a sprint period.

Here is what we can do to query 2 models at the same time through their established relationship (similar to what we did in SQL):

```js
app.get("/posts", async(req, res, next)=> {
    try {
        const posts = await Post.findAll({
            include: {model: User}
        });
        return res.json(posts);
    } catch (error) {
        next(error);
    }
});
```

Notice that all I had to do was add an `include` key and what `model` I wanted to add. How easy!

The result will be something like:

```json
[
    {
        "id": 1,
        "postBody": "Hello world",
        "userId": 1,
        "createdAt": "2025-01-07T00:35:42.000Z",
        "updatedAt": "2025-01-07T00:35:42.000Z",
        "User": {
            "id": 1,
            "firstName": "anthony",
            "username": "anthonybronca",
            "createdAt": "2025-01-07T00:35:42.000Z",
            "updatedAt": "2025-01-07T00:35:42.000Z"
        }
    },
    {
        "id": 2,
        "postBody": "This is a new Post",
        "userId": 1,
        "createdAt": "2025-01-07T00:35:42.000Z",
        "updatedAt": "2025-01-07T00:35:42.000Z",
        "User": {
            "id": 1,
            "firstName": "anthony",
            "username": "anthonybronca",
            "createdAt": "2025-01-07T00:35:42.000Z",
            "updatedAt": "2025-01-07T00:35:42.000Z"
        }
    },
    {
        "id": 3,
        "postBody": "Hello I am edward",
        "userId": 2,
        "createdAt": "2025-01-07T00:35:42.000Z",
        "updatedAt": "2025-01-07T00:35:42.000Z",
        "User": {
            "id": 2,
            "firstName": "edward",
            "username": "edwardfelipe",
            "createdAt": "2025-01-07T00:35:42.000Z",
            "updatedAt": "2025-01-07T00:35:42.000Z"
        }
    },
    {
        "id": 4,
        "postBody": "Hello I am sam",
        "userId": 3,
        "createdAt": "2025-01-07T00:35:42.000Z",
        "updatedAt": "2025-01-07T00:35:42.000Z",
        "User": {
            "id": 3,
            "firstName": "sam",
            "username": "sambae",
            "createdAt": "2025-01-07T00:35:42.000Z",
            "updatedAt": "2025-01-07T00:35:42.000Z"
        }
    }
]
```


You can make these queries more advanced, but we will look into that at a later time
