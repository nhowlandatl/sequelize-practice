const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('music_db4', 'postgres', 'test', {
    host: 'localhost',
    dialect: 'postgres'
});

// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection works');
//     }   catch (error) {
//         console.error('Cant connect: ', error)
//     };
// }
// testConnection();

// Connect to database object
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model/table
db.album = require('./models/albums.js')(sequelize, Sequelize);

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user for parameters
rl.question('Album name? ', (name) => {
    rl.question('Please enter album year ', (year) => {
        rl.question('Please enter artist ID ', (id) => {
            rl.close();
            // Create the album
            db.album.create({
                artist_id: id,
                album_name: name,
                album_year: year
            })
            .then(newAlbum => {
                console.log(`New artist with ${newAlbum.album_name}, with id ${newAlbum.id} has been created.`)
            })
        })
    })
 })

//  artist_id: DataTypes.INTEGER,
// album_name: DataTypes.STRING,
// album_year: DataTypes.INTEGER