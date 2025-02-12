'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    await queryInterface.bulkInsert('Posts', [
      {
        postBody: "Hello world",
        userId: 1
      },
      {
        postBody: "Hello I am anthony",
        userId: 1
      },
      {
        postBody: "Hello I am edward",
        userId: 2
      },
      {
        postBody: "Hello I am sam",
        userId: 3
      },
      {
        postBody: "I like to eat Pizza mmm",
        userId: 3
      },
      {
        postBody: "I live in Hawaii <3",
        userId: 2
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
