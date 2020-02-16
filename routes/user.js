var express = require('express');
var router = express.Router();
var userDao = require('../dao/UserDao');

router.post('/login', function(req, res, next) {
  let params = req.body;
    userDao.findUser(params, function (response) {
    if (response.code == 0) {
      let user = response.user;
      if (user) {
        res.json({
          code: 0,
          msg: 'login success',
          userId: user['_id']
        })
      } else {
        res.json({
          code: 1,
          msg: 'login failed, check username & password!!'
        })
      }
    } else if (response.code == 1) {
      res.json({
        code: 1,
        msg: 'server exception'
      })
    }
  })
});

router.post('/register', function(req, res, next) {
  let params = req.body;
  if (params) {
    userDao.addUser(params, function (response) {
      if (response.code == 0) {
        let user = response.user;
        res.json({
          code: 0,
          msg: 'register success',
          userId: user['_id']
        })
      } else if (response.code == 1) {
        res.json({
          code: 1,
          msg: 'register failed'
        })
      }
    })
  }
});

module.exports = router;
