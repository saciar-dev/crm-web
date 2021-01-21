import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { familia } from '../model/familia-model';

@Injectable({
  providedIn: 'root'
})
export class FamiliasService {

  private url = environment.API_URL;

  constructor(private http: HttpClient) { }

  getFamiliasBySuper(id:string){
    return this.http.get(`${this.url}/familias/superfamilia/${id}`);
  }

  updateFamilia(id: string | number, model: familia): Observable<familia>{
    return this.http.put(`${this.url}/familias/${id}`, model);
  }

  getFamiliaById(id:string): Observable<familia>{
    return this.http.get(`${this.url}/familias/${id}`);    
  }
}
