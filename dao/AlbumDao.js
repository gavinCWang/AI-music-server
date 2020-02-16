const mongoose = require('mongoose')

let albumModel = mongoose.model("Album")

function addAlbum(album, callback) {
    albumModel.create(album,function (err,newAlbum) {
        if(!err) {
            callback({
                code: 0,
                msg: 'add success',
                album: newAlbum.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: 'add failed'
            })
        }
    })
}

function findAllAlbums(callback) {
    albumModel.find({}).exec(function (err, album) {
        console.log("[INFO] BookDao.findAllAlbums")
        if (!err)
            callback(album)
    })
}

function deleteAlbum(id,callback) {
    albumModel.findByIdAndRemove(id,function (err) {
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

function updateAlbum(id,album, callback) {
    albumModel.findByIdAndUpdate(id, album, function (err, newAlbum) {
        if(!err) {
            callback({
                code: 0,
                msg: '更新成功',
                album: newAlbum.toObject()
            })
        } else {
            callback({
                code: 1,
                msg: '更新失败'
            })
        }
    })
}

function initAlbumsData(callback) {
    let initData = [
        {
            album_id: "3751508",
            album_name: "A.I. 爱",
            public_time: "2017-12-11",
            week: 50,
            price: 89,
            cover: "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
            singers: [
                {
                    singer_id: "265",
                    singer_name: "王力宏"
                }
            ]
        },
        {
            album_id: "3327203",
            album_name: "Dreamer (梦想家)",
            public_time: "2017-12-08",
            week: 49,
            price: 102,
            cover: "http://imgcache.qq.com/music/photo/album_300/03/300_albumpic_3327203_0.jpg",
            singers: [
                {
                    singer_id: "941206",
                    singer_name: "Axwell Λ Ingrosso"
                },
                {
                    singer_id: "159855",
                    singer_name: "Trevor Guthrie"
                }
            ]
        },
        {
            album_id: "3766915",
            album_name: "Don't Don't Do It!",
            public_time: "2017-12-13",
            week: 50,
            price: 65,
            cover: "http://imgcache.qq.com/music/photo/album_300/15/300_albumpic_3766915_0.jpg",
            singers: [
                {
                    singer_id: "13317",
                    singer_name: "N.E.R.D"
                },
                {
                    singer_id: "28021",
                    singer_name: "Kendrick Lamar (肯德里克·拉马尔)"
                }
            ]
        }
    ];
    albumModel.deleteMany({}, function (err) {
        if (!err) {
            albumModel.insertMany(initData, function (err, albums) {
                if (!err) {
                    callback({
                        code: 0,
                        albums: albums,
                        msg: 'init success'
                    })
                } else {
                    callback({
                        code: 1,
                        msg: 'init failed'
                    })
                }
            })
        } else {
            callback({
                code: 1,
                msg: 'init failed'
            })
        }
    })
}

module.exports = {addAlbum, findAllAlbums, deleteAlbum, updateAlbum,initAlbumsData}