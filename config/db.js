const mongoose = require('mongoose');

//Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,
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
