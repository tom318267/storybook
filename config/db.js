const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`Mongodb Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
