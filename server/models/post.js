const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const Category = require("./category");

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
