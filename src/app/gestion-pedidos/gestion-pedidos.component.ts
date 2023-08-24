import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-pedidos',
  templateUrl: './gestion-pedidos.component.html',
  styleUrls: ['./gestion-pedidos.component.css'],
})
export class GestionPedidosComponent implements OnInit {
  pedidos: any[] = []; // Define the 'pedidos' property

  constructor() {}

  ngOnInit(): void {
    // Initialize the 'pedidos' property with data from your backend or other source
    this.pedidos = [
      { id: 1, cliente: 'Cliente 1', total: 100 },
      { id: 2, cliente: 'Cliente 2', total: 150 },
      // ... other orders
    ];
  }
  // Define the 'verDetalles' method
  verDetalles(pedido: any) {
    // Logic to display details of the selected order
    console.log('Detalles del pedido:', pedido);
  }
  // Define the 'editarPedido' method
  editarPedido(pedido: any) {
    // Logic to edit the selected order
    console.log('Editar pedido:', pedido);
  }
  // Define the 'eliminarPedido' method
  eliminarPedido(pedido: any) {
    // Logic to delete the selected order
    console.log('Eliminar pedido:', pedido);
  }
  // Define the 'crearNuevoPedido' method
  crearNuevoPedido() {
    // Logic to create a new order
    console.log('Crear nuevo pedido');
  }
}
