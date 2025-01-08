# Many-to-Many and Advanced Queries

## Many-to-Many

`many-to-many` relationships are very similar to one-to-many relationships. It will require us to set up a `through` table. In this example, we can set one up for likes, which will have the information for a `post` and `user`. This will be our through table because One user can have many likes, and One post can be liked by many users.

Start by creating a User, Post, and then Like migrations:

`Users` migration:


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

`Post` migration:

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
      post: {
        type: Sequelize.STRING(250),
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "Users", key: 'id'},
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};

```

`Like` Migration
```js
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users', key: 'id'},
        onDelete: 'CASCADE'
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Posts', key: "id"},
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Likes');
  }
};

```


On the Model side, it will be similar to `one-to-many` relationships:

`Users` model:

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
      User.hasMany(models.Like, {foreignKey: 'userId', onDelete: 'cascade', hooks: true});
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1,25]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


```


`Post` Model:

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
      Post.hasMany(models.Like, {foreignKey: 'postId', onDelete: 'cascade', hooks: true});
      Post.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'cascade', hooks: true });
    }
  }
  Post.init({
    post: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 250]
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};


```


`Like` Model:

```js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Like.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'cascade', hooks: true});
      Like.belongsTo(models.Post, {foreignKey: 'postId', onDelete: 'cascade', hooks: true});
    }
  }
  Like.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};

```


Now we can `migrate` the tables and work on seeders.

Make 3 seeders for User, Post, and Like


`User` seeder:


```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   await queryInterface.bulkInsert('Users', [
    {
      username: "anthonybronca",
    },
    {
      username: "alexibettinger",
    },
    {
      username: "edwardfelipe",
    },
    {
      username: "sambae",
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Users', null, {});
  }
};


```


`Post` seeders:


```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Posts', [
      {
        post: "Hello",
        userId: 1,
      },
      {
        post: "Hii",
        userId: 2,
      },
      {
        post: "I am edward",
        userId: 3,
      },
      {
        post: "I am sam",
        userId: 4,
      },
      {
        post: "What is up eeveryone",
        userId: 1,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};


```


`Like` Seeders:


```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Likes', [
      {
        postId: 1,
        userId: 2
      },
      {
        postId: 1,
        userId: 3
      },
      {
        postId: 1,
        userId: 4
      },
      {
        postId: 2,
        userId: 1
      },
      {
        postId: 2,
        userId: 3
      },
      {
        postId: 3,
        userId: 1
      },
      {
        postId: 3,
        userId: 2
      },
      {
        postId: 4,
        userId: 3
      },
      {
        postId: 4,
        userId: 1
      },

      {
        postId: 2,
        userId: 4
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Likes', null, {});
  }
};


```



Make sure to seed your database.


Finally, on the query side, we can make a query for our `post` to include multiple models:

`app.js`
```js
const express = require('express');
const app = express();
const {User, Post, Like}  = require('./db/models');


app.use(express.json());


app.get("/users", async(req, res, next)=>{
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (error) {
        next(error);
    }
})

app.get("/posts", async(req, res, next)=>{
    try {
        const posts = await Post.findAll({
            include: [
                {model: User},
                {model: Like}
            ]
        });
        return res.json(posts);
    } catch (error) {
        next(error);
    }
})

app.get("/likes", async(req, res, next)=>{
    try {
        const likes = await Like.findAll();
        return res.json(likes);
    } catch (error) {
        next(error);
    }
})


app.use((err, req, res, next)=>{
    res.status = 500;
    return res.json({message: err.message, status: 500});
})

const port = process.env.PORT || 8000;

app.listen(port, ()=> console.log("port: ", port));


```



## Advanced Queries

We can use a few key words to make our queries more advanced. For now, we will look at:

- `where`: Allows us to create a filter to return data that meets a specific condition

```js
app.get("/users", async(req, res, next)=>{
    try {
        const users = await User.findAll({
            where: {
                id: 1
            },
        });
        return res.json(users);
    } catch (error) {
        next(error);
    }
})

```

- `order`: allows us to change the order of the data
    - `asc`: organizes the data in ascending format
    - `desc`: organizes the data in descending format

```js
app.get("/likes", async(req, res, next)=>{
    try {
        const likes = await Like.findAll({
            order: [['userId', 'ASC']]
        });
        return res.json(likes);
    } catch (error) {
        next(error);
    }
});

```

- `include`: allows us to join other models (with associations)
    - `as`: allows us to rename the model reference
    - `model`: allows us to choose which model we want to bring in


```js
app.get("/users", async(req, res, next)=>{
    try {
        const users = await User.findAll({
            where: {
                id: 1
            },
            include: [
                {
                    model: Post,
                    as: "Posts",
                    include: {
                        model: Like,
                        as: "Likes"
                    },
                }
            ],

        });
        return res.json(users);
    } catch (error) {
        next(error);
    }
})

```
