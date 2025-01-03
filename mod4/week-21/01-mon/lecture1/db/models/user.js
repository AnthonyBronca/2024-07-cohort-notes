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
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 30]
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [3, 25],
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
