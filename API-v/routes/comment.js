const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.post('/', auth(), controllers.comment.post);


module.exports = router;