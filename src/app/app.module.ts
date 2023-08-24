import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { RouterModule } from '@angular/router';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ListaUsuariosModule } from './lista-usuarios/lista-usuarios.module';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FormularioPublicacionComponent } from './formulario-publicacion/formulario-publicacion.component';
import { FormularioCompraComponent } from './formulario-compra/formulario-compra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { EdicionProductoComponent } from './edicion-producto/edicion-producto.component';
import { ConfirmacionCompraComponent } from './confirmacion-compra/confirmacion-compra.component';
import { GestionPedidosComponent } from './gestion-pedidos/gestion-pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    AppComponent,

    ListaProductosComponent,
    DetallesProductoComponent,
    PerfilUsuarioComponent,
    CarritoComprasComponent,
    BarraNavegacionComponent,
    FormularioPublicacionComponent,
    FormularioCompraComponent,
    RegistroComponent,
    EdicionProductoComponent,
    ConfirmacionCompraComponent,
    GestionPedidosComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/productos', pathMatch: 'full' }, // Ruta por defecto
      { path: 'productos', component: ListaProductosComponent },
      { path: 'productos/:id', component: DetallesProductoComponent },
      { path: 'carrito', component: CarritoComprasComponent }, // Ruta para el carrito
    ]), // Configura las rutas aquí
    ListaUsuariosModule, // Agrega el módulo aquí
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
