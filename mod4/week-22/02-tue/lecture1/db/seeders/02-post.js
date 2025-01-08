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
        post: "hello world", // 1
        userId: 1
      },
      {
        post: "I am alexi", //2
        userId: 2
      },
      {
        post: "I am edard", //3
        userId: 3
      },
      {
        post: "I am sam", //4
        userId: 4
      },
      {
        post: "I am anthony", //5
        userId: 1
      },
      {
        post: "What are you all up to :)", //6
        userId: 4
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
