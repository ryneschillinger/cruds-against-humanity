'use strict';
module.exports = function(sequelize, DataTypes) {
  var cahcard = sequelize.define('cahcard', {
    black: DataTypes.STRING,
    white: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cahcard;
};