import connectDB from './db.js';
import User from './models/user.js';

export default async function handler(req, res) {
    
  await connectDB();

  if (req.method === 'POST') {
    try {
      const { user, password } = req.body;

      if (!user || !password) {
        return res.status(400).json({ message: 'Faltan datos' });
      }
      const existingUser = await User.findOne({ user });
      if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe' });
      }
      const newUser = new User({ user, password });
      await newUser.save();

      res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear el usuario' });
    }
  }

  if (req.method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { user, password } = req.body;

      if (!user || !password) {
        return res.status(400).json({ message: 'Faltan datos' });
      }

      const existingUser = await User.findOne({ user });
      if (!existingUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      existingUser.password = password;
      await existingUser.save();

      res.status(200).json({ message: 'Contraseña actualizada exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
  }

  else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
