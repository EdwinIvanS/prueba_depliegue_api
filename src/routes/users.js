var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json('respond with a resource');
});

module.exports = router;
