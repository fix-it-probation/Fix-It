const mysql = require("mysql2");
require("dotenv").config();

// Create a connection to the database
const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// open the MySQL connection
connection.getConnection(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});


module.exports = connection;