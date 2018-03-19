'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('graduates', {
      graduates_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('graduates');
  }
};