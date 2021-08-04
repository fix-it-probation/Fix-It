const mysql = require("mysql2");
const dbConfig = require("../config/config.js");
require("dotenv").config();

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.DB_PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});


module.exports = connection;