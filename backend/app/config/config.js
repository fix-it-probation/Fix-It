require("dotenv").config();

// Database Configuration
module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB,
    SECRET_KEY: process.env.SECRET_KEY,
    SERVICE: process.env.EMAIL_SERVICE,
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
};


