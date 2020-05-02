'use strict';
module.exports = (sequelize, DataTypes) => {
  const tracks = sequelize.define('tracks', {
    song: DataTypes.STRING,
    album_id: DataTypes.INTEGER
  }, {});
  tracks.associate = function(models) {
    // associations can be defined here
  };
  return tracks;
};