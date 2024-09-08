var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');

/* GET users listing. */
router.get('/find', controller.findAll);
router.get('/find/:id', controller.find);

module.exports = router;
