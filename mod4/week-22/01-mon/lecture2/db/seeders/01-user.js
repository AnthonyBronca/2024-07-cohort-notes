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
        firstName: "anthony", // 1
        username: "anthonybronca"
      },
      {
        firstName: "edward", // 2
        username: "edwardfelipe"
      },
      {
        firstName: "sam", // 3
        username: "sambae"
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
