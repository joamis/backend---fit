let express = require('express');
let MealsHistory = require('../model/mealsHistory');
let router = express.Router();


router.get('/', (req, res) => {
    MealsHistory.getAllMealsHistory((err, mealsHistory) => {
        if (err) {
            res.send(err);
        }
        res.send(mealsHistory);
    });
});

module.exports = router;