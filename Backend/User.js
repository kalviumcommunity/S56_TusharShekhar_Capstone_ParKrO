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
    location:String,
    vehicleImg: String 
})

const QrCodeDetail = new mongoose.Schema({
    fullname:String,
    vehicle:String,
    mobile:Number,
    vehicleNo:String,
    location:String,
    qrimg:String
})

const UserDetails = mongoose.model("username" , UserDetail )
const QueryDetails = mongoose.model("queries" , QueryDetail)
const ProfileDetails = mongoose.model("profileinfos" , ProfileDetail)
const QrCodeDetails = mongoose.model("qrcodeinfo",QrCodeDetail)

module.exports = {UserDetails,QueryDetails,ProfileDetails,QrCodeDetails}