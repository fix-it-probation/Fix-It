const { validateToken } = require("../../JWT/JWT.js");

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    
    // Create a new User
    app.post("/users/register", users.register);

    // Login
    app.post("/users/login", users.login)

    // Profile
    app.get("/users/profile", validateToken, users.findProfile)
  
    // Retrieve all Users
    app.get("/users", users.findAll);
  
    // Retrieve a single User with UserId
    app.get("/users/:userId", users.findOne);
  
    // Update a User with usererId
    app.put("/users/:userId", users.update);
  
    // Delete a User with userId
    app.delete("/users/:userId",users.delete);
  
    // Create a new User
    app.delete("/users", users.deleteAll);
  };