import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { AddAProfesorForm } from '../interfaces/addprofesor.interface';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})


export class ProfesoresService {

  constructor(private http: HttpClient) { }

  crearProfesor = (formData: AddAProfesorForm) => {
    return this.http.post(`${base_url}/profesores`, formData);
  }

  cargarProfesor = () => {
    const url = `${base_url}/profesores`;
    return this.http.get<any>(url);

  }

  TotalProfesores = () => {
    const url = `${base_url}/profesores`;
    return this.http.get<any>(url).pipe(map( resp => resp.results.rows.length));

  }

}
