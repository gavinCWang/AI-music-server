const mongoose = require('mongoose');
const userModel = mongoose.model('User');

function addUser(user, callback) {
    userModel.create(user, function (err, newUser) {
        if (!err) {
            callback({
                code: 0,
                user: newUser.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: err
            })
        }
    })
}

function findUser(userInfo, callback) {
    userModel.findOne({username: userInfo.username, password: userInfo.password}).exec(function (err, user) {
        if (!err) {
            callback({
                code: 0,
                user: user
            })
        } else {
            callback({
                code: 1,
                msg: err
            })
        }
    })
}

module.exports = {addUser, findUser};