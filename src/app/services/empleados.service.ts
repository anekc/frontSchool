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


  eliminarEmpleado = ( empleados) => {
    const url = `${base_url}/empleados/${ empleados.ID_EMPLEADO }`;
    return this.http.delete(url);
  }

  actualizarEmpleado = ({ID_EMPLEADO, NOMBRE, APELLIDO_PAT, APELLIDO_MAT, EDAD, DEPARTAMENTO, CORREO_ELECTRONICO}) => {
    const url = `${base_url}/empleados/${ ID_EMPLEADO }`;
    return this.http.put(url, {ID_EMPLEADO, NOMBRE, APELLIDO_PAT, APELLIDO_MAT, EDAD, DEPARTAMENTO, CORREO_ELECTRONICO} );

  }
}


