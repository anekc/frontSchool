import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AddMateriaForm } from '../interfaces/addmateria.interface';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private http: HttpClient) { }


  crearMateria = (formData: AddMateriaForm) => {
    return this.http.post(`${base_url}/materias`, formData);
  }


  getMaterias = () => {
    const url = `${base_url}/materias`;
    return this.http.get<any>(url);
  }

  getEmpleados = () => {
    const url = `${base_url}/empleados`;
    return this.http.get<any>(url);
  }
}
