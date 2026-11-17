const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const express = require("express");

const url = process.env.CONNECTION_URL;
const connDb = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB Cloud');
    } catch (error) {
        console.log('Database connection failure', error);
    }
}
