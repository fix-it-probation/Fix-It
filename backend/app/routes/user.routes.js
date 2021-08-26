const { validateToken, validateAccountPasswordToken, validateEmailToken, requestResetPassword} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")
const imageUploader = require('../helpers/image-uploader');

module.exports = app => {
    const users = require("../controllers/user.controller.js");
    
    // Create a new User
    app.post("/users/register", imageUploader.upload.single("image"), users.register);
    
    // Verify User Email
    app.post("/users/register/verify/", validateEmailToken, users.verifyEmail)

    // Login a User
    app.post("/users/login", users.login);
    
    // Logout a User
    app.get("/users/logout", validateToken, users.logout)

    // Access User Profile
    app.get("/users/profile", validateToken, users.findProfile)
  
    // Retrieve all Users
    app.get("/users", validateToken, authorize(["admin"]), users.findAll);

    // Validate User Password
    app.post("/users/passwordValidation", validateToken, users.validateUserPassword);

    // Request Reset Password
    app.post("/users/reset-password/request", users.requestResetPassword)
    
    // Reset Password
    app.post("/users/reset-password/request/verify", requestResetPassword ,users.verifyResetPassword)

    // Update an Account
    app.put("/users/update", validateAccountPasswordToken,  imageUploader.upload.single("image"), users.updateAccount);
    
    // Retrieve a User by UserId
    app.get("/users/:userId", validateToken, authorize(["admin"]), users.findOne);
    
    // Update a User by UserId
    app.put("/users/:userId", validateToken ,authorize(["admin"]), users.update);
    
    // Delete a User by UserId
    app.delete("/users/:userId", validateToken, authorize(["admin"]), users.delete);
    
    // Delete all Users
    app.delete("/users", validateToken, authorize(["admin"]), users.deleteAll);

    // Upload single avatar photo 
    // app.put("/users/upload-avatar/:userId",validateToken, imageUploader.upload.single("image"), users.uploadAvatar);
};