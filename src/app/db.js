const mysql = require("mysql2");

// Configura los parámetros de conexión
const connection = mysql.createConnection({
  host: "127.0.0.1", // Cambia a la dirección de tu servidor MySQL
  user: "root", // Cambia con tus credenciales de usuario
  password: "", // Cambia con tu contraseña
  database: "tienda", // Cambia con el nombre de tu base de datos
});

// Conéctate a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err.message);
    return;
  }
  console.log("Conexión exitosa a la base de datos");
});

module.exports = connection;
