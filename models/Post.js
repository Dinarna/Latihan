const { DataTypes } = require('sequelize');
const User = require('./User');
const db = require('../database');

const Post = db.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey : true
  },
  id_user: DataTypes.INTEGER
  ,
  title : DataTypes.STRING(80),
  content : DataTypes.TEXT
});
Post.hasOne(User,{foreignKey : "id_user"})

module.exports = Post;
