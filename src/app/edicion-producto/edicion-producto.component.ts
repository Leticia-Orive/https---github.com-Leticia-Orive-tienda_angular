import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService, Producto } from '../services/carrito.service';

@Component({
  selector: 'app-edicion-producto',
  templateUrl: './edicion-producto.component.html',
  styleUrls: ['./edicion-producto.component.css'],
})
export class EdicionProductoComponent implements OnInit {
  producto: Producto | null = null;

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productoId = this.route.snapshot.paramMap.get('id');
    if (productoId) {
      // Obtener detalles del producto usando el servicio
      this.producto = this.carritoService.obtenerProductoPorId(productoId);
    }
  }

  actualizarProducto(producto: Producto) {
    // Lógica para actualizar el producto en el carrito
    this.carritoService.actualizarProductoEnCarrito(producto);
    // Redirigir de vuelta al carrito o a la página de resumen de la compra
    this.router.navigate(['/carrito']);
  }
}
