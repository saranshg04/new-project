const mongoose = require("./connection");

var Schema = mongoose.Schema;



var userSchema = new Schema({
    name: {type: String},
    userid: {type: String},
    password: {type: String},
    status:{type:String,default:"0"}
});


var User = mongoose.model("signup",userSchema);



module.exports = User;