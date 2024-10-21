const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: "more-user"},
})

const Post = mongoose.model('more-post', postSchema);
module.exports = Post