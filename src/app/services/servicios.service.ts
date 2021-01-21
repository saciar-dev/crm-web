import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Servicio } from '../model/servicio-model'

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url = environment.API_URL;

  constructor(private http: HttpClient) { }

  getServicioPorId(codigo:string): Observable<Servicio>{
    return this.http.get(this.url+'/servicios/'+codigo);
  }

  getServicioPorFamilia(codigo:string): Observable<Servicio>{
    return this.http.get(this.url+'/servicios/familia/'+codigo);
  }

  updateServicio(id: string | number, model: Servicio): Observable<Servicio>{
    return this.http.put(`${this.url}/servicios/${id}`, model);
  }

}
