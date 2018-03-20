'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('associates', [
  {year: 'Pre-Freshman',extreme_blue: 0,technical: 16.25,non_technical: 13.50,delivery_services: 11.75},
 
 {year: 'Year 1',extreme_blue: 0,technical: 18.50,non_technical: 16.25,delivery_services: 13.75},
 
 {year: 'Year 2',extreme_blue: 0,technical: 20.25,non_technical: 17.75,delivery_services: 15.25},
   
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
    return queryInterface.bulkDelete('associates', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
