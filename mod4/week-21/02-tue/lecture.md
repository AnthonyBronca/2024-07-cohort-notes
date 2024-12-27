# Express (Advanced), SQL, and Sequelize

## Disclaimers
Alright, i'm not going to sugar coat it. These next 2 weeks will be rough. It can be easy with reptition, but there is a lot of content. If you have been falling behind with `Express`, or `SQL`, this will be rough. Please attempt to catch up and do as much work as you can.

The next test is considered the hardest test at App Academy, but it also one of the closest to what you will do in a real-world scenario

## Express (Advanced)

On that note, let's jump into it. We have learned that `Express` is a package that we can use to help streamline the process of making `backend` `servers` using `javascript`. But so far we have ONLY looked at the `server` portion of the `backend`. It is now time to hook it up with the idea of `databases` which we have been playing around with using `sqlite` and `SQL`

Inside of an Express Application, we will be tethering our database files to routes. For example, if I hit the `GET /users` route, I may want to make some query to `SELECT usernames FROM users;`. Or if I hit the `POST /users` route, I may want to do some query like: `INSERT INTO users (usernames) VALUES ('anthony');`  While we can use RAW SQL to accomplish this task, we will be introducing a new piece of technology. An `ORM`


## Sequelize

Sequelize is an `Object Relational Mapping` (ORM) framework that we can use to help us write javascript in an `OOP` way, and have it execute `SQL` on our behalf. There are some very key reasons why you and your teams in the future may choose to use an `ORM`

- 1. Safety. A lot of ORMs and programming languages offer type-checking and the ability to test code in a more secure way that is less `declarative` and more `progamatic`. This can help reduce `SQL injections` and other malicious attacks aimed at our database
- 2. Faster Development. While there is a little more start up to use an ORM, once everything is hooked up we can more easily add extensions and new features to our database/backend down the line
- 3. Safer Development: Many companies and teams will choose to use an ORM because it is a good way to help make sure everyone is able to write code in a similar fashion. This is important because you want to be careful what type of queries are being made, and what queries end-users have access to. We can use programming languages to create a safety net to better ensure that queries are passing test-specs, meeting user story goals, and that the queries are executing as expected with all the required data input/output

We will be constucting Sequelize using 4 points:

1. Creating a Migration
2. Creating a Model
3. Creating a Seeder
4. Referencing the Model in an Express Route

### Migrations

A migration is how we will create the tables, this is the `SQL` portion to the ORM that allows us to establish the type of data our database will use. Keep in mind that this file will be using `JavaScript` to execute a `SQL` command that will create table/s based on your specificiations.


### Models

A model is how we create `JavaScript`'s reference to the SQL tables. We do this using `Class`es and that will help establish our blueprint. Models will also add an extra layer of protection while executing queries PRIOR to the query getting to the database

### Seeders

An object that contains all data for a database. Any data here will be inserted into the database on creation. We usually use this for things like creating dummy data in development, but in the real world these will likely be company offerings. For example, if you were working at McDonalds, some seeders may be the menu items that need to be injected into the database but not hard coded into the frontend application


### Referencing Model in Express

Once we have all 3 items from the above example set up, we are ready to make a query from `Express` to our `Database` using `Sequelize`. We would do this by invoking pre-made methods on the `Models` in order to do things like `CREATING`, `READING`, `UPDATING`, and/or `DELETING`


## Sequelize Set up

To get started using Sequelize we need to install more packages. Recall that so far we learned to install the following packages:

```
npm install express dotenv dotenv-cli
npm install -D nodemon
```

Now we are going to add to this the following packages:

- Under production installs we will add `sequelize` and `sequelize-cli`
- Under development installs we will add `sqlite3`

Install commands will now look like:

```
npm install express dotenv dotenv-cli sequelize sequelize-cli
npm install -D nodemon
```

Once we have this all installed, we need to tell `Sequelize` how we want our set up to go. To do this, we will use a `.sequelizerc`

