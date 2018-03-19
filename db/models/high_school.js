'use strict';
module.exports = (sequelize, DataTypes) => {
  var high_school = sequelize.define('high_school', {
    year: DataTypes.STRING,
    extreme_blue: DataTypes.STRING,
    technical: DataTypes.STRING,
    non_technical: DataTypes.STRING,
    delivery_services: DataTypes.STRING
  }, {});
  high_school.associate = function(models) {
    // associations can be defined here
  };
  return high_school;
};