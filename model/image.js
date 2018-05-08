const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/static')
    },

    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({storage: storage}).single('file');

exports.addFile = (req, res) => {
    console.log(req.body)
    upload(req, res, error => {
        if (error) {
            console.log(error);
            res.json({status: error});
            return;
        }
        console.log(req.file);
        res.json({fileName: req.file});
    });
};