import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user:any){
    return this.http.post<any>(this.url + '/auth/signin',user);
  }

  //metodo para comprobar si el usuario esta logueado
  loggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    else return false;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}


