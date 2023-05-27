const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
const connectToMongo=()=>{
    mongoose.connect(process.env.MongoURI,()=>{
        console.log("connected to Mongo Successsfully");
    })
}
module.exports = connectToMongo;


