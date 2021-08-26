const { validateToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")
const imageUploader = require('../helpers/image-uploader');

module.exports = app => {
    const services = require("../controllers/service.controller.js");
    const userFavorites = require("../controllers/userFavorite.controller.js")
  
    // Create a new Service
    app.post("/services", validateToken, authorize(["mitra"]), imageUploader.multiUploadHelper, services.create);
  
    // Retrieve all Services
    app.get("/services/admin", services.findAll);

    // Retrieve all verified services
    app.get("/services", services.findVerifiedAll);

    // Retrieve total of pending feeds (haven't yet verified) 
    app.get("/services/pending", validateToken, authorize(["admin"]), services.findTotalPending)
    
    // Retrieve all owned Services
    app.get("/services/owned",validateToken,services.findAllUserService);
    
    // Retrieve all Favorite Services
    app.get("/favorites", validateToken, userFavorites.findAllByUserId);

    // Delete all services from Favorites for all users
    app.delete("/services/favorite", validateToken, authorize(["admin"]), userFavorites.deleteAll);

    // Retrieve a single Service with serviceId
    app.get("/services/:serviceId", services.findOne);
    
    // Update a Service with serviceId
    app.put("/services/:serviceId", services.update);
    
    // Delete a Service with serviceId
    app.delete("/services/:serviceId", services.delete);
    
    // Delete all Services
    app.delete("/services", validateToken, authorize(["admin"]), services.deleteAll);

    // Search spesific service 
    app.post("/services/admin/search", validateToken, authorize(["admin"]), services.searchService);
    
    // Search verified services
    app.post("/services/search", validateToken, services.searchVerifiedService);

    // Verify a Service by serviceId
    app.get("/services/:serviceId/verify", validateToken, authorize(["admin"]), services.verifyService);
    
    // Create a new Favorite
    app.post("/services/:serviceId/favorite", validateToken, userFavorites.create);

    // Retrieve Favorites per Specific User
    app.get("/services/:serviceId/favorite", validateToken, userFavorites.findFavorite);

    // Delete Favorites per Specific User
    app.delete("/services/:serviceId/favorite", validateToken, userFavorites.delete);

    // Upload single receipt photo 
    app.put("/services/upload-receipt/:serviceId",validateToken, imageUploader.upload.single("image"), services.uploadReceipt);
};