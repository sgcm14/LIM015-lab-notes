import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user = {
    name: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService,
              private firestoreService: FirestoreService) { }

  ngOnInit(): void {
  }

  registerWithEmail(){
    console.log(this.user);
    const {name, lastName, email, password} = this.user;
    if (email === '' || password === '' || name === '' || lastName === '') {
      console.log('debe llenar todo los campos');
    } else {
      // Registrar correo para Iniciar Sesión con Correo
      this.authService.registerWithEmail(email, password).then((userCredential: any) =>{
        console.log('se registro ', userCredential);
        const newUser = userCredential.additionalUserInfo.isNewUser;
        if (newUser) {
          const idUser = userCredential.user.uid;
          const infoUser = {
            uid: idUser,
            name: name,
            lastName: lastName,
            email: email,
            fullNameUser: name +' '+ lastName,
            photo:'https://firebasestorage.googleapis.com/v0/b/lab-notes-fdc81.appspot.com/o/profile.png?alt=media&token=0775603e-664c-4e7c-b338-b3f4b8f06633',
          };
          // guardo la info de la cuenta de correo
          this.firestoreService.saveInfoEmail(infoUser);
          console.log('se guardo ', infoUser);
        }
          
          
      }).catch((error) => {
        const errorCode = error.code;
      });
    }
    // this.authService.registerWithEmail(email, password).then(res =>{
    //   console.log('se registro ', res);
    // })
  }

}
