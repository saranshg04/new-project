const mongoose = require("./connection");

var Schema = mongoose.Schema;

var tab= new Schema({name:String,image:String,price:String,highlights:[String,String,String,String,String],description:[String,String,String,String],sideimg:[String,String,String]})

var userSchema = mongoose.model('tablets',tab)





module.exports = userSchema;