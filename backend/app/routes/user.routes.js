const { validateToken, validateAccountPasswordToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    
    // Create a new User
    app.post("/users/register", users.register);

    // Login
    app.post("/users/login", users.login);

    // Verify User Email
    app.get("/users/verify/:uniqueString", users.verifyEmail)
    
    // Logout
    app.get("/users/logout", validateToken, users.logout)

    // Profile
    app.get("/users/profile", validateToken, authorize("admin", "user"), users.findProfile)
  
    // Retrieve all Users
    app.get("/users", validateToken, authorize("admin"), users.findAll);

    // Validate User Password
    app.post("/users/passwordValidation",validateToken, users.validateUserPassword);

    // Update an Account
    app.put("/users/update", validateAccountPasswordToken, users.updateAccount);
  
    // Retrieve a User by UserId
    app.get("/users/:userId", validateToken, authorize("admin"), users.findOne);
  
    // Update a User by userId
    app.put("/users/:userId", validateToken ,authorize("admin"), users.update);
  
    // Delete a User by userId
    app.delete("/users/:userId", validateToken, authorize("admin"), users.delete);
  
    // Delete all Users
    app.delete("/users", validateToken, authorize("admin"), users.deleteAll);
    };