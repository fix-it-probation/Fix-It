// const { upload } = require("../middleware/store-image.js")
const { validateToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")


module.exports = app => {
    const services = require("../controllers/service.controller.js");
  
    // Create a new Service
    app.post("/services",validateToken,authorize("mitra"), services.create);
  
    // Retrieve all Services
    app.get("/services", services.findAll);
  
    // Retrieve a single Service with serviceId
    app.get("/services/:serviceId", services.findOne);
  
    // Update a Service with serviceId
    app.put("/services/:serviceId", services.update);
  
    // Delete a Service with serviceId
    app.delete("/services/:serviceId", services.delete);
  
    // Delete all Services
    app.delete("/services", validateToken, authorize("admin"), services.deleteAll);
  };