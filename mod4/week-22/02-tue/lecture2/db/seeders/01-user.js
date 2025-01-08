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
      username: "anthonybronca" // 1
    },
    {
      username: "alexibettinger" // 2
    },
    {
      username: "edwardfelipe" // 3
    },
    {
      username: "sambae" // 4
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
