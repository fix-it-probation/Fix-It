const multer = require('multer');
const path = require('path');
const util = require('util');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/assets/uploads');
    },
    filename: function(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(new Error('Unsupported files'), false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize:1024*1024*10
    },
    fileFilter:fileFilter
});

const upload_ = multer({
    storage: storage,
    limits: {
        fileSize:1024*1024*10
    },
    fileFilter:fileFilter
})

let multiUploadHelper = upload_.fields([{name:'file1', maxCount:1},{name:'file2', maxCount:1},{name:'file3', maxCount:1}])

module.exports = {
    upload: upload,
    multiUploadHelper: multiUploadHelper
}