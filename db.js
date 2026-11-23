var mongoose = require('mongoose');

const url = process.env.CONNECTION_URL;
const connDb = () => {
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