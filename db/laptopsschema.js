const mongoose = require("./connection");

var Schema = mongoose.Schema;

var lap= new Schema({name:String,image:String,price:String,highlights:[String,String,String,String,String],description:[String,String,String,String],sideimg:[String,String,String]})

var userSchema = mongoose.model('laptops',lap)





module.exports = userSchema;