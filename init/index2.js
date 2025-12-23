const mongoose = require("mongoose");
const initData = require("./data2.js");
const Disease = require("../models/disease.js");

const MONGO_URL = "mongodb+srv://mohitthalor13:cN3njcFUa4grvfSl@cluster0.enuvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => console.log(err));

const initDB = async () => {
    try {
        await Disease.deleteMany({});
        await Disease.insertMany(initData.data); // Corrected: Directly use initData.data
        console.log("Data was initialized");
    } catch (error) {
        console.error("Error initializing data:", error);
    }
};

// Call initDB to initialize data
initDB();
