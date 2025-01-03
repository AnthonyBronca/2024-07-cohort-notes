# Express + Sequelize (cont.)

So far, we have learned about creating migrations and creating models. We will need to work with data and inserting mass amount of data into our database in order to work with more examples. To do this, we will be learning about `seeders` and making basic Queries.


## Seeders

Seeders allow us to mass input data on application start. This can be useful for applications that need to be filled with pre-amde data. Maybe like a fast-food restaurant chain that needs to seed every new restaurant with the same menu items as those from other restaurants within the chain. For our pourposes, it can be used to make the site feel more real since we will not be having a lot (if any) user traffic in order to work with a real-life type application.


To create seeders, we can use `npx sequelize seed:generate --name <seedname>`

Exameple: `npx sequelize seed:generate --name user`

This will create a generic file within the `seeders` folder, and it will have pre-filled boilerplate code.

There are a few things we need to do on this page. Firstly, we need to change the seeder table name. The generic example provided should be "People". This tells us that we need to have a plural version of the table we want to seed. For this example, we will continue with "Users"


Then, we will want to fill in the seeder array with objects matching our migration and model validations. Here is an example:


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
      firstName: "edward",
      username: 'edwardfelipe'
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


I added what our migration might look like so that we can easily reference why I filled out specific key-value pairs.


To seed our database with the dummy-data we can run `npx dotenv sequelize db:seed:all`

Notice we need the `dotenv` flag again because we are affecting the database by inserting data, and not just creating files and folders

*NOTE* There are two ways to insert seeders



### BulkInsert vs BulkCreate

`BulkInsert` is the default insertion method provided by the `npx sequelize` cli module. It will solely seed our data matching whatever our mgiration validations are (which shouldn't be as many as the models may have). This can be useful if you create good data, but if you want to make sure that you are creating good dummy data that matches the type of data a user will haev to complete on your website, then you will want to use `bulkCreate`. What `bulkCreate` allows us to do is to run the `create` method we will learn about alter in order to create a mass amount of resources. This will, however, use the `models` as a safety-net. Make sure, when creating seed data, that you create good data that matches the key-value pairs required to create data, as well as reference the validations you ned to pass to prevent bad data from getting in to your application.





## Queries

Over on the express side of things, once we have our `migrations`, `models`, and `seeders` done, we can finally start to do some queries.

We will work with 2 basic `SELECT` type queries.

We can replicate the `SELECT * FROM ` SQL functionality using Sequelize built-in methods.

We will want to grab the model from the `models/index.js` file to determine which model we want to run a query for. Then we can use the `findAll` query in order to pull in data. Note, this is an asyncronous function so we will need to `await` it.


```js
const express = require('express');
const app = express();
app.use(express.json());
const {User} = require('../db/models')

app.get('/users', async(req, res, next) => {

    const users = await User.findAll();


    return res.json({users});

});


const port = process.env.PORT || 8000;
app.listen(port, () => console.log("listening on port: ", port));



```


Now, we should be able to execute a query via the model validations and associations in order to find all the relevant data within the `Users` field.

If we want to find one specific user, we can use the `id` field on the table to quickly find it.

this can be done using sequelize's built-in `findByPk` (Make sure you make the k lowercase)

```js
const express = require('express');
const app = express();
app.use(express.json());
const {User} = require('../db/models')

app.get('/users', async(req, res, next) => {

    const users = await User.findAll();


    return res.json({users});

});

app.get('/user/:id', async(req, res, next) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId);

    return res.json({user});
})


const port = process.env.PORT || 8000;
app.listen(port, () => console.log("listening on port: ", port));


```
