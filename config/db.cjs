const db = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port : 5432,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_SCHEMA
    }
});

module.exports = db;