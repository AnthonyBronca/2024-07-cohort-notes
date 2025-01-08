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
    await queryInterface.bulkInsert('Likes', [
      {
        userId: 2, // alexi likes anthony post (1)
        postId: 1
      },
      {
        userId: 2, // alexi likes edward post
        postId: 3
      },
      {
        userId: 2, // alexi likes sam post (1)
        postId: 4
      },
      {
        userId: 2, // alexi likes sam post(2)
        postId: 6
      },
      {
        userId: 1, // anthony likes alexi post
        postId: 2
      },
      {
        userId: 1, // anthony likes edward post
        postId: 3
      },
      {
        userId: 1, // anthony likes sam post (1)
        postId: 4
      },
      {
        userId: 1, // anthony likes sam post (2)
        postId: 6
      },
      {
        userId: 3, // edward like anthony post
        postId: 1
      },
      {
        userId: 3, // edward likes sam post (1)
        postId: 4
      },
      {
        userId: 4, // sam likes anthony post (1)
        postId: 1
      },
      {
        userId: 4,// sam likes anthony post (2)
        postId: 5
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
     await queryInterface.bulkDelete('Likes', null, {});
  }
};
