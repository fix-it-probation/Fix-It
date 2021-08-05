const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// add cookie parser
app.use(cookieParser());

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome." });
});

// routes
const routeFunction = require("./app/routes/user.routes.js");
routeFunction(app);

// set port, listen for requests
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port "${port}".`);
});
