'use strict';
module.exports = (sequelize, DataTypes) => {
  var bachelors = sequelize.define('bachelors', {
    year: DataTypes.STRING,
    extreme_blue: DataTypes.STRING,
    technical: DataTypes.STRING,
    non_technical: DataTypes.STRING,
    delivery_services: DataTypes.STRING
  }, {});
  bachelors.associate = function(models) {
    // associations can be defined here
  };
  return bachelors;
};