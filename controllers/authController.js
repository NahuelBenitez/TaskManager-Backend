const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Iniciar sesión y generar JWT
const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Buscar el usuario
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });
  
      // Log para verificar si estamos encontrando el usuario
      console.log("Usuario encontrado:", user);
  
      // Comparar la contraseña
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Contraseña comparada:", isMatch);
  
      if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });
  
      // Generar el token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7h' });
      res.json({ token });
  
    } catch (error) {
      console.error("Error al autenticar:", error);
      res.status(500).json({ message: 'Error al autenticar', error });
    }
  };
  

const register = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe' });
      }
  
      const user = new User({ username, password });
      await user.save();
  
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al registrar usuario', error });
    }
  };
  
module.exports = { login , register};
