const { validateToken} = require("../middleware/JWT.js");
const { authorize } = require("../middleware/authorize.js");
const imageUploader = require('../helpers/image-uploader');


module.exports = app => {
    const feeds = require("../controllers/feed.controller.js");
    
    // Create a new Banner
    app.post("/feeds",validateToken,imageUploader.upload.single("image"), feeds.create);
  
    // Retrieve all feeds
    app.get("/feeds/admin", validateToken, authorize(["admin"]),feeds.findAll);

    // Retrieve all verified feeds
    app.get("/feeds", feeds.findVerifiedAll);

    // Retrieve total of pending feeds (haven't yet verified) 
    app.get("/feeds/pending", validateToken, authorize(["admin"]), feeds.findTotalPending)
    
    // Retrieve all owned feeds
    app.get("/feeds/owned", validateToken,feeds.findAllUserFeeds);
    
    // Retrieve a single feed by feedId
    app.get("/feeds/:feedId",validateToken, authorize(["admin"]),  feeds.findOne);
    
    // Update a feed by feedId
    app.put("/feeds/:feedId",validateToken, authorize(["admin"]), feeds.update);
    
    // Delete a feed by feedId
    app.delete("/feeds/:feedId", validateToken, authorize(["admin"]), feeds.delete);
    
    // Delete all feeds
    app.delete("/feeds", validateToken, authorize(["admin"]), feeds.deleteAll);

    // Verify a feed ad by feedId
    app.get("/feeds/:feedId/verify", validateToken, authorize(["admin"]), feeds.verifyFeed);

    app.put("/feeds/upload-receipt/:feedId",validateToken, imageUploader.upload.single("image"), feeds.uploadReceipt);
};