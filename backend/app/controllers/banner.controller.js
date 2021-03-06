const Banner = require("../models/banner.model.js");

// Create and Save a new Banner ad
exports.create = (req, res) => {
    // Validate request
    if (!req.body || !req.file.filename) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    
    // Create a Banner ad
    const banner = new Banner({
        link: req.body.link,
        totalDay: req.body.totalDay*7,
        image_url: req.file.filename
    });
  
    // Save Banner in the database
    Banner.create(banner, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the banner."
            });
        else res.send(data);
    });
};

// Retrieve all Banners from the database.
exports.findAll = (req, res) => {
    Banner.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving banners."
            });
        else res.send(data);
    });
};

// Retrieve a single banner with a customerId
exports.findOne = (req, res) => {
    Banner.findById(req.params.bannerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found banner with id ${req.params.bannerId}.`
                });
            } else {
            res.status(500).send({
                message: "Error retrieving banner with id " + req.params.bannerId
                });
            }
        } else res.send(data);
    });
};

// Update a Banner identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    Banner.updateById(req.params.bannerId, new Banner(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Banner with id ${req.params.bannerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Banner with id " + req.params.bannerId
                });
            }
        } else res.send(data);
    });
};

// Delete a Banner with the specified customerId in the request
exports.delete = (req, res) => {
    Banner.remove(req.params.bannerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Banner with id ${req.params.bannerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Banner with id " + req.params.bannerId
                });
            }
        } else res.send({ message: `Banner was deleted successfully!` });
    });
};

// Delete all Banners from the database.
exports.deleteAll = (req, res) => {
    Banner.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all banners."
            });
        else res.send({ message: `All banners were deleted successfully!` });
    });
};

// Retrieve all banners from specific user
exports.findAllUserBanner = (req, res) => {
    Banner.findByUserId(req.user.id,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving banners."
            });
        else res.send(data);
    });
};