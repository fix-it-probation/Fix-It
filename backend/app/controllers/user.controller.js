const User = require("../models/user.model.js");
const bcrypt = require('bcrypt')
const { createToken } = require("../../JWT/JWT")

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
          role_id : req.body.role_id
      });

      // Save User in the database
      User.create(user, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        else res.send(data);
      });
    })
};

// Create and Save a new User
exports.login = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const userLogin = new User({
    email : req.body.email,
    password : req.body.password
  });
  
  User.findByEmail(userLogin.email, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with email ${userLogin.email}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving User with email " + userLogin.email
          });
        }
      } else {
        const dbPassword = data.password;
        bcrypt.compare(userLogin.password,dbPassword).then((match) => {
          if (!match) {
            res.status(400).send({
              message: "password wrong"
            })
          } else {
            const accessToken = createToken(data);
            res.cookie("access-token",accessToken,{
              maxAge: 60*60*1000,
            });
            res.json("Logged In")
          };
        });
      };
    });
};

//profile
exports.findProfile =(req, res) => {
  res.json("profile");
};

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

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    User.updateById(
      req.params.userId,
      new User(req.body),
      (err, data) => {
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
      }
    );
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