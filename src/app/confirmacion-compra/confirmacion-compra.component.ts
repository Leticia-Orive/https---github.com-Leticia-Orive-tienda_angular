import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmacion-compra',
  templateUrl: './confirmacion-compra.component.html',
  styleUrls: ['./confirmacion-compra.component.css'],
})
export class ConfirmacionCompraComponent implements OnInit {
  detallesCompra: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.detallesCompra = JSON.parse(params['detallesCompra']);
    });
  }
}
