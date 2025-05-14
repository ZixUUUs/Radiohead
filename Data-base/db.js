const { Client } = require("pg");
module.exports = new Client({
  host: "localhost",
  user: "postgres",
  database: "radiohead",
  password: "zix123",
  port: 5432,
});
