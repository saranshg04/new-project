const mongoose = require("./connection");

var Schema = mongoose.Schema;

var mob= new Schema({name:String,image:String,price:String,highlights:[String,String,String,String,String],description:[String,String,String,String],sideimg:[String,String,String]})

var userSchema = mongoose.model('mobiles',mob)





module.exports = userSchema;