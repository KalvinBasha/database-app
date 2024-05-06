const express = require("express");
const router = express.Router();
const Category = require("../models/category");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// POST a new category
router.post("/", async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = await Category.create({ name, description });
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Other CRUD operations (PUT, DELETE) can be similarly defined here

module.exports = router;
