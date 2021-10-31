import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: '',
    password: ''
  }

  constructor(private servicesAuth: AuthService) { }

  ngOnInit(): void {
  }

  loginWithGoogle(){
    const { email, password } = this.usuario;
    this.servicesAuth.loginWithGoogle(email,password).then((userCredential) => {
      console.log('google');
      console.log(userCredential);
      // console.log(userCredential.additionalUserInfo.profile.given_name);
      
    
    }).catch((error) => {
      const errorCode = error.code;}
    );
    
  }

}
