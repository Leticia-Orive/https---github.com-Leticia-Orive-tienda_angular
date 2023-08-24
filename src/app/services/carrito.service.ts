import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  productosEnCarrito: Producto[] = [];
  private apiUrl = 'URL_DEL_BACKEND'; // Reemplaza con la URL de tu backend
  constructor(private http: HttpClient) {}

  agregarAlCarrito(producto: Producto) {
    const productoExistente = this.productosEnCarrito.find(
      (p) => p.id === producto.id
    );
    if (productoExistente) {
      productoExistente.cantidad += 1; // Si ya existe, aumenta la cantidad
    } else {
      producto.cantidad = 1; // Si es nuevo, establece la cantidad en 1
      this.productosEnCarrito.push(producto);
    }
  }

  eliminarDelCarrito(producto: Producto) {
    const index = this.productosEnCarrito.findIndex(
      (p) => p.id === producto.id
    );
    if (index !== -1) {
      this.productosEnCarrito.splice(index, 1);
    }
  }

  getProductosEnCarrito() {
    return this.productosEnCarrito;
  }
  calcularTotal() {
    return this.productosEnCarrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  }
  agregarProducto(producto: Producto) {
    this.productosEnCarrito.push(producto);
  }
  obtenerProductoPorId(id: string): Producto | null {
    // Buscar el producto en productosEnCarrito por su id y devolverlo
    const producto = this.productosEnCarrito.find((p) => p.id === id);
    return producto || null;
  }

  actualizarProductoEnCarrito(producto: Producto): void {
    // Encontrar el índice del producto en productosEnCarrito y reemplazarlo con el producto actualizado
    const index = this.productosEnCarrito.findIndex(
      (p) => p.id === producto.id
    );
    if (index !== -1) {
      this.productosEnCarrito[index] = producto;
    }
  }
  finalizarCompra(detallesCompra: any): Observable<any> {
    const url = `${this.apiUrl}/finalizar-compra`; // Ajusta la ruta según tu backend
    return this.http.post(url, detallesCompra);
  }
  actualizarInventario(productosVendidos: any[]): Observable<any> {
    const url = `${this.apiUrl}/actualizar-inventario`; // Ajusta la ruta según tu backend
    return this.http.post(url, productosVendidos);
  }
}
export { Producto };
