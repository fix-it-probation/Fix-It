// const { upload } = require("../middleware/store-image.js")
const { validateToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js")


module.exports = app => {
    const feeds = require("../controllers/feed.controller.js");
  
    // Create a new Banner
    app.post("/feeds",validateToken, feeds.create);
  
    // Retrieve all feeds
    app.get("/feeds/admin", validateToken, authorize(["admin"]),feeds.findAll);

    app.get("/feeds", feeds.findVerifiedAll);
    
    // Retrieve all owned Services
    app.get("/feeds/owned",validateToken,feeds.findAllUserService);
    
    // Retrieve a single feed with feedId
    app.get("/feeds/:feedId",validateToken, authorize(["admin"]),  feeds.findOne);
    
    // Update a feed with feedId
    app.put("/feeds/:feedId",validateToken, authorize(["admin"]), feeds.update);
    
    // Delete a feed with feedId
    app.delete("/feeds/:feedId", validateToken, authorize(["admin"]), feeds.delete);
    
    // Delete all feeds
    app.delete("/feeds", validateToken, authorize(["admin"]), feeds.deleteAll);


    app.get("/feeds/:feedId/verify",validateToken, authorize(["admin"]),feeds.verifyFeed);

    


    
};