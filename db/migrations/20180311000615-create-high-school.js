'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('high_schools', {
      high_school_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      extreme_blue: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      technical: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      non_technical: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      delivery_services: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('high_schools');
  }
};