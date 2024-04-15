const mongoose = require("mongoose")

const UserDetail = new mongoose.Schema({
    email:String,
    password:String
})

const UserDetails = mongoose.model("username" , UserDetail )

module.exports = {UserDetails}