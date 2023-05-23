const mongoose = require('mongoose');

const connectDB = async(options = {}) =>{
    try{
        await mongoose.connect('mongodb://localhost/ecommerces', options); 
        console.log('MongoDB connected');
        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error: ' + error);
        });
    }catch(error){
        console.error(error);
    }
}


module.exports = connectDB;