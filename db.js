var mongoose = require('mongoose');
require('dotenv').config();

const connDb = () => {
    const url = process.env.CONNECTION_URL;
    try {
        mongoose.connect(url);
        console.log('Connected to MongoDB Cloud');
    } catch (error) {
        console.log('Database connection failure', error);
    }
}

const disconnect = () => {
    mongoose.disconnect();
}

module.exports = {connDb, disconnect}