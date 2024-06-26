const { number } = require("joi")
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

const ProfileDetail = new mongoose.Schema({
    fullname:String,
    age:String,
    licenseNo:String,
    vehiclType:String,
    contactNo:String,
    vehicleNo:String,
    location:String
})

const UserDetails = mongoose.model("username" , UserDetail )
const QueryDetails = mongoose.model("queries" , QueryDetail)
const ProfileDetails = mongoose.model("profileinfo" , ProfileDetail)

module.exports = {UserDetails,QueryDetails,ProfileDetails}