const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Conectado ala DB.");
  } catch (error) {
    console.log("Error al conectar: ", error.message);
  }
};

module.exports = connectDB;
