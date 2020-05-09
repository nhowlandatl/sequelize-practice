'use strict';
module.exports = (sequelize, DataTypes) => {
  const albums = sequelize.define('albums', {
    artist_id: DataTypes.INTEGER,
    album_name: DataTypes.STRING,
    album_year: DataTypes.INTEGER
  }, {});
  albums.associate = function(models) {
    // associations can be defined here
    albums.hasMany(models.tracks)
  };
  return albums;
};