'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('graduates', [
 
 {year: 'Post Bachelor’s',extreme_blue: 222.00,technical: 200.00,non_technical: 168.00,delivery_services: 0},
 
 {year: 'Year 1',extreme_blue: 248.00,technical: 222.00,non_technical: 200.00,delivery_services: 0},
 
 {year: 'Year 2',extreme_blue: 276.00,technical: 248.00,non_technical: 218.00,delivery_services: 0},
 
 {year: 'International',extreme_blue: 248.00,technical: 222.00,non_technical: 200.00,delivery_services: 0},
 
 ], {});
  
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('graduates', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
