import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarritoService, Producto } from '../services/carrito.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  categoriaSeleccionada: string = 'todas';
  categorias: string[] = ['Ropa', 'Zapatos', 'Accesorios'];
  productos: any[] = [];
  productosFiltrados: any[] = [];
  formularioProducto!: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private carritoService: CarritoService
  ) {}
  ngOnInit(): void {
    this.obtenerProductos(); // Llamada a la función para obtener los productos
    this.inicializarFormulario(); // Llamada a la función para inicializar el formulario
  }
  obtenerProductos() {
    // Realiza una solicitud GET al backend para obtener la lista de productos
    this.http.get<any[]>('URL_DEL_BACKEND/productos').subscribe((data) => {
      this.productos = data; // Asigna los datos obtenidos al array de productos
    });
  }
  inicializarFormulario() {
    // Crea el formulario reactivo con los campos necesarios
    this.formularioProducto = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: [null, Validators.required], // Aquí almacenaremos la imagen
    });
  }
  cargarImagen(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const archivoSeleccionado = (event.target as HTMLInputElement)?.files?.[0];
    if (archivoSeleccionado) {
      this.formularioProducto.patchValue({ imagen: archivoSeleccionado });
    }
  }
  guardarProducto() {
    const formData = new FormData();
    formData.append('titulo', this.formularioProducto.value.titulo);
    formData.append('descripcion', this.formularioProducto.value.descripcion);
    formData.append('imagen', this.formularioProducto.value.imagen);

    this.http.post('URL_DEL_BACKEND/productos', formData).subscribe(() => {
      this.obtenerProductos(); // Actualiza la lista de productos después de guardar
      this.formularioProducto.reset(); // Limpia el formulario
    });
  }
  aplicarFiltros() {
    if (this.categoriaSeleccionada === 'todas') {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(
        (producto) => producto.categoria === this.categoriaSeleccionada
      );
    }
  }
  agregarProducto(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
  }
  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
  }
  // Agrega más objetos de productos aquí
}
