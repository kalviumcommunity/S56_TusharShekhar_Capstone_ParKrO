const mongoose = require("mongoose")

const UserDetail = new mongoose.Schema({
    username:String
})

const UserDetails = mongoose.model(".usernames" , UserDetail )

module.exports = {UserDetails}