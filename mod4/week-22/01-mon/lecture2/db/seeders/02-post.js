'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /*
    */
   await queryInterface.bulkInsert('Posts', [
    {
    postBody: "Hello World",
    userId: 1
   },
    {
    postBody: "My name is anthony",
    userId: 1
   },
    {
    postBody: "Hello I am edward",
    userId: 2
   },
    {
    postBody: "Hello I am Sam",
    userId: 3
   },
    {
    postBody: "I am from Hawaii",
    userId: 2
   },
    {
    postBody: "I like to eat Pizza all the time",
    userId: 3
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
