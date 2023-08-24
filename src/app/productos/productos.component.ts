import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = []; // Lista de productos
  productosFiltrados: Producto[] = [];
  categoriaSeleccionada: string | null = null;
  constructor() {}

  ngOnInit(): void {
    // Simulación: Obtener la lista de productos desde tu servicio o backend
    this.productos = [
      {
        id: '',
        nombre: 'Producto 1',
        descripcion: 'Descripción del producto 1',
        precio: 100,
        categoria: 'Electrónica',
        imagen: '',
        cantidad: 100,
      },
      {
        id: '',
        nombre: 'Producto 2',
        descripcion: 'Descripción del producto 2',
        precio: 200,
        categoria: 'Ropa',
        imagen: '',
        cantidad: 100,
      },
      // Agrega más productos según necesites
    ];
    // Por ahora, mostraremos todos los productos al inicio
    this.productosFiltrados = this.productos;
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
  filtrarPorCategoria(categoria: string) {
    // Actualiza la categoría seleccionada y aplica el filtro
    this.categoriaSeleccionada = categoria;
  }
  mostrarTodosLosProductos() {
    // Muestra todos los productos al eliminar el filtro
    this.categoriaSeleccionada = null;
  }
}
