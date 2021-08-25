const UserFavorite = require("../models/userFavorites.model.js");

// Create and Save a new User Favorite
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    // Create a User Favorite
    const userFavorite = new UserFavorite({
        user_id: req.user.id,
        service_id : req.params.serviceId
    });
  
    // Save User Favorite in the database
    UserFavorite.create(userFavorite, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user savorite."
            });
        else res.send(data);
    });
};

// Retrieve all favorites per specific user
exports.findFavorite = (req,res) => {
    UserFavorite.getExistence(req.user.id,req.params.serviceId,(err,data) =>{
        if (err){
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user favorite."
            });
        }
        else res.send(data)
    })
}

// Retrieve all User Favorites from the database.
exports.findAllByUserId = (req, res) => {
    UserFavorite.getAllByUserId( req.user.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user favorite."
            });
        else res.send(data);
    });
};

// Delete a Banner with the specified customerId in the request
exports.delete = (req, res) => {
    UserFavorite.remove(req.user.id, req.params.serviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user favorite with user id ${req.user.id} and service id ${req.params.serviceId}.`
                });
            } else {
                res.status(500).send({
                    message: `Could not delete user favorite with user id ${req.user.id} and service id ${req.params.serviceId}`
                });
            }
        } else res.send({ message: `user favorite was deleted successfully!` });
    });
};

// Delete all Banners from the database.
exports.deleteAll = (req, res) => {
    UserFavorite.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all user favorites."
            });
        else res.send({ message: `All user favorite were deleted successfully!` });
    });
};