import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { superFamilia } from '../model/superfamilia-model'

@Injectable({
  providedIn: 'root'
})
export class SuperFamiliasService {

  private url = environment.API_URL;

  constructor(private http: HttpClient) { }

  getSuperFamilias(){
    return this.http.get(this.url+'/superFamilias');
  }

  getSuperFamiliaPorId(codigo:string): Observable<superFamilia>{
    return this.http.get(this.url+'/superFamilias/'+codigo);
  }
}
