let express = require('express');
let Meal = require('../model/meal');
let router = express.Router();


router.get('/', (req, res) => {
    Meal.getAllMeals((err, meals) => {
        if (err) {
            res.send(err);
        }
            res.send(meals);
        });
});

module.exports = router;
