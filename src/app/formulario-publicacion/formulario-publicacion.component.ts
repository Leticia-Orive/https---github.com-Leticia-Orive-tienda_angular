import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-publicacion',
  templateUrl: './formulario-publicacion.component.html',
  styleUrls: ['./formulario-publicacion.component.css'],
})
export class FormularioPublicacionComponent {
  publicarProducto() {
    // Lógica para enviar el formulario y publicar el producto
  }

  cargarImagen(event: any) {
    // Lógica para cargar y mostrar la imagen seleccionada
  }
}
