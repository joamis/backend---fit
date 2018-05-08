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
    delete req.body._id;
    const meal = new Meal(req.body);
    console.log(meal)
    Meal.addMeal(meal, (err, meal) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        console.log("success");
        res.send(meal);
    });
});




module.exports = router;
