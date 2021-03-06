const Feed = require("../models/feed.model.js");

// Create and Save a new Feed ad
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
        
    // Create a Feed ad
    const feed = new Feed({
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        totalDay: req.body.totalDay*7,
        totalPrice: (req.body.totalDay)*50000,
        image_url: req.file.filename,
        user_id: req.user.id
    });
  
    // Save Feed in the database
    Feed.create(feed, (err, data) => {
        if (err)    
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Feed."
            });
        else res.send(data);
    });
};

// Retrieve all Feeds from the database.
exports.findAll = (req, res) => {
    Feed.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving banners."
            });
        else res.send(data);
    });
};

// Find a single Feed with a feedId
exports.findOne = (req, res) => {
    Feed.findById(req.params.feedId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Feed with id ${req.params.feedId}.`
                });
            } else {
            res.status(500).send({
                message: "Error retrieving Feed with id " + req.params.feedId
                });
            }
        } else res.send(data);
    });
};

// Update a Feed identified by the customerId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    Feed.updateById(req.params.feedId, new Feed(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Feed with id ${req.params.feedId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Feed with id " + req.params.feedId
                });
            }
        } else res.send(data);
    });
};

// Delete a Feed with the specified customerId in the request
exports.delete = (req, res) => {
    Feed.remove(req.params.feedId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Feed with id ${req.params.feedId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Feed with id " + req.params.feedId
                });
            }
        } else res.send({ message: `Feed was deleted successfully!` });
    });
};

// Delete all feeds from the database.
exports.deleteAll = (req, res) => {
    Feed.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all feeds."
            });
        else res.send({ message: `All feeds were deleted successfully!` });
    });
};

// Retrieve all feeds from database
exports.findAllUserFeed = (req, res) => {
    Feed.findByUserId(req.user.id,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving feeds."
            });
        else res.send(data);
    });
};

// Verify a feed by Id
exports.verifyFeed = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Feed.findById(req.params.feedId, (err, data)  => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Feed with id ${req.params.feedId}.`
                }); 
            } else if (err) {
                console.log(err)
            };
        } else {
            Feed.verifyById(req.params.feedId, data);
            res.status(200).send({message: "verified"});
        }
    });
}

// Retrieve all verified feeds
exports.findVerifiedAll = (req, res) => {
    Feed.getVerifiedAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving feeds."
            });
        else res.send(data);
    });
};

// Retrieve all feeds per specific user
exports.findAllUserFeeds = (req, res) => {
    Feed.findByUserId(req.user.id,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving feeds."
            });
        else res.send(data);
    });
};

// Retrieve total pending feeds (haven't yet verified)
exports.findTotalPending = (req, res) => {
    Feed.getTotalPending((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving feeds."
            });
        else res.send(data);
    });
}

exports.uploadReceipt = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    Feed.uploadReceiptById(req.params.feedId, req.file.filename, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Feed with id ${req.params.feedId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Feed with id " + req.params.feedId
                });
            }
        } else res.send(data);
    });
};
