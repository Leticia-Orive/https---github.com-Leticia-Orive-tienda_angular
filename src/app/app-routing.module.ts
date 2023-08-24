import { RouterModule, Routes } from '@angular/router';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { NgModule } from '@angular/core';
import { GestionPedidosComponent } from './gestion-pedidos/gestion-pedidos.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  // Otras rutas
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: DetallesProductoComponent },
  { path: 'usuarios/:id', component: PerfilUsuarioComponent },
  { path: 'carrito', component: CarritoComprasComponent },
  { path: 'gestion-pedidos', component: GestionPedidosComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
