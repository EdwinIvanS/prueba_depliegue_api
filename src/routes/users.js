var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');

/* GET users listing. */
router.post('/create', controller.create);

module.exports = router;
