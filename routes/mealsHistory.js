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
    delete req.body._id;
    const mealHistory = new MealsHistory(req.body);
    MealsHistory.addMealHistory(mealHistory, (err, meal) => {
        if (err) {
            res.send(err);
        }
        res.send(meal);
    });
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    MealsHistory.delMeal(req.params.id, (err, mealHistory) => {
        if (err) {
            res.send(err);
        }
        else
        res.send(mealHistory);
    })
});


module.exports = router;