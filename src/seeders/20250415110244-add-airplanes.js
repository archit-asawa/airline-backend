'use strict';
const{Op}=require('sequelize');
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
    await queryInterface.bulkInsert('planes',[{
      modelnumber:'Boeing 777',
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelnumber:'Boeing 787',
      capacity: 150,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelnumber:'Airbus A370',
      capacity: 300,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
      * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('planes', null, {[Op.or]:[{modelnumber:'Boeing 777'},{modelnumber:'Boeing 787'},{modelnumber:'Airbus A370'}]});
  }
};
