const express = require("express");
const app = express();
const User = require("./models/user.model");
const Post = require("./models/post.model");
require("./db/db.connect");

// Middleware to parse JSON bodies
app.use(express.json());

const newUser = {
  name: "Thomas sunday",
  email: "tomsunday@hotmail.com",
};

// Async function to seed user data in DB
const seedUserData = async (user) => {
  try {
    const userToSave = new User(user);
    const savedUser = await userToSave.save();
    console.log(savedUser);
  } catch (error) {
    console.error("Failed to seed data:", error);
  }
};

// seedUserData(newUser)

const postData = {
  title: "Greeting",
  content: "Have a good day!",
  author: "67161cb65e5ae239fef5d041",
};

const addPost = async () => {
  try {
    const newPost = new Post(postData);
    await newPost.save();
    console.log(newPost);
  } catch (error) {
    console.error("Error", error);
  }
};

// addPost();

const getAllPosts = async () => {
  try {
    const allPosts = await Post.find().populate("author");
    console.log("All Posts:", allPosts);
  } catch (error) {
    console.log("Error", error);
  }
};

getAllPosts();

