let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let mealSchema = new Schema({
    name: String,
    imageName: String,
    ingredients: [String],
    calories: Number,
    makro: [String]
}, {collection: 'meals'});

let Meal = module.exports = mongoose.model('meal', mealSchema);

module.exports.getAllMeals = (callback) => {
    Meal.find(callback);
}

module.exports.addMeal = (meal, callback) => {
    meal.save(callback);
}