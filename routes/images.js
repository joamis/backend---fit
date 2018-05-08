let express = require('express');
let Auth = require('../Util/Auth');

let router = express.Router();

//router.use((req, res, next) => {
//    Auth.authorize(req, res, next);
//});

const fileSaver = require('../model/image')
router.post('/', (req, res) => {
    fileSaver.addFile(req, res);
});

module.exports = router;



