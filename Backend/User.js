const { number } = require("joi")
const mongoose = require("mongoose")

const UserDetail = new mongoose.Schema({
    email:String,
    password:String,
    otp:String, 
    otpExpiration:Date,
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

const QrCodeDetail = new mongoose.Schema({
    fullname:String,
    vehicle:String,
    mobile:Number,
    vehicleNo:String,
    location:String,
    qrimg:String
})

const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: String
    }
  });

const UserDetails = mongoose.model("username" , UserDetail )
const QueryDetails = mongoose.model("queries" , QueryDetail)
const ProfileDetails = mongoose.model("profileinfo" , ProfileDetail)
const QrCodeDetails = mongoose.model("qrcodeinfo",QrCodeDetail)
const blogSchemas = mongoose.model("Blog",blogSchema)

module.exports = {UserDetails,QueryDetails,ProfileDetails,QrCodeDetails,blogSchemas}