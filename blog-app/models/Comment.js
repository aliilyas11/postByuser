const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  content: { type: String, required: true }
  // Removed the author field
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
