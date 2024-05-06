const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST a new post
router.post("/", async (req, res) => {
  const { title, content, category_id } = req.body;
  try {
    const post = await Post.create({ title, content, category_id });
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Other CRUD operations (PUT, DELETE) can be similarly defined here

module.exports = router;
