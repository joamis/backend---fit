let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let mealsHistorySchema = new Schema({
    name: String,
    user: String,
    date: Date
}, {collection: 'mealsHistory'});

let MealsHistory = module.exports = mongoose.model('mealsHistory', mealsHistorySchema);

module.exports.getMealsHistory = (username, callback) => {
    MealsHistory.find({user: username}, callback);
}

module.exports.addMealHistory = (mealHistory, callback) => {
    mealHistory.save(callback);
}

module.exports.delMeal = (id, callback) => {
    MealsHistory.remove({_id: id}, callback);
}
