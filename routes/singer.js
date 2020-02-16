var express = require('express');
var singerDao = require('../dao/SingerDao');
var router = express.Router();

router.get('/info', function(req, res, next) {
    let params = req.query;
    let name = params.name;
    if (name) {
        singerDao.findByName(name, function (singers) {
            res.json(singers);
        })
    }
});

router.get('/', function(req, res, next) {
    singerDao.findAllSingers(function (singers) {
        res.json(singers);
    })
});

router.post('/add', function(req, res, next) {
    let params = req.body;
    if (params) {
        singerDao.addSinger(params,function (response) {
            res.json(response);
        })
    }
});

router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    singerDao.deleteSinger(id, function (response) {
        res.json(response);
    })
});

router.post('/update', function(req, res, next) {
    let body = req.body;
    if (body) {
        singerDao.updateSinger(body._id, body,function (response) {
            res.json(response);
        })
    }
});

router.get('/init', function(req, res, next) {
    singerDao.initSingersData(function (response) {
        res.json(response);
    })
});

module.exports = router;