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
      validate: {
        len: [1, 30],
        isAlpha: true,
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 25],
        isValidUsername(val){
          const badUserNames = new Set(["poop", "badName", "lol"]);
          if(badUserNames.has(val)){
            throw new Error("That is an invalid username");
          }
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 18,
        max: 130,
      }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
