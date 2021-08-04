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

    // Verify
    app.get("/users/verify/:uniqueString", users.verifyEmail)
    
    // Logout
    app.get("/users/logout",validateToken, users.logout)

    // Profile
    app.get("/users/profile", validateToken, authorize("admin", "user"), users.findProfile)
  
    // Retrieve all Users
    app.get("/users", validateToken, authorize("admin"), users.findAll);

    app.post("/users/passwordValidation",validateToken, users.validateUserPassword);

    // Update akun
    app.put("/users/update", validateAccountPasswordToken, users.updateAccount);
  
    // Retrieve a single User with UserId
    app.get("/users/:userId", authorize("admin"), users.findOne);
  
    // Update a User with usererId
    app.put("/users/:userId", authorize("admin"), users.update);
  
    // Delete a User with userId
    app.delete("/users/:userId",authorize("admin"), users.delete);
  
    // Delete all Users
    app.delete("/users", authorize("admin"), users.deleteAll);
    };