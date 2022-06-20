const Post = require('../models/Post')
const User = require('../models/User')

module.exports = {
  index: async (req, res) => {
    const posts = await Post.findAll({include: [{model: User}]});
    console.log(posts)
    return res.render('post/index', {
      posts
    });
  },
  create: async (req, res) => {
    const users = await User.findAll();
    return res.render('post/create', {
      users
    });

  },
  edit: async (req, res) => {
    const posts = await Post.findByPk(req.params.id);
    return res.render('post/edit', {
      posts
    });
  },
  store: async (req, res) => {
    await Post.create({
      title: req.body.title,
      content: req.body.content,
      id_user: req.body.id_user
    });
    return res.redirect('/posts');
  },
  delete: async (req, res) => {
    await Post.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.redirect("/posts")
  },
  update: async (req, res) => {
    await Post.update({
      title: req.body.title,
      content: req.body.content,
    }, {
      where: {
        id: req.params.id
      }
    });
    return res.redirect("/posts")
  }
};