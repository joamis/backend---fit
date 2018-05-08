var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surname: String,
    login : String,
    password : String,
    weight: Number,
    height: Number,
    physicalActivityRatio: Number,
    isMale: Boolean,
}, {collection: 'users'});

var User = module.exports = mongoose.model('user', userSchema);


module.exports.login = (user,  callback) => {
    User.find({login: user.login, password: user.password}, callback);
}

module.exports.addUser = (user, callback) => {
    user.save(callback);
}
