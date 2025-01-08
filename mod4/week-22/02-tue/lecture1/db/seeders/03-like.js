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
        userId: 1, // anthony likes alexi post
        postId: 2
      },
      {
        userId: 1, // anthony likes edwards post
        postId: 3
      },
      {
        userId: 1, // anthony likes sam post
        postId: 4
      },
      {
        userId: 2, // alexi likes anthony post (1)
        postId: 1
      },
      {
        userId: 2, // alexi likes edwards post
        postId: 3
      },
      {
        userId: 2, // alexi likes sam post
        postId: 4
      },
      {
        userId: 2, // alexi likes anthony post (2)
        postId: 5
      },
      {
        userId: 2, // alexi likes sam post (2)
        postId: 6
      },
      {
        userId: 3, // edward likes post by ant
        postId: 1
      },
      {
        userId: 3, // edward likes a post by alexi
        postId: 2
      },
      {
        userId: 4, // sam likes post by anthony (2)
        postId: 5
      },
      {
        userId: 4,// sam likes post by alexi
        postId: 2
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
