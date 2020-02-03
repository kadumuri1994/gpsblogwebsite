const mongoose = require("mongoose");
const blogSchema = require("./blog.model");

let savedBlogsSchema = new mongoose.Schema({
    owner: {type: String, required: true, max: 50},
    email: {type: String, required: true, max: 50},
    title: {type: String, required: true, max: 100},
    category: {type: String, required: true, max: 100},
    headerContent: {type: String, required: true, max: 100},
    mainContent: {type: Object, required: true},
    lastActiveAt: {type: Date},
});


let activitySchema = new mongoose.Schema({
  bookmarkedBlogs: { type: Array },
  likedBlogs: { type: Array },
  commentedBlogs: { type: Array }
});

let userSchema = new mongoose.Schema({
  emailId: { type: String, required: true, max: 10 },
  activity: [userActivitySchema],
  profile: { type: Object },
  activity: [activitySchema],
  savedBlogs: [savedBlogsSchema],
  submittedBlogs: [blogSchema],
  session: {type}
});

module.exports = mongoose.model("User", userSchema);
