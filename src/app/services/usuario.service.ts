import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  registrarUsuario(datos: any): Observable<any> {
    const url = 'URL_DEL_BACKEND/registro'; // Reemplaza con la URL de tu backend
    return this.http.post(url, datos);
  }

  iniciarSesion(datos: any): Observable<any> {
    const url = 'URL_DEL_BACKEND/iniciar-sesion'; // Reemplaza con la URL de tu backend
    return this.http.post(url, datos);
  }
}
