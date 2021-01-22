import { Injectable } from '@angular/core';
import { AddGrupoForm } from '../interfaces/addGrupo.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';



const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http: HttpClient) { }



  crearGrupo = (formData: AddGrupoForm) => {
    return this.http.post(`${base_url}/grupo`, formData);
  }

  cargarGrupo = () => {
    const url = `${base_url}/grupo`;
    return this.http.get<any>(url);

  }

}
