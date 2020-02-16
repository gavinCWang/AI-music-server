const mongoose = require('mongoose')
require('../model/AlbumModel')
let  albumDao = require('../dao/AlbumDao')
const assert = require('assert')
var dbUrl = "mongodb://localhost/albums"

describe('Test AlbumDao', function () {
    before(function () {
        mongoose.connect(dbUrl, function (err) {
        })
    })
    after(function () {
        mongoose.disconnect()
    })

    it('Test add albumDao insert', function (done) {
        let album = {
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
            };
        albumDao.addAlbum(album, function (newAlbum) {
            assert.ok(newAlbum.album_id != null)
            done()
        })
    });
})