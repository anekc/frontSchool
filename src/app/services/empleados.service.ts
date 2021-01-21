import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AddEmpleadoForm } from '../interfaces/addempleado.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  crearEmpleado = (formData: AddEmpleadoForm) => {
    return this.http.post(`${base_url}/empleados`, formData);
  }
}


