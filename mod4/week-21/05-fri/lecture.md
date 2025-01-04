# Sequelize Validations and Queries

## Model Validations

We learned, briefly, that we can make model validations using the `validate` key on a model, but there a lot of validations we can choose from. In fact, we can even make our own custom validations.

Let's look at our `User` model again:


```js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // length
        len: [3, 30] // [min, max] (inclusive)
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 25]
        // length
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


```

So far, we are using the `len` key, which will allow us to validate the length of an item via the models. But let's look at some other use cases we may want to check. For this, we're going to modify the model a little bit so that we also have an integer and boolean data types:


```js
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // length
        len: [3, 30] // [min, max] (inclusive)
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 25]
        // length
      }
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
    },
    isAdmin: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate: {

        }
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

```
