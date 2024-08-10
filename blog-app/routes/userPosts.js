const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get all posts by a single user
router.get("/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
