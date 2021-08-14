// const { upload } = require("../middleware/store-image.js")
const { validateToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")


module.exports = app => {
    const banners = require("../controllers/banner.controller.js");
  
    // Create a new Banner
    app.post("/banners",validateToken, authorize(), banners.create);
  
    // Retrieve all banners
    app.get("/banners", banners.findAll);
    
    // Retrieve a single Banner with bannerId
    app.get("/banners/:bannerId", banners.findOne);
    
    // Update a Banner with bannerId
    app.put("/banners/:bannerId", banners.update);
    
    // Delete a Banner with bannerId
    app.delete("/banners/:bannerId", banners.delete);
    
    // Delete all banners
    app.delete("/banners", validateToken, authorize("admin"), banners.deleteAll);
    
};