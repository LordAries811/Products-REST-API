const mongoose = require("mongoose");

const connectDB = (uri) => {
    return mongoose.connect(uri)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });
};

module.exports = connectDB;

