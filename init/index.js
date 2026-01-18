const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://mohitthalor13:cN3njcFUa4grvfSl@cluster0.enuvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
    try {
      await mongoose.connect(MONGO_URL);
      console.log("Connected to MongoDB");
  
      // Initialize data after connection is established
      await initDB();
    } catch (error) {
      console.error("Error connecting to MongoDB or initializing data:", error);
    }
  }
  
  async function initDB() {
    try {
      await Listing.deleteMany({});
      await Listing.insertMany(initData.data);
      console.log("Data was initialized");
    } catch (error) {
      console.error("Error initializing data:", error);
    }
  }
  
  main();