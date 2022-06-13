const Post = require('../models/Post')


module.exports = {
  index: async (req, res) => {
    const posts = await Post.findAll();
    return res.render('post/index', {
      posts
    });
  },
  create: async (req, res) => {
    return res.render('post/create');
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