const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");

// Import routes
const userRoutes = require("../routes/users");
const postRoutes = require("../routes/posts");
const userPostsRoutes = require("../routes/userPosts");
const loginLoggerRoutes = require("../routes/loginLogger");
const postCommentsRoutes = require("../routes/postComments");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/user-posts", userPostsRoutes);
app.use("/api/login-logger", loginLoggerRoutes);
app.use("/api/post-comments", postCommentsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
