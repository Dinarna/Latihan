const User = require('../models/User')


module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    return res.render('user/index', {
      users
    });
  },
  create: async (req, res) => {
    return res.render('user/create');
  },
  edit: async (req, res) => {
    const users = await User.findByPk(req.params.id);
    return res.render('user/edit', {
      users
    });
  },
  store: async (req, res) => {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
    });
    return res.redirect('/users');
  },
  delete: async (req, res) => {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    return res.redirect("/users")
  },
  update: async (req, res) => {
    await User.update({
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
    }, {
      where: {
        id: req.params.id
      }
    });
    return res.redirect("/users")
  }
};