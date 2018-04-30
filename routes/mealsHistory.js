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

router.post('/', (req, res) => {
    const mealHistory = new MealsHistory(req.body);
    MealsHistory.addMealHistory(mealHistory, (err, meal) => {
        if (err) {
            res.send(err);
        }
        res.send(meal);
    });
});


module.exports = router;