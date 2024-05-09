const mongoose = require("mongoose")

const UserDetail = new mongoose.Schema({
    email:String,
    password:String
})

const QueryDetail =  new mongoose.Schema({
    fullname:String,
    email:String,
    MobileNo:String,
    City:String,
    query:String
})

const UserDetails = mongoose.model("username" , UserDetail )
const QueryDetails = mongoose.model("queries" , QueryDetail)

module.exports = {UserDetails,QueryDetails}