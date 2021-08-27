const mysql = require("mysql2");
require("dotenv").config();

// Create a connection to the database
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TABLE_NAME,
    waitForConnections: true,
<<<<<<< HEAD
    connectionLimit: 10,
    queueLimit: 0
=======
    connectionLimit: 200,
    queueLimit: 0,
    multipleStatements: true
>>>>>>> 55be6aef40c25edec645c9c8d738739534e09337
});

// open the MySQL connection
connection.getConnection((error, conn) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;