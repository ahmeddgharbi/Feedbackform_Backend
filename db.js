const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "clubiste1312",
  host: "localhost",
  port: 5432,
  database: "starrating"
});

module.exports = pool;