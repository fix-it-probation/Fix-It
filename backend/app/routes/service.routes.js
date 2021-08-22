// const { upload } = require("../middleware/store-image.js")
const { validateToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")


module.exports = app => {
    const services = require("../controllers/service.controller.js");
    const userFavorites = require("../controllers/userFavorite.controller.js")
  
    // Create a new Service
    app.post("/services",validateToken,authorize(["mitra"]), services.create);
  
    // Retrieve all Services
    app.get("/services/admin", services.findAll);
    
    app.get("/services", services.findVerifiedAll);
    
    // Retrieve all owned Services
    app.get("/services/owned",validateToken,services.findAllUserService);
    
    //  Retrieve all Favorite Service
    app.get("/favorites", validateToken, userFavorites.findAllByUserId);
    
    app.delete("/services/favorite", validateToken,authorize(["admin"]), userFavorites.deleteAll);

    // Retrieve a single Service with serviceId
    app.get("/services/:serviceId", services.findOne);
    
    // Update a Service with serviceId
    app.put("/services/:serviceId", services.update);
    
    // Delete a Service with serviceId
    app.delete("/services/:serviceId", services.delete);
    
    // Delete all Services
    app.delete("/services", validateToken, authorize(["admin"]), services.deleteAll);

    
    app.post("/services/admin/search", validateToken, authorize(["admin"]), services.searchService);

    // Search verified
    app.post("/services/search", validateToken, services.searchVerifiedService);

    // Verify Service
    app.get("/services/:serviceId/verify",validateToken, authorize(["admin"]),services.verifyService);

    // Create a new Favorite
    app.post("/services/:serviceId/favorite", validateToken, userFavorites.create);

    app.get("/services/:serviceId/favorite", validateToken, userFavorites.findFavorite);


    app.delete("/services/:serviceId/favorite", validateToken, userFavorites.delete);
    


};