import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios.component';

@NgModule({
  declarations: [ListaUsuariosComponent],
  imports: [
    CommonModule,
    RouterModule, // Asegúrate de tener RouterModule aquí
  ],
  exports: [ListaUsuariosComponent], // Exporta el componente si es necesario
})
export class ListaUsuariosModule {}
