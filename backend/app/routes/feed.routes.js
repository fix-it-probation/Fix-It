// const { upload } = require("../middleware/store-image.js")
const { validateToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")


module.exports = app => {
    const feeds = require("../controllers/feed.controller.js");
  
    // Create a new Banner
    app.post("/feeds",validateToken, authorize(), feeds.create);
  
    // Retrieve all feeds
    app.get("/feeds", feeds.findAll);
    
    // Retrieve a single Banner with feedId
    app.get("/feeds/:feedId", feeds.findOne);
    
    // Update a Banner with feedId
    app.put("/feeds/:feedId", feeds.update);
    
    // Delete a Banner with feedId
    app.delete("/feeds/:feedId", feeds.delete);
    
    // Delete all feeds
    app.delete("/feeds", validateToken, authorize("admin"), feeds.deleteAll);
    
};