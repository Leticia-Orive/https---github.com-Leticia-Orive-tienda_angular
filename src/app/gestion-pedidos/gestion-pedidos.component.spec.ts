import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPedidosComponent } from './gestion-pedidos.component';

describe('GestionPedidosComponent', () => {
  let component: GestionPedidosComponent;
  let fixture: ComponentFixture<GestionPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPedidosComponent]
    });
    fixture = TestBed.createComponent(GestionPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
