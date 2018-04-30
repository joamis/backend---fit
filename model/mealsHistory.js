let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let mealsHistorySchema = new Schema({
    name: String,
    date: String
}, {collection: 'mealsHistory'});

let MealsHistory = module.exports = mongoose.model('mealsHistory', mealsHistorySchema);

module.exports.getAllMealsHistory = (callback) => {
    MealsHistory.find(callback);
}

module.exports.addMealHistory = (mealHistory, callback) => {
    mealHistory.save(callback);
}