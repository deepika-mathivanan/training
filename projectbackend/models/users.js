/*var mdb=require('mongoose')
var userSchema=mdb.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
})
var user_schema=mdb.model("users",userSchema)
module.exports=user_schema*/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
});

module.exports = mongoose.model('User', userSchema);
