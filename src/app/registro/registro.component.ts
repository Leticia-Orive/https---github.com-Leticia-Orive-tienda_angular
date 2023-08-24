import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup; // Asegúrate de que esté inicializado

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    // Puedes realizar inicializaciones adicionales aquí si es necesario
  }

  registrarse() {
    if (this.registroForm.valid) {
      // Realiza el registro
    }
  }
}
