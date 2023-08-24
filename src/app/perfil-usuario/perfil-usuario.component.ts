import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  usuario: any; // Debes definir una interfaz o tipo para el usuario

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id'); // Obtén el ID del usuario desde la ruta
      // Aquí deberías cargar los datos del usuario desde tu fuente de datos (por ejemplo, una API)
      // y asignarlos a la propiedad 'usuario'
    });
  }
}
