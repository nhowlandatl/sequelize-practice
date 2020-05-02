const { Sequelize } = require('sequelize');
const env = require('./env');

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
        underscored: true
    }
});

// Connect to database object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models and tables
db.artist = require('../models/artist.js')(sequelize, Sequelize);
db.track = require('../models/tracks.js')(sequelize, Sequelize);
db.album = require('../models/albums.js')(sequelize, Sequelize);

module.exports = db;