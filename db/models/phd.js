'use strict';
module.exports = (sequelize, DataTypes) => {
  var phd = sequelize.define('phd', {
    year: DataTypes.STRING,
    extreme_blue: DataTypes.STRING,
    technical: DataTypes.STRING,
    non_technical: DataTypes.STRING,
    delivery_services: DataTypes.STRING
  }, {});
  phd.associate = function(models) {
    // associations can be defined here
  };
  return phd;
};