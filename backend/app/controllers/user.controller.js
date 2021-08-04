const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
// const randString = require("../models/send-email.js")
const { createToken, authorize } = require("../../JWT/JWT");
const { findByEmail } = require("../models/user.model.js");
const sendMail = require("../models/send-email.js");
const randString = require("../models/send-email.js");

// const { create } = require("../models/user.model.js");
// const { response } = require("express");
// const tokenList = {}

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
            uniqueString : randString(),
            isValid : false
        });

        // Save User in the database
        User.create(user, (err, data) => {
            if (err)
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User."
            });
            else {
                sendMail(data.email, data.uniqueString)
                res.send(data);
            }
            });
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
        password : req.body.password
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
                    // const refreshToken = createToken(data);
                    // const response = {
                    //   "status": "Logged in",
                    //   "token": accessToken,
                    //   "refreshToken": refreshToken
                    // }
                    // tokenList[refreshToken] = response
                    res.cookie("access-token",accessToken,{
                        maxAge: 60*60*1000*24*30,
                        httpOnly: true
                    });
                    // res.status(200).json(response)
                    res.json("Logged In")
                    // res.json(data.role_id)
                };
            });
        };
    });
};

//Refresh Token
// exports.tokenRefresher = (req, res) => {
//     const postData = req.body
//     if ((postData.refreshToken) && (postData.refreshToken in tokenList)) {
//         // Create a User
//         const userLogin = new User({
//         email : postData.email,
//         password : postData.password
//     });
//         const accessToken = createToken(userLogin);
//         res.cookie("access-token",accessToken,{
//                   maxAge: 60*60*1000,
//                   httpOnly: true
//         });
//         const response = {
//             "token": accessToken,
//         }  

//         tokenList[postData.refreshToken].accessToken = accessToken
//         res.status(200).json(response);
//     } else {
//         // res.status(404).send("Invalid Request").then
//         res.send(postData)
//     }
// }

// Logout User
exports.logout = (req, res) => {
    res.clearCookie("access-token")
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
                    // const refreshToken = createToken(data);
                    // const response = {
                    //   "status": "Logged in",
                    //   "token": accessToken,
                    //   "refreshToken": refreshToken
                    // }
                    // tokenList[refreshToken] = response
                    res.cookie("valid-password-access-token",accessToken,{
                        maxAge: 60*1000,
                        httpOnly: true
                    });
                    // res.status(200).json(response)
                    res.json("Password Valid")
                    // res.json(data.role_id)
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
    User.remove(req.params.userId, (err, data) => {
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
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        else res.send({ message: `All Users were deleted successfully!` });
    });
};

exports.verifyEmail = async (req, res) => {
     User.findByUniqueString(req.params.uniqueString, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.uniqueString}.`
            });
        } else {
            res.status(500).send({
                message: "Error retrieving User with id " + req.params.uniqueString
            });
        }
        } else {
            data.isValid = 1; 
            res.redirect('/');
        }
    });
    // // Getting the string
    // const { uniqueString } = req.params;
    // // Check is any user with same string exists
    // const user = await User.findOne({ uniqueString: uniqueString })
    // if (user) {
    //     // If any, mark verified
    //     user.isValid = true
    //     await user.save()
    //     // Redirect 
    //     res.redirect('/')
    // } else {
    //     // Throw an error message
    //     res.json('User not Found')
    // }
    // User.findOne(req.params.uniqueString, (err, data) => {
    //     if (err) {
    //         if (err.kind === "not_found") {
    //             res.status(404).send({
    //                 message: `Not found User with id ${req.params.uniqueString}.`
    //         });
    //     } else {
    //         res.status(500).send({
    //             message: "Error retrieving User with id " + req.params.uniqueString
    //         });
    //     }
    //     } else res.send(data);
    // });
};
