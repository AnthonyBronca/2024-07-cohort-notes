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
        firstName: "anthony",
        username: "anthonybronca",
        age: 30,
        isAdmin: true
      },
      {
        firstName: "alexi",
        username: "alexibettinger",
        age: 25,
        isAdmin: false
      },
      {
        firstName: "edward",
        username: "edwardfelipe",
        age: 25,
        isAdmin: false
      },
      {
        firstName: "will",
        username: "wvincent",
        age: 32,
        isAdmin: true
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
