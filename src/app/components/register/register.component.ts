import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
// import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;

  user = {
    name: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService,
    // private firestoreService: FirestoreService,
    private router: Router) { }

  ngOnInit(): void {
  }

  registerWithEmail() {
    console.log(this.user);
    this.loading = true;
    const { name, lastName, email, password } = this.user;
    if (email === '' || password === '' || name === '' || lastName === '') {
      console.log('debe llenar todo los campos');
    } else {
      // Registrar correo para Iniciar Sesión con Correo
      this.authService.registerWithEmail(email, password).then((userCredential: any) => {
        const newUser = userCredential.additionalUserInfo.isNewUser;
        if (newUser) {
          console.log('se registro ', userCredential);
          userCredential.user.updateProfile({
            displayName: name + ' ' + lastName,
            photoURL: "https://firebasestorage.googleapis.com/v0/b/lab-notes-fdc81.appspot.com/o/profile.png?alt=media&token=0775603e-664c-4e7c-b338-b3f4b8f06633"
          }).then((d: any) => {
            this.router.navigate(['home']);
          });


        } else {
          console.log('usuario ya existe');
          this.loading = false;
        }
      }).catch((error) => {
        const errorCode = error.code;
        this.loading = false;
      });
    }
  }

}
