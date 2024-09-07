const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;
// Database Connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri); // Connection to database
    console.log("Database Connection Successfull");
  } catch (error) {
    // Error Handling of Database
    console.log(`Error Connecting To Database ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectToDatabase;
