// Configración multer
const multer = require('multer')
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb){
        cb(null, `${uuidv4()}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

var upload = multer({
    storage,
    limits: {
        fileSize: 1000000,
    }
}).single('perfil');

module.exports = {
    upload
}