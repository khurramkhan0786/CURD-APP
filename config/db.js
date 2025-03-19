//it import mongoose librarey
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
//it import .env file
require("dotenv").config;

const connectDB = ()=>{
 mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
 })
 .then(() =>{ console.log("database Connect is Successfully")})
 .catch((err) =>{
    console.log(err);
    console.error(err.message);
    process.exit(1);
 })
}
module.exports = connectDB;