const router = require('express').Router();
const { postController } = require('../controllers');

module.exports = router
  .post('/new/post', postController.addPost)
  .delete('/:id', postController.deletePost)
  .get('/:id', postController.show)
  .put('/:id', postController.updatePost)
  .get('/', postController.getAllPosts);