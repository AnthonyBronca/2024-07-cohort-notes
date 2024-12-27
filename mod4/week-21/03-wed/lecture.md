# Models

We learned how to create migrations for our `Sequelize` application, but now we need to pair our `SQL` with our `JavaScript`. To do this, we use `Models`. We will be using `Models` for queries, additional data validation, and additional safety checks on code


*Note*: Models live on the SERVER side of the backend, and Migrations manage the DATABASE side of the backend


In the previous lecture, we had set up some migrations for our application. But now we will add the `models` to that same application.


In the `db/models` folder, `npx sequelize model:generate` created the file for us and prefilled it with some boilerplate code. It should look like this:


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
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

```

To break this down, We have a `User` class that is a `Model`. User will be loaded up with a `firstName`, `username`, and we can add additional information this later. For now, let us create some simple contraints

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
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
       len: [3,15]
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

```

Now we do not allow `null` data types, and we have the `UNIQUE` constriant for usernames. We'll learn about additional data validations later, but for now we will keep it simple with the `validation` key provided that checks that the length of the username is between 3 and 15 characters long


Now that we have that model, we can use it when querying data later. For now, we need data!

# Seeders

Seeders, in our applications, will be used to inject dummy data into the database. If you look inside your `seeders` folder though, it is probably empty! Just like when we created the `migrations` we were able to use the terminal to create files and pre-load the boilerplate code, we can do the same here:

```
npx sequelize generate:seed --name User
```

This will create a seeder file in your `/db/seeders` folder. Notice it has that really long file name. I will be renaming that to `01-users.js` as well

Inside you will see boilerplate like so:

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
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


```

Examples are commented out. All we need to do is comment in the example, and replace it with our data

1. Make sure to use PLURAL table name with correct capitalization
2. Make sure to create an object that meets the criteria of what your migration/models are stating (so if you have 'username:unique' over there, you can't reuse usernames here)

let's add 3 user seeders:


```js
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     *
     * User Migration Example:
     *  id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
     *
    */
   await queryInterface.bulkInsert('Users', [
    {
      firstName: "anthony",
      username: 'anthonybronca'
    },
    {
      firstName: "sam",
      username: 'sambae'
    },
    {
      firstName: "alexi",
      username: 'alexibettinger'
    }
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

Now that we have an array of user objects made, we can populate that database file we have (if you don't have one, make sure to migrate first!)

To seed your database with all seeder files
```
npx dotenv sequelize db:seed:all
```

To undo seeders you can do:

```
npx dotenv sequelize db:seed:undo:all
```


At this point, we can use the `sqlite3` shell to see our data using a `SELECT * FROM users;` query
You should see something like

| id | firstName |    username    |      createdAt      |      updatedAt      |
|--- | --------- | -------------- | ------------------- | ------------------- |
| 1  | anthony   | anthonybronca  | 2024-12-27 05:06:41 | 2024-12-27 05:06:41 |
| 2  | edward    | edwardfelipe   | 2024-12-27 05:06:41 | 2024-12-27 05:06:41 |
| 3  | alexi     | alexibettinger | 2024-12-27 05:06:41 | 2024-12-27 05:06:41 |
