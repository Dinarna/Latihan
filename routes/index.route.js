const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth');
const router = require('express').Router();
router.get('/', indexController.index);
router.get('/posts', postController.index);
router.get('/users', userController.index);
router.get('/posts/create', postController.create);
router.get('/users/create', userController.create);
router.post('/posts/store', postController.store);
router.post('/users/store', userController.store);
router.get('/posts/:id/delete', postController.delete);
router.get('/users/:id/delete', userController.delete);
router.get('/posts/:id/edit', postController.edit);
router.get('/users/:id/edit', userController.edit);
router.post('/posts/:id/update', postController.update);
router.post('/users/:id/update', userController.update);


module.exports = router;