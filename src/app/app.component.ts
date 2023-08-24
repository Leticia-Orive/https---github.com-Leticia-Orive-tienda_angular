import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productos: Producto[] = [
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
      cantidad: 200,
    },
    // Agrega más productos
  ];
  productosFiltrados: Producto[] = [];
  title = 'prueba';

  carouselImages = [
    { url: 'ruta-de-imagen-1.jpg' },
    { url: 'ruta-de-imagen-2.jpg' },
    // Agrega más imágenes
  ];

  filtrarPorCategoria(categoria: string) {
    // Filtra los productos por la categoría seleccionada
    this.productosFiltrados = this.productos.filter(
      (producto) => producto.categoria === categoria
    );
  }
}
