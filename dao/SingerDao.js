const mongoose = require('mongoose');

const singerModel = mongoose.model('Singer');

function findAllSingers(callback) {
    singerModel.find({}).exec(function (err,singers) {
        if(!err) callback(singers)
    })
}

function findByName(name, callback) {
    singerModel.find({singer_name: name}).exec(function (err, singers) {
        if (!err) {
            callback(singers);
        }
    })
}


function updateSinger(id, singer, callback) {
    singerModel.findByIdAndUpdate(id, singer, function (err, newSinger) {
        if(!err) {
            callback({
                code: 0,
                msg: 'update success',
                singer: newSinger.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: 'update failed'
            })
        }
    })
}


function deleteSinger(id,callback) {
    singerModel.findByIdAndRemove(id,function (err) {
        if(!err) {
            callback({
                code: 0,
                msg: 'del success'
            })
        } else {
            callback({
                code: 1,
                msg: 'del failed'
            })
        }
    })
}

function addSinger(singer,callback) {
    singerModel.create(singer,function (err,newSinger) {
        if(!err) {
            callback({
                code: 0,
                msg: 'add success',
                singer: newSinger.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: 'add failed'
            })
        }
    })
}

module.exports = {findByName, findAllSingers, addSinger, deleteSinger, deleteSinger, updateSinger};