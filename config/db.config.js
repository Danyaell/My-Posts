const { createPool } = require("mysql");
/* Connection pool creation */
const db = createPool({
    port: 3306,
    host: "us-cdbr-east-04.cleardb.com",
    user: "b5e7fa9c10f7be",
    password: "9f93571e",
    database: "heroku_0851adc5a4a0c66",
    connectionLimit: 30,
});

module.exports = db;