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

  eliminarGrupo = ( grupos) => {
    const url = `${base_url}/grupo/${ grupos.ID_GRUPO }`;
    return this.http.delete(url);
  }

  actualizarGrupo = ({ID_GRUPO, GRUPO, NOMBRE_CARRERA, NUMERO_SEMESTRE}) => {
    const url = `${base_url}/grupo/${ ID_GRUPO }`;
    return this.http.put(url, {ID_GRUPO, GRUPO, NOMBRE_CARRERA, NUMERO_SEMESTRE} );

  }

}
