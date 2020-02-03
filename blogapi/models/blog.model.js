const mongoose = require('mongoose');
//mongoose.set('useFindAndModify', false);

let BlogSchema = new mongoose.Schema({
    owner: {type: String, required: true, max: 50},
    email: {type: String, required: true, max: 50},
    title: {type: String, required: true, max: 100},
    category: {type: String, required: true, max: 100},
    headerContent: {type: String, required: true, max: 100},
    mainContent: {type: Object, required: true},
    likes: {type: Number},
    comments: {type: Array},
    featuredBlog: {type: Boolean},
    lastActiveAt: {type: Date},
    status: {type: String, max: 30} //"saved","pendingReview", "approved"
});

module.exports = mongoose.model('Blog', BlogSchema);
