// database.js
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://dubey748:dubey748@cluster0.sqdxtfs.mongodb.net/dubey748?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
