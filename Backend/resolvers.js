const bcrypt = require('bcryptjs');
const QRCode = require('qrcode');

const { UserDetails, QueryDetails, QrCodeDetails,blogSchemas } = require('./User');

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
  },
  getBlog: async ({ id }) => await blogSchemas.findById(id),
  getAllBlogs: async () => await blogSchemas.find(),
  createBlog: async ({ title, content }) => {
    const newBlog = new blogSchemas({ title, content, createdAt: new Date().toISOString() });
    return await newBlog.save();
  },
  updateBlog: async ({ id, title, content }) => {
    return await blogSchemas.findByIdAndUpdate(id, { title, content }, { new: true });
  },
  deleteBlog: async ({ id }) => await blogSchemas.findByIdAndDelete(id),

  
};

module.exports = resolvers;
