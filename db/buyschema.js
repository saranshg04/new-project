const mongoose = require("./connection");

var Schema = mongoose.Schema;



var userSchema = new Schema({
    userid: {type: String},
    proname: {type: String},
    proimage: {type: String}
});


var User = mongoose.model("buyschema",userSchema);



module.exports = User;