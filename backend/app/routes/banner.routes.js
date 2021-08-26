const { validateToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")
const imageUploader = require('../helpers/image-uploader');

module.exports = app => {
    const banners = require("../controllers/banner.controller.js");
  
    // Create a new Banner
    app.post("/banners",validateToken, authorize(["admin"]),imageUploader.upload.single('image'), banners.create);
  
    // Retrieve all banners
    app.get("/banners", banners.findAll);
    
    // Retrieve a single Banner by bannerId
    app.get("/banners/:bannerId", validateToken, authorize(["admin"]), banners.findOne);
    
    // Update a Banner by bannerId
    app.put("/banners/:bannerId",validateToken, authorize(["admin"]), banners.update);
    
    // Delete a Banner by bannerId
    app.delete("/banners/:bannerId",validateToken, authorize(["admin"]), banners.delete);
    
    // Delete all banners
    app.delete("/banners", validateToken, authorize(["admin"]), banners.deleteAll);
};