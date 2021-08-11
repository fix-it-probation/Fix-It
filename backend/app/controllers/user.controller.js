const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const { createToken, createRegistrationToken } = require("../middleware/JWT");
const mail = require("../helpers/send-email.js");

// Create and Save a new User
exports.register = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    bcrypt.hash(req.body.password,10).then((hash) => {
        // Create a User
        const user = new User({
            name : req.body.name,
            telephone : req.body.telephone,
            email : req.body.email,
            password : hash,
            role_id : req.body.role_id,
            uniqueString : mail.randString(),
        });

        const accessToken = createRegistrationToken(user);
        res.cookie("valid-email-access-token",accessToken, {
            maxAge: 5*60*1000,
            httpOnly: true                
        });
        
        if (accessToken) {
            const html = `Press <a href=http://localhost:3000/users/register/verify/${user.uniqueString}> Here </a> to Verify Your Email. Thank You.`
            mail.sendMail(user.email, "Email Verification", html)
        } else {
            res.json({ message: "uniqueString is Empty." })
        }
        res.json({ message: "Success." })
      });
};

// Logins
exports.login = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }   
    // Validate data
    const user = new User({
        email : req.body.email,
        password : req.body.password,
    });
    // Find User Data by Email
    User.findByEmail(user.email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with email ${user.email}.`
                });
                } else {
                    res.status(500).send({
                        message: "Error retrieving User with email " + user.email
                    });
                }
        } else {
            const dbPassword = data.password;
            bcrypt.compare(user.password,dbPassword).then((match) => {
                if (!match) {
                    res.status(400).send({
                        message: "password wrong"
                    })
                } else {
                    const accessToken = createToken(data);
                    res.cookie("access-token",accessToken,{
                        maxAge: 60*60*1000*24*30,
                        httpOnly: true
                    });
                    res.json({ message: "Logged In"})
                };
            });
        };
    });
};

// Logout User
exports.logout = (req, res) => {
    res.clearCookie("access-token")
    res.clearCookie("valid-password-access-token")
    res.clearCookie("verify-email-access-token")
    res.redirect("/")
};

// Profile
exports.findProfile = (req, res) => {
    User.findById(req.user.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.user.id}.`
            });
        } else {
            res.status(500).send({
                message: "Error retrieving User with id " + req.user.id
            });
        }
        } else res.send(data);
    });
};

exports.validateUserPassword = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Validate data
    const user = new User({
        password : req.body.password
    });
    // Find User Data by Email
    User.findById(req.user.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.user.id}.`
                });
                } else {
                    res.status(500).send({
                        message: "Error retrieving User with id " + req.user.id
                    });
                }
        } else {
            const dbPassword = data.password;
            bcrypt.compare(user.password,dbPassword).then((match) => {
                if (!match) {
                    res.status(400).send({
                        message: "password wrong"
                    })
                } else {
                    const accessToken = createToken(data);
                    res.cookie("valid-password-access-token",accessToken,{
                        maxAge: 60*1000,
                        httpOnly: true
                    });
                    res.json("Password Valid")
                };
            });
        };
    });
};

// Update Account
exports.updateAccount = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    bcrypt.hash(req.body.password,10).then((hash) => {
        // Create a User
        const user = new User({
            name : req.body.name,
            telephone : req.body.telephone,
            email : req.body.email,
            password : hash,
            role_id : req.body.role_id
        });

        User.updateById(req.user.id, user,(err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with id ${req.user.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: `Error updating User with id ${req.user.id}.`
                    });
                }
            } else res.send(data);
        });
    });
}

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        else res.send(data);
    });
};

// Find a single User with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
            });
        } else {
            res.status(500).send({
                message: "Error retrieving User with id " + req.params.userId
            });
        }
        } else res.send(data);
    });
};

// Update data
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    bcrypt.hash(req.body.password,10).then((hash) => {
        // Create a User
        const user = new User({
            name : req.body.name,
            telephone : req.body.telephone,
            email : req.body.email,
            password : hash,
            role_id : req.body.role_id
        });

        User.updateById(req.user.id,user,(err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with id ${req.user.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating User with id " + req.user.id
                    });
                }
            } else res.send(data);
        });
    });
};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
    User.remove(req.params.userId, err => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete User with id " + req.params.userId
                });
            }
        } else res.send({ message: `User was deleted successfully!` });
    });
};
  
// Delete all Users from the database.
exports.deleteAll = (req,res) => {
    User.removeAll(err => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        else res.send({ message: `All Users were deleted successfully!` });
    });
};

// Email Verification
exports.verifyEmail = (req, res) => {
    if (!req.user) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } 
    const user = new User({

        name : req.user.name,
        telephone : req.user.telephone,
        email : req.user.email,
        password : req.user.password,
        role_id : req.user.role_id,
        uniqueString : req.user.uniqueString,
    });

    if (user.uniqueString == req.params.uniqueString) {
        User.create(user, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User."
                });
            else {
                res.clearCookie("valid-email-access-token")
                res.json({ message: "Email is Verified." });
                }
            });
    } else {
        res.status(401).send({
            message: `Incorrect Unique String`,
        }); 
    }
};

// Reset Password Request
exports.requestResetPassword = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Validate data
    const user = new User({
        email : req.body.email,
    });
    // Find User Data by Email
    User.findByEmail(user.email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with email ${user.email}.`
                });
                } else {
                    res.status(500).send({
                        message: "Error retrieving User with email " + user.email
                    });
                }
        } else {
            const html = `Press <a href=http://localhost:3000/users/reset-password/${data.uniqueString}> Here </a> to Reset Your Password. Thank You.`
            mail.sendMail(user.email, "Password Reset", html)
            res.json({ message: "Success."})
        }
    });
}

// Reset Password Verification
exports.verifyResetPassword = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
     bcrypt.hash(req.body.password,10).then((hash) => {
        // Create new password
        const user = new User({
            password : hash,
        });
        // Find User Data by Unique Password
        User.findByUniqueString(req.params.uniqueString, (err, data)  => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with Unique String ${req.params.uniqueString}.`
                    }); 
                } else if (err) {
                    console.log(err)
                };
            } else {
                User.resetPassword(data.uniqueString, user.password, res);
                res.json({ message: "Password Changed."})
                // res.redirect("/users/login");
            }
        });
    });
}