#### .sequelizerc File

The `.sequelizerc` file is added to a `sequelize` project in order to tell the `sequelize-cli` commands how we want to set up our file/folder strutures and where certain things will be found when we start querying later on.

We COULD begin by first running (This is not the final output):

```
npx sequelize init
```

The `npx` command allows us to run sequelize via an executable on `npm` rather than installing the initializer that can add further bloat to our projects unnecessairly

You will have a folder structure created that will look something like:

```
|── server
    ├── app.js
    ├── config
    │   └── config.json
    ├── migrations
    ├── models
    │   └── index.js
    ├── package.json
    └── seeders
```
To clean this up, we use the `.sequelizerc` to insert all these folders into a `db` folder


First, create a `.sequelizerc` file in the root of your backend folder (server). It should have something in it that looks like:

```js
// .sequelizerc

const path = require("path");

module.exports = {
  config: path.resolve("config", "database.js"),
  "models-path": path.resolve("db", "models"),
  "seeders-path": path.resolve("db", "seeders"),
  "migrations-path": path.resolve("db", "migrations"),
};
```

This tells it that we need to create some folders inside of the `db` directory, and a configuration folder inside the `config` folder. Under the hood, the command will run `mkdir` and `touch` commands on our behalf to create the folders. Once the `.sequelizerc` file is created, if done correctly, `npx sequelize init` will create a folder structure like this now:


```

|── server
    ├── app.js
    ├── config
    │   └── database.js
    ├── db
    │   ├── migrations
    │   ├── models
    │   │   └── index.js
    │   └── seeders
    ├── package-lock.json
    └── package.json

```
##### Database Configuration

In the `database.js` file, a bunch of pre-filled information was added that we need to update.

You should see something like:

```js
// database.js

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

But we want to change this stuff to use `sqlite` in development (and later postgres in production). We also want to make sure all of these configuarations are exported:


```js
module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: "sqlite", // you can change this to postgres if you learn to use postgres in dev
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
};

```

Additionally, make sure you have a `.env` file set up. It should look something like this:

```sh
PORT=8000
NODE_ENVIRONMENT=development
DB_FILE=db/test.db

```

#### Migrations

DOCS: https://sequelize.org/docs/v6/other-topics/migrations/

migrations will allow us to have version control and create `SQL` tables using `JavaScript`

We can use `Sequelize` to auto generate some migrations for us using the `sequelize-cli` package we installed earlier. In our terminal (make sure you are cd'ed into the right directory) we can create a migration with a specified table name:

```
npx sequelize-cli migration:generate --name <table name>
```

Let's create a a User table:

```
npx sequelize-cli model:generate --name User
```

*NOTE*: The table HAS to be singular,


But a table for a `User` has more than just a table name. It has `attributes`. If we ran the comamnd above by itself, it would be the same as doing:

```sql
CREATE TABLE users ();
```

We want to fill this in with attributes. Recall that we need to provide `SQL` data types:

```
npx sequelize model:generate --name User --attributes firstName:string,username:string
```

*NOTE*: make sure you do not add any spaces when creating attributes. A space in your terminal indicates a new argument and `Sequelize` parses the 1 giant string argument into many sub-arguments

(side bar), you actually don't need `cli` in the command if you have it installed already, which you should

Once you run this new updated command we will have something like this in your `migrations` folder


```js

// file name is a bunch of numbers indicating the year/month/day/time the file was created
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
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

```


Note: I love to change the file name. If you want to do so also, make sure you give it numerical order. So for me, the file would be renamed to:
`01-users.js` in the `migrations` folder


We can now change the file to have additional `Constraints`:


```js
// 01-users.js (renamed migration)
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
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATATYPES.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.DATATYPES.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

```


All we need to do now is to migrate! Let's run:

```
npx dotenv sequelize db:migrate
```

This will migrate our files into the `database` file specified in your `.env` file. For me it is `test.db`

We can use `sqlite` to see that the schema and the table was created successfully for us
