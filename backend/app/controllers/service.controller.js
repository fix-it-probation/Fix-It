const Service = require("../models/service.model.js");
const schedule = require('node-schedule');
// const time = require("../middleware/time")
const { updateDate, updateClock }= require ("../middleware/time.js")

const rule = new schedule.RecurrenceRule();
rule.second = 1;

const job = schedule.scheduleJob(rule, deleteAll = (req, res) => {
    Service.removeExpiredAll((err, data) => {
        if (err)
            console.log( "Some error occurred while removing all expired services.");
        else 
        console.log("All expired services were deleted successfully!");
        // console.log(time.today)
        // console.log(time.tomorrow)
        console.log(updateClock())
        console.log(updateDate())
    });
});

// Create and Save a new Service
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    // Create a Service
    const service = new Service({
        name: req.body.name,
        description: req.body.description,
        province: req.body.province,
        city: req.body.city,
        address: req.body.address,
        totalDay: req.body.totalDay*7,
        totalPrice: (req.body.totalDay)* 10000,
        user_id: req.user.id,
        isVerified : false
    });
  
    // Save Service in the database
    Service.create(service, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Service."
            });
        else res.send(data);
    });
};


// Retrieve all Services from the database.
exports.findAll = (req, res) => {
    Service.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving services."
            });
        else res.send(data);
    });
};

// Retrieve all Verified Services from the database.
exports.findVerifiedAll = (req, res) => {
    Service.getVerifiedAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving services."
            });
        else res.send(data);
    });
};

// Find a single Service with a serviceId
exports.findOne = (req, res) => {
    Service.findById(req.params.serviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Service with id ${req.params.serviceId}.`
                });
            } else {
            res.status(500).send({
                message: "Error retrieving Service with id " + req.params.serviceId
                });
            }
        } else res.send(data);
    });
};

// Update a Service identified by the serviceId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
  
    Service.updateById(req.params.serviceId, new Customer(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Service with id ${req.params.serviceId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Service with id " + req.params.serviceId
                });
            }
        } else res.send(data);
    });
};

// Delete a Service with the specified serviceId in the request
exports.delete = (req, res) => {
    Service.remove(req.params.serviceId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Service with id ${req.params.serviceId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Service with id " + req.params.serviceId
                });
            }
        } else res.send({ message: `Service was deleted successfully!` });
    });
};

// Delete all Services from the database.
exports.deleteAll = (req, res) => {
    Service.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all services."
            });
        else res.send({ message: `All services were deleted successfully!` });
    });
};


exports.findAllUserService = (req, res) => {
    Service.findByUserId(req.user.id,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving services."
            });
        else res.send(data);
    });
};

// exports.findProfile = (req, res) => {
//     User.findById(req.user.id, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found User with id ${req.user.id}.`
//             });
//         } else {
//             res.status(500).send({
//                 message: "Error retrieving User with id " + req.user.id
//             });
//         }
//         } else res.send(data);
//     });
// };

exports.verifyService = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    Service.findById(req.params.serviceId, (err, data)  => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.serviceId}.`
                }); 
            } else if (err) {
                console.log(err)
            };
        } else {
            Service.verifyById(req.params.serviceId);
            res.status(200).send({message: "verified"});
        }
    });
}

exports.searchService = (req, res) => {
    Service.findByKeyword(req.body.keyword,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with keyword ${req.body.keyWord}.`
                }); 
            } else if (err) {
                console.log(err)
            };
        } else {
            res.status(200).send(data)
        }
    });
};


exports.searchVerifiedService = (req, res) => {
    Service.findVerifiedByKeyword(req.body.keyword,(err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with keyword ${req.body.keyWord}.`
                }); 
            } else if (err) {
                console.log(err)
            };
        } else {
            res.status(200).send(data)
        }
    });
};