import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService,
              private firestoreService: FirestoreService,
              private auth: AngularFireAuth,
              private router:Router ) { }

  ngOnInit(): void {  

    
    
     
  }

  loginWithEmail(){
    const {email, password} = this.user;
    this.authService.loginWithEmail(email, password).then(e => {
      this.router.navigate(['home']);
    }).catch()
  }

  loginWithGoogle(){
    this.authService.loginWithGoogle().then((userCredential:any) => {
      this.router.navigate(['home']);
    }).catch((error) => {
      const errorCode = error.code;
    });
  }

}
