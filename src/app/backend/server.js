const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const stripe = require("stripe")("TU_CLAVE_SECRETA_DE_API_STRIPE");

const app = express();

// Configuración de Express y body-parser
app.use(bodyParser.json());

const config = {
  user: "root", // Cambia con tus propios datos
  password: "",
  server: "localhost",
  database: "tienda",
};

sql
  .connect(config)
  .then(() => console.log("Conexión exitosa a SQL Server"))
  .catch((err) => console.error("Error al conectar a SQL Server", err));

// Endpoints para la gestión de usuarios
app.post("/registro", async (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  const hashedPassword = await bcrypt.hash(contraseña, 10);

  // Guarda el usuario en la base de datos
  // ...

  res.status(201).json({ mensaje: "Usuario registrado exitosamente" });
});

app.post("/login", async (req, res) => {
  const { correo, contraseña } = req.body;

  // Verifica las credenciales y genera un token JWT
  // ...

  res.status(200).json({ token });
});

// Endpoints para la gestión de productos
app.post("/productos", (req, res) => {
  const { nombre, precio, descripcion } = req.body;

  // Guarda el producto en la base de datos
  // ...

  res.status(201).json({ mensaje: "Producto creado exitosamente" });
});

app.get("/productos", (req, res) => {
  // Obtén la lista de productos de la base de datos
  // ...

  res.status(200).json(productos);
});

app.put("/productos/:id", (req, res) => {
  const { nombre, precio, descripcion } = req.body;
  const productoId = req.params.id;

  // Actualiza el producto en la base de datos
  // ...

  res.status(200).json({ mensaje: "Producto actualizado exitosamente" });
});

// Endpoint para el pago
app.post("/pagar", async (req, res) => {
  const { token, monto } = req.body;

  try {
    const charge = await stripe.charges.create({
      amount: monto,
      currency: "usd",
      source: token,
    });

    // Aquí podrías actualizar la base de datos con la transacción realizada

    res.status(200).json({ mensaje: "Pago exitoso" });
  } catch (error) {
    console.error("Error al procesar el pago:", error);
    res.status(500).json({ mensaje: "Error al procesar el pago" });
  }
});

// Endpoint para confirmar la compra
app.post("/confirmar-compra", (req, res) => {
  const { infoEnvioPago, productosEnCarrito } = req.body;

  // Aquí puedes implementar la lógica para generar una transacción,
  // actualizar el inventario, generar un recibo, etc.

  res.status(200).json({ mensaje: "Compra confirmada exitosamente" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
