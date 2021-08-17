const mysql = require("mysql2");
require("dotenv").config();

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// if (connection) {
//     console.log('[mysql]','connection destroy');
//     connection.destroy();
//     // connection = null;
// }

// open the MySQL connection
connection.connect(error => {
    if (error) {
        if (error.code == 'This socket has been ended by the other party') {
            console.log('[mysql]', 'PROTOCOL_CONNECTION_LOST')
            connection.connect(callback);
        } else {
            throw error;
        }
    } 
    console.log("Successfully connected to the database.");
});


module.exports = connection;