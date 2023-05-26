const mongoose = require('mongoose');
const mongoURI="mongodb+srv://shivamkh007:eButMduQQZjVvnUI@mytasklist.ozmqkaw.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to Mongo Successsfully");
    })
}
module.exports = connectToMongo;


