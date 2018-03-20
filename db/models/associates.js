'use strict';
module.exports = (sequelize, DataTypes) => {
  var associates = sequelize.define('associates', {
    year: DataTypes.STRING,
    extreme_blue: DataTypes.STRING,
    technical: DataTypes.STRING,
    non_technical: DataTypes.STRING,
    delivery_services: DataTypes.STRING
  }, {});
  associates.associate = function(models) {
    // associations can be defined here
  };
  return associates;
};