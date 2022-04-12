const mongoose = require('mongoose');

const connectDB = async (url) =>{
    await mongoose.connect(url, {
        autoIndex: true
    })
}

module.exports = connectDB;