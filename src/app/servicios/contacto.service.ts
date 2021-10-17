import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

   url='http://127.0.0.1:3000/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  //obtener todos
  recuperarTodos() {
    return this.http.get(`${this.url}getAll`);
  }

  //insertar
  alta(contacto:any):Observable<any> {
    return this.http.post(`${this.url}add_contact`, contacto);    
  }
 
  //eliminar
  baja(codigo:number) {
    return this.http.delete(`${this.url}delete/${codigo}`);
  }

   //editar
  modificacion(contacto:any, id:number) {
    return this.http.put(`${this.url}/update/`+id, contacto);    
  } 
}
