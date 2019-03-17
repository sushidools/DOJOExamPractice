const Post = require('mongoose').model('Post');
const { Http } = require('@status/codes');

module.exports = {
  getAllPosts(req, res) {
    Post.find({})
      .then(data => {
        return res.json({ posts: data });
      })
      .catch(error => res.json(error));
  },

  show(req, res) {
    Post.findById(req.params.id)
      .then(data => res.json({ post: data }))
      .catch(error => res.json(error));
  },

  addPost(req, res) {
    console.log("The post ", req.body);
    console.log('The current user in session ', req.session.user._id);
    // console.log('The current user in cookies ', req.cookie('userID'))
    new_post = new Post({
      userid: req.session.user._id,
      title: req.body.title,
      content: req.body.content,
      url: req.body.url
    });
    new_post.save()
      .then((post) => {
        res.json(post);
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.json(errors);
      });

  },
  deletePost(req, res) {
    // console.log('This is the post to be deleted from server side ', req.params.id);
    Post.findByIdAndDelete(req.params.id)
      .then(post => res.json(post))
      .catch(error => res.json(error));
  },

  updatePost(req, res) {
    const { id: postId } = req.params;
    console.log(req.params);
  
    Post.findByIdAndUpdate(postId, req.body, { new: true })
      .then(post => res.json(post))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        res.json(errors);
      });
  }
}