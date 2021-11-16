const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://dbUser:admin123@expense-trackify.22tzc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const MONGO_URI = process.env.MONGO_URI; -- not working

//Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error(`${error}: Failed to connect to MongoDB`);
    }
};

//Export as module
module.exports = connectDB;
