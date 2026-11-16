const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const {Int32} = require("mongodb");

const url = process.env.CONNECTION_URL;
const connDb = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB Cloud');
    } catch (error) {
        console.log('Database connection failure', error);
    }
}

const workSchema = new Schema({
    _id: {String, required: true},
    title: {String, required: true},
    fandomTags: {Array, required: true},
    relationshipTags: {Array, required: true},
    generalTags: {Array, required: true},
    authorId: {String, required: true},
    published: {Date, required: true},
    lastEdited: {Date, required: true},
    chapters: {Array, required: true},
    summary: {String, required: true},
    likes: {Int32},
    comments: {Array},
    anonymous: {Boolean, required: true},
    userLikes: {Array, required: true},
})