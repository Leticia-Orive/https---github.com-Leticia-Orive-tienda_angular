
-- Crear la tabla de Usuarios
CREATE TABLE Usuarios (
    ID INT PRIMARY KEY,
    Nombre NVARCHAR(50),
    Correo NVARCHAR(100),
    Contraseña NVARCHAR(100)
);

-- Crear la tabla de Productos
CREATE TABLE Productos (
    ID INT PRIMARY KEY,
    Nombre NVARCHAR(100),
    Precio DECIMAL(10, 2),
    Descripcion NVARCHAR(500)
);

-- Crear la tabla de Pedidos
CREATE TABLE Pedidos (
    ID INT PRIMARY KEY,
    UsuarioID INT,
    FechaPedido DATE,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);

-- Crear la tabla de Detalles de Pedido
CREATE TABLE DetallesPedido (
    ID INT PRIMARY KEY,
    PedidoID INT,
    ProductoID INT,
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    FOREIGN KEY (PedidoID) REFERENCES Pedidos(ID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ID)
);

-- Agregar algunos datos de ejemplo
INSERT INTO Usuarios (ID, Nombre, Correo, Contraseña)
VALUES (1, 'Usuario 1', 'usuario1@example.com', 'contraseña1');

INSERT INTO Productos (ID, Nombre, Precio, Descripcion)
VALUES (1, 'Producto 1', 10.99, 'Descripción del Producto 1');

INSERT INTO Pedidos (ID, UsuarioID, FechaPedido)
VALUES (1, 1, GETDATE());

INSERT INTO DetallesPedido (ID, PedidoID, ProductoID, Cantidad, PrecioUnitario)
VALUES (1, 1, 1, 2, 10.99);
