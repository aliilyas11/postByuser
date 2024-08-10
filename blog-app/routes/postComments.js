const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Create a new comment
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
