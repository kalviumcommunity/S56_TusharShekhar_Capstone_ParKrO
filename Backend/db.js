const mongoose = require('mongoose');
const { UserDetails } = require('./User');
const cron = require("node-cron");
require('dotenv').config();

const uri = process.env.URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);

    process.exit(1);
  }
};
cron.schedule('* * * * *', async () => {
  try {
    const result = await UserDetails.deleteMany({ createdAt: { $lte: new Date(Date.now() - 10 * 60 * 1000) } });
    console.log(`${result.deletedCount} OTP(s) deleted`);
  } catch (error) {
    console.error('Error deleting OTPs:', error);
  }
});
module.exports = connectToDB;
