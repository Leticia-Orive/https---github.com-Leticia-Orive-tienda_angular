import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = []; // Lista de productos

  constructor() {}

  ngOnInit(): void {
    // Simulación: Obtener la lista de productos desde tu servicio o backend
    this.productos = [
      {
        id: '1',
        nombre: 'Producto 1',
        precio: 10,
        descripcion: 'Descripción del producto 1',
        imagen: '',
        cantidad: 10,
      },
      {
        id: '2',
        nombre: 'Producto 2',
        precio: 20,
        descripcion: 'Descripción del producto 2',
        imagen: '',
        cantidad: 15,
      },
      // Agrega más productos según necesites
    ];
  }

  verDetalles(producto: Producto): void {
    // Lógica para ver los detalles del producto
    console.log(`Viendo detalles del producto: ${producto.nombre}`);
  }

  editarProducto(producto: Producto): void {
    // Lógica para editar el producto
    console.log(`Editando producto: ${producto.nombre}`);
  }

  borrarProducto(producto: Producto): void {
    // Lógica para borrar el producto
    console.log(`Borrando producto: ${producto.nombre}`);
  }

  agregarAlCarrito(producto: Producto): void {
    // Lógica para agregar el producto al carrito
    console.log(`Agregando al carrito: ${producto.nombre}`);
  }
}
