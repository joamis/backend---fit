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

router.post('/', (req, res) => {
    const meal = new Meal(req.body);
    Meal.addMeal(meal, (err, meal) => {
        if (err) {
            res.send(err);
        }
        res.send(meal);
    });
});

module.exports = router;
