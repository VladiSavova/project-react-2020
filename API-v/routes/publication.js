const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.publication.get);

router.get('/details', controllers.publication.getById);

router.get('/like-post', auth(), controllers.publication.likePost);

router.post('/', auth(), controllers.publication.post);

router.put('/:id', auth(), controllers.publication.put);

router.delete('/', auth(), controllers.publication.delete);

module.exports = router;