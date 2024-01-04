// connect to mongoDB
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URL);
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.log('MongoDB connection FAIL');
        process.exit(1);
    }
}

module.exports = connectDB;
