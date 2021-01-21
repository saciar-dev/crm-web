import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.logout();
  }

  isLogueado(){
    return this.authService.loggedIn();
  }

}
