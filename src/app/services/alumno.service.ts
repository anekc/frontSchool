import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddAlumnoForm } from '../interfaces/addalumno.interface';
import { environment } from '../../environments/environment';
import { historialAlumnoForm } from '../interfaces/historialAlumno.interface';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})



export class AlumnoService {


  constructor(private http: HttpClient) { }

  crearAlumno = (formData: AddAlumnoForm) => {
    return this.http.post(`${base_url}/alumnos`, formData);
  }

  cargarAlumnos = () => {
    const url = `${base_url}/alumnos`;
    return this.http.get<any>(url);

  }

  historialAlumno = (formData: historialAlumnoForm) => {
    const url = `${base_url}/historial`;
    return this.http.post<any>(url, formData);
  }

  eliminarAlumno = ( alumnos) => {
    const url = `${base_url}/alumnos/${ alumnos.ID_ALUMNO }`;
    return this.http.delete(url);
  }

  actualizarhospital = (alumnos) => {
    const url = `${base_url}/alumnos/${ alumnos.ID_ALUMNO }`;
    return this.http.put(url, alumnos);
  }
}

