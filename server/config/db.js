const mongoose = require("mongoose");

// Connects to MongoDB Atlas using the URI from .env
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // stop server if DB fails to connect
  }
};

module.exports = connectDB;
