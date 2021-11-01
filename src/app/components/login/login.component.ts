import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from '../../services/firestore.service';

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

  constructor(private authService: AuthService,
              private firestoreService: FirestoreService) { }

  ngOnInit(): void {  
    this.authService.isLogueado(); // si usuario esta autenticado redirige a HOME
  }

  loginWithGoogle(){
      this.authService.loginWithGoogle().then((userCredential:any) => {
      const newUser = userCredential.additionalUserInfo.isNewUser;
      if (newUser) {
        const idUser = userCredential.user.uid;
        const nameUser = userCredential.additionalUserInfo.profile.given_name;
        const lastNameUser = userCredential.additionalUserInfo.profile.family_name;
        const fullNameUser = userCredential.additionalUserInfo.profile.name;
        const photoUser = userCredential.additionalUserInfo.profile.picture;
        const emailUser = userCredential.additionalUserInfo.profile.email;
        // asigno values a sus Keys
        const infoUser = {
          uid: idUser,
          name: nameUser,
          lastName: lastNameUser,
          fullName: fullNameUser,
          photo: photoUser,
          email: emailUser
        };
        // guardo la info de la cuenta de google
        this.firestoreService.saveInfoGoogle(infoUser);
      }
    }).catch((error) => {
      const errorCode = error.code;
    });
  }

}
