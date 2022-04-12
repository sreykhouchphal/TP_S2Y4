const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydbex01', {
            autoIndex: true,
            serverSelectionTimeoutMS: 3000 // default is 30 seconds
        });
        console.log("MongooDB Connected~");

    }catch(err) {
        console.log("Mongoose: ",err);
    }
}