'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Posts', [
      {
        post: "Hello World", // 1
        userId: 1,
      },
      {
        post: "Hi I am alexi", // 2
        userId: 2,
      },
      {
        post: "Hi I am edward", // 3
        userId: 3,
      },
      {
        post: "Hi I am sam", // 4
        userId: 4,
      },
      {
        post: "My name is anthonyyyy", // 5
        userId: 1,
      },
      {
        post: "I like to code and eat pizza", // 6
        userId: 4,
      },

    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
