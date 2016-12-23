'use strict';
module.exports = function(sequelize, DataTypes) {
  var cahplayer = sequelize.define('cahplayer', {
    name: DataTypes.STRING,
    cards: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return cahplayer;
};