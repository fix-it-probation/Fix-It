const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const { createToken, createRegistrationToken, createResetPasswordToken } = require("../middleware/JWT");
const mail = require("../helpers/send-email.js");

// Create and Save a new User
exports.register = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    } else if (req.body.password != req.body.confirmationPassword){
        res.status(401).send({
            message: "Password and Password Confirmation does not match."
        });
    } else {
        bcrypt.hash(req.body.password,10).then((hash) => {
            let defaultAvatar = "defaultAvatar.png"

            // Create a User
            const user = new User({
                name : req.body.name,
                telephone : req.body.telephone,
                email : req.body.email,
                password : hash,
                role_id : req.body.role_id,
                address : req.body.address,
                province :req.body.province,
                city : req.body.city,
                avatar_url : defaultAvatar,
                uniqueString : mail.randString(),
            });

            const accessToken = createRegistrationToken(user);
            res.cookie("valid-email-access-token",accessToken, {
                maxAge: 5*60*1000,
                httpOnly: true                
            });
            
            if (accessToken) {
                // const html = `Press <a href=http://api-fixit.herokuapp.com/users/register/verify/${user.uniqueString}> Here </a> to Verify Your Email. Thank You.`
                const html = `Please Input This Unique Code on Your App to Verify Your Email. Thank You. <br> <em>${user.uniqueString}</em>`
                mail.sendMail(user.email, "Email Verification", html)
            } else {
                res.json({ message: "uniqueString is Empty." })
            }
            res.json({ message: "Success." })
        });
    }
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
                    res.json({
                        message: "Logged In",
                        role_id: data.role_id
                    })
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

// validating user password and giving access token
exports.validateUserPassword = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Checking if confirmation password and password are same
    if (req.body.password != req.body.confirmationPassword){
        res.status(401).send({
            message: "Password and Password Confirmation does not match."
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
                        message: "Wrong Password"
                    })
                } else {
                    const accessToken = createToken(data);
                    res.cookie("valid-password-access-token",accessToken,{
                        maxAge: 3*60*1000,
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

    if (req.body.password != req.body.confirmationPassword){
        res.status(401).send({
            message: "Password and Password Confirmation does not match."
        });
    }

    bcrypt.hash(req.body.password,10).then((hash) => {
        // Create a User
        const user = new User({
            name : req.body.name,
            telephone : req.body.telephone,
            email : req.body.email,
            password : hash,
            address : req.body.address,
            province :req.body.province,
            city : req.body.city,
            avatar_url: req.file.filename,
            role_id : req.user.role_id
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
            } else res.clearCookie("valid-password-access-token"); res.send(data);
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

    if (req.body.password != req.body.confirmationPassword){
        res.status(401).send({
            message: "Password and Password Confirmation does not match."
        });
    }

    bcrypt.hash(req.body.password,10).then((hash) => {
        // Create a User
        const user = new User({
            name : req.body.name,
            telephone : req.body.telephone,
            email : req.body.email,
            password : hash,
            address : req.body.address,
            province :req.body.province,
            city : req.body.city,
            role_id : req.body.role_id
        });

        User.updateById(req.params.userId,user,(err, data) => {
            console.log("ok")
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found User with id ${req.params.userId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating User with id " + req.params.userId
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
        address : req.user.address,
        province :req.user.province,
        city : req.user.city,
        role_id : req.user.role_id,
        avatar_url : req.user.avatar_url,
        // uniqueString : req.user.uniqueString,
    });

    if (req.user.uniqueString == req.body.uniqueStringConfirm) {
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
        uniqueString : mail.randString()
    });

    const accessToken = createResetPasswordToken(user);
        res.cookie("req-password-access-token", accessToken, {
            maxAge: 5*60*1000,
            httpOnly: true                
        });

    if (accessToken) {
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
                // const html = `Press <a href=http://api-fixit.herokuapp.com/users/reset-password/${data.uniqueString}> Here </a> to Reset Your Password. Thank You.`
                const html = `Please Input This Unique Code on Your App to Verify Your Email. Thank You. <br> <em>${user.uniqueString}</em>`
                console.log(user.uniqueString)
                mail.sendMail(user.email, "Password Reset", html)
                res.json({ message: "Success."})
            }
        });
    } else {
        res.json({message: "Invalid Token."})
    }
        
}

// Reset Password Verification
exports.verifyResetPassword = async (req, res) => {
    console.log(req.user)

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });

    } else if (req.user.uniqueString != req.body.uniqueStringConfirm){
        res.status(401).send({
            message: "UniqueCode and UniqueCode Confirmation does not match."
        });
    } else if (req.body.password != req.body.confirmationPassword){
        res.status(401).send({
            message: "Password and Password Confirmation does not match."
        });

    } else {
        bcrypt.hash(req.body.password,10).then((hash) => {
            // Create new password
            const user = new User({
                password : hash
            });
            // Find User Data by Unique Password
            User.findByEmail(req.user.email, (err, data)  => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found User with Email ${req.user.email}.`
                        }); 
                    } else if (err) {
                        console.log(err)
                    };
                } else {
                    User.resetPassword(data.email, user.password, res);
                    res.json({ message: "Password Changed."})
                }
            });
        });
    }
}

exports.uploadAvatar = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    User.uploadAvatarById(req.params.userId, req.file.filename, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating User with id " + req.params.userId
                });
            }
        } else res.send(data);
    });
};