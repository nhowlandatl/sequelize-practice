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
db.track = require('./models/tracks.js')(sequelize, Sequelize);

// 'use strict';
// const db = require('./config/db.js')
// const env = require('./config/env.js')

// const db = require('./config/db'); 

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
rl.question('Track name? ', (name) => {
    rl.question('Album ID? ', (id) => {
        rl.close();
        // Create the track
        db.track.findOrCreate({
            where:
                {
                song: name,
                album_id: id
                }
        })
        // .spread(function(trackResult, created) {
        //     console.log(trackResult.get({
        //         plain: true
        //     }))
        //     if (created) {
        //         console.log('New track was added to database')
        //     } else {
        //         console.log('Track already exists')
        //     }
        // })
        // Create the track
        // db.track.create({
        //     song: name,
        //     album_id: id
        // })
        .then(newTrack => {
            console.log(`New Track "${newTrack.song}", with id ${newTrack.id} has been created.`)
        })
    })
})