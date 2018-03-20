'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('phds', [
 
 {year: 'Year 1',extreme_blue: 302.00,technical: 276.00,non_technical: 236.00,delivery_services: 0},
 
 {year: 'Year 2',extreme_blue: 324.00,technical: 302.00,non_technical: 246.00,delivery_services: 0},
 
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
    return queryInterface.bulkDelete('phds', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
