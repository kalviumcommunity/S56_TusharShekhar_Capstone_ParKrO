const bcrypt = require('bcryptjs'); // Assuming you're using bcrypt for password hashing
const QRCode = require('qrcode');   // For generating QR codes

// Import Mongoose models
const { UserDetails, QueryDetails, QrCodeDetails } = require('./User');

const resolvers = {
  getUser: async ({ id }) => {
    return await UserDetails.findById(id);
  },
  getAllUsers: async () => {
    return await UserDetails.find();
  },
  getAllQueries: async () => {
    return await QueryDetails.find();
  },
  getQrCodes: async () => {
    return await QrCodeDetails.find();
  },
  createUser: async ({ email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserDetails({ email, password: hashedPassword });
    return await newUser.save();
  },
  createQuery: async ({ fullname, email, MobileNo, City, query }) => {
    const newQuery = new QueryDetails({ fullname, email, MobileNo, City, query });
    return await newQuery.save();
  },
  createQrCode: async ({ fullname, vehicle, mobile, vehicleNo, location }) => {
    const qrCodeData = `Full Name: ${fullname}, Vehicle Number: ${vehicleNo}`;
    const qrimg = await QRCode.toDataURL(qrCodeData);
    const newQrCode = new QrCodeDetails({ fullname, vehicle, mobile, vehicleNo, location, qrimg });
    return await newQrCode.save();
  }
};

module.exports = resolvers;
