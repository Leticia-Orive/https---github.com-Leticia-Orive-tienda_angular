import { Component, OnInit } from '@angular/core';
import { CarritoService, Producto } from '../services/carrito.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css'],
})
export class CarritoComprasComponent implements OnInit {
  productosEnCarrito: Producto[] = []; // Utiliza la interfaz Producto
  compraConfirmada: boolean = false;
  formularioEnvioPago: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    tarjeta: ['', Validators.required],
    // Agrega más campos según tus necesidades
  });
  constructor(
    private carritoService: CarritoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.productosEnCarrito = carritoService.getProductosEnCarrito();
  }

  ngOnInit() {
    // Inicialización del formulario
    this.formularioEnvioPago = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      tarjeta: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });

    this.productosEnCarrito = this.carritoService.getProductosEnCarrito();
    this.calcularTotal();
  }

  agregarProducto(producto: Producto) {
    this.carritoService.agregarProducto(producto); // Usar la función agregarProducto del servicio
  }

  removerProducto(index: number) {
    // Lógica para remover un producto del carrito
  }

  ajustarCantidad(index: number, cantidad: number) {
    // Lógica para ajustar la cantidad de un producto en el carrito
  }

  realizarCompra() {
    // Lógica para el proceso de compra
  }
  eliminarProducto(producto: any) {
    this.carritoService.eliminarDelCarrito(producto);
  }
  editarCarrito(producto: Producto) {
    this.router.navigate(['/edicion-carrito', , producto.id]); // Cambia la ruta según tus necesidades
  }
  calcularTotal() {
    return this.carritoService.calcularTotal();
  }

  eliminarDelCarrito(producto: Producto) {
    // Utiliza la interfaz Producto
    this.carritoService.eliminarDelCarrito(producto);
    this.productosEnCarrito = this.carritoService.getProductosEnCarrito();
  }

  procederAlPago() {
    if (this.formularioEnvioPago.valid) {
      // Obtener los valores del formulario
      const valoresFormulario = this.formularioEnvioPago.value;
      // Crear un objeto con los detalles de la compra
      const detallesCompra = {
        productos: this.productosEnCarrito,
        total: this.calcularTotal(),
        envio: {
          nombre: valoresFormulario.nombre,
          direccion: valoresFormulario.direccion,
        },
        tarjeta: valoresFormulario.tarjeta,
      };
      // Redirigir a la pantalla de confirmación de compra y pasar los detalles de la compra
      this.router.navigate(['/confirmacion-compra'], {
        queryParams: { detallesCompra: JSON.stringify(detallesCompra) },
      });
      // Actualizar el inventario en el backend antes de finalizar la compra
      this.carritoService
        .actualizarInventario(this.productosEnCarrito)
        .subscribe(
          (response) => {
            // Una vez que se actualiza el inventario, proceder con la finalización de la compra
            this.carritoService.finalizarCompra(detallesCompra).subscribe(
              (response) => {
                // Manejar la respuesta del backend, por ejemplo, mostrar un recibo o mensaje de confirmación
                this.compraConfirmada = true;
              },
              (error) => {
                // Manejar errores, por ejemplo, mostrar un mensaje de error
              }
            );
          },
          (error) => {
            // Manejar errores en la actualización del inventario
          }
        );
    } else {
      // El formulario no es válido, muestra mensajes de error o realiza las acciones necesarias
    }
  }
}
