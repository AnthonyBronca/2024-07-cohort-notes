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
      // inserting dummy data into sql
      {
        firstName: "anthony",
        username: "anthonybronca"
      },
      {
        firstName: "edward",
        username: "edwardfelipe"
      },
      {
        firstName: "alexi",
        username: "alexibettinger"
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
