import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.css'],
})
export class DetallesProductoComponent implements OnInit {
  producto: any; // Debes definir una interfaz o tipo para el producto

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id'); // Obtén el ID del producto desde la ruta
      // Aquí deberías cargar los datos del producto desde tu fuente de datos (por ejemplo, una API)
      // y asignarlos a la propiedad 'producto'
    });
  }
}
