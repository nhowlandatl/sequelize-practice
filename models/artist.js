'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    name: DataTypes.STRING
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
    artist.hasMany(models.albums)
  };
  return artist;
};