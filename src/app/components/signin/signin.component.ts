import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

user = {
  email:'',
  password:''
}

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signIn(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);        
        this.router.navigate(['/entities']);
      },
      err => {
        console.log(err);
        if(err.error.status === 400)
          Swal.fire({
            icon: 'error',
            title: err.error.messagge,
            text: 'Si su Email es correcto comuniquese con soporte tecnico',
            confirmButtonColor: '#ff0000'
          });
        else if(err.error.status === 401)
          Swal.fire({
            icon: 'error',
            title: err.error.messagge,
            text: 'Si su Email es correcto comuniquese con soporte tecnico',
            confirmButtonColor: '#ff0000'
          });
      }
      )
  }

}
