const { validateToken, authorize, validateAccountPasswordToken} = require("../../JWT/JWT.js");
const { data } = require("../controllers/user.controller.js");


module.exports = app => {
    const users = require("../controllers/user.controller.js");
    
    // Create a new User
    app.post("/users/register", users.register);

    // Login
    app.post("/users/login", users.login);

    // Refresh Token
    // app.post("/users/token", users.tokenRefresher);

    // Logout
    app.get("/users/logout", users.logout);

    // Profile
    app.get("/users/profile", validateToken, authorize(), users.findProfile);
  
    // Retrieve all Users
    app.get("/users", validateToken, authorize(1), users.findAll);

    app.post("/users/passwordValidation",validateToken,users.validateUserPassword);

    // Update akun
    app.put("/users/update", validateAccountPasswordToken, users.updateAccount);
  
    // Retrieve a single User with UserId
    app.get("/users/:userId", authorize(1), users.findOne);
  
    // Update a User with usererId
    app.put("/users/:userId", authorize(1), users.update);
  
    // Delete a User with userId
    app.delete("/users/:userId",authorize(1), users.delete);
  
    // Delete all Users
    app.delete("/users", authorize(1), users.deleteAll);
    };