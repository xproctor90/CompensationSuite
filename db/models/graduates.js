'use strict';
module.exports = (sequelize, DataTypes) => {
  var graduates = sequelize.define('graduates', {
    year: DataTypes.STRING,
    extreme_blue: DataTypes.STRING,
    technical: DataTypes.STRING,
    non_technical: DataTypes.STRING,
    delivery_services: DataTypes.STRING
  }, {});
  graduates.associate = function(models) {
    // associations can be defined here
  };
  return graduates;
};