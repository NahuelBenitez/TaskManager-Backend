const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);  // Eliminé las opciones obsoletas
      console.log(`Conectado a MongoDB: ${conn.connection.host}`);
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error.message);
      process.exit(1); // Termina el proceso en caso de error
    }
  };
  
module.exports = connectDB;
