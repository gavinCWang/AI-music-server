var express = require('express');
var router = express.Router();
var albumDao = require('../dao/AlbumDao');

router.get('/', function(req, res, next) {
    albumDao.findAllAlbums(function (albums) {
        res.json(albums);
    })
});

router.post('/add', function(req, res, next) {
    let params = req.body;
    albumDao.addAlbum(params,function (response) {
        res.json(response);
    })
});

router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    albumDao.deleteAlbum(id, function (response) {
        res.json(response);
    })
});

router.post('/update', function(req, res, next) {
    let params = req.body;
    albumDao.updateAlbum(params._id, params,function (response) {
        res.json(response);
    })
});

router.get('/init', function(req, res, next) {
    albumDao.initAlbumsData(function (response) {
        res.json(response);
    })
});

module.exports = router;