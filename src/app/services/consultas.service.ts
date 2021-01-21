import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }


  materiaReprobada  = () => {
    const url = `${base_url}/consultas/materiareprobada`;
    return this.http.get<any>(url);

  }

  mejorPromedio  = () => {
    const url = `${base_url}/consultas/mejorpromedio`;
    return this.http.get<any>(url);

  }
}
