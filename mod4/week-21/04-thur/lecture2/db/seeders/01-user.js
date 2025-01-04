'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */

    //bulkCreate
    await queryInterface.bulkInsert('Users', [
      {
        firstName: "anthony",
        username: "anthonybronca"
      },
      {
        firstName: "alexi",
        username: "alexibettinger"
      },
      {
        firstName: "edward",
        username: "edwardfelipe"
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
