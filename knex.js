const knex = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./database.db"
    }
  });
  

  export default knex;