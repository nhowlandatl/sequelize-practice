const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('music_db4', 'postgres', 'test', {
    host: 'localhost',
    dialect: 'postgres'
});

// Connect to database object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model/table
db.artist = require('./models/artist.js')(sequelize, Sequelize);

// const db = require('./config/db.js')
// const env = require('./config/env.js')

// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection works');
//     }   catch (error) {
//         console.error('Cant connect: ', error)
//     };
// }
// testConnection();

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for parameters
rl.question('Artist name? ', (artist_name) => {
    rl.close();
    // Create the artist
    db.artist.findOrCreate({
        where:
            {
            name: artist_name
            }
    })
    .spread(function(artistResult, created) {
        console.log(artistResult.get({
            plain: true
        }))
        if (created) {
            console.log('New Artist was added to database')
        } else {
            console.log('Artist already exists')
        }
    })
    // db.artist.create({
    //     name: artist_name
    //     })
    //     .then(newAlbum => {
    //         console.log(`New artist with ${newAlbum.album_name}, with id ${newAlbum.id} has been created.`)
    //     })
})
