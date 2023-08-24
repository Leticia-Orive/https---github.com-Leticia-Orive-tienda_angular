const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

// Importa tu modelo de usuario o realiza las operaciones directamente en la base de datos
// const Usuario = require('../models/usuario.model');
router.post("/registro", async (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  try {
    // Verifica si el correo ya está registrado (puedes hacer esto con tu modelo de usuario)
    // const usuarioExistente = await Usuario.findOne({ correo });

    // if (usuarioExistente) {
    //   return res.status(400).json({ mensaje: 'El correo ya está registrado' });
    // }

    // Hashea la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    // Crea un nuevo usuario (puedes hacer esto con tu modelo de usuario)
    // const nuevoUsuario = new Usuario({
    //   nombre,
    //   correo,
    //   contrasena: hashedPassword
    // });

    // Guarda el usuario en la base de datos
    // await nuevoUsuario.save();

    res.status(201).json({ mensaje: "Registro exitoso" });
  } catch (error) {
    console.error("Error en el registro:", error);
    res.status(500).json({ mensaje: "Error en el registro" });
  }
});
module.exports = router;
