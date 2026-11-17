import mongoose from "mongoose";
const {Int32} = require("mongodb");

const workSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    title: {type: String, required: true},
    fandomTags: {type: Array, required: true},
    relationshipTags: {type: Array, required: true},
    generalTags: {type: Array, required: true},
    authorId: {type: String, required: true},
    published: {type: Date, required: true},
    lastEdited: {type: Date, required: true},
    chapters: {type: Array, required: true},
    summary: {type: String, required: true},
    likes: {type: Int32},
    comments: {type: Array},
    anonymous: {type: Boolean, required: true},
    userLikes: {type: Array, required: true},
})

const Work = new mongoose.model("Works", workSchema);