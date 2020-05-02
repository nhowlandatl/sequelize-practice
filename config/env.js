'use strict';

const env = {
  PORT: process.env.PORT || 8089,
  DATABASE_URL: process.env.DATABASE_URL || 'jdbc:postgresql://localhost:5432/music_db4',
  DATABASE_NAME: process.env.DATABASE_NAME || 'music_db4',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'test',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;