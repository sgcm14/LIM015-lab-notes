import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from '@firebase/app-compat';

@Component({
  selector: 'app-register-with-phone',
  templateUrl: './register-with-phone.component.html',
  styleUrls: ['./register-with-phone.component.css']
})
export class RegisterWithPhoneComponent implements OnInit {

  verify: any;
  reCaptchaVerifier: any;

  user = {
    name: '',
    lastName: '',
    phone: '',
    code: ''
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginWithPhone() {
    console.log(this.user);
    const { name, lastName } = this.user;
    this.verify = localStorage.getItem('verificationId');
    const code = this.user.code;
    let credentials = firebase.auth.PhoneAuthProvider.credential(this.verify, code);
    firebase.auth().signInWithCredential(credentials)
      .then((userCredential: any) => {
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
          this.router.navigate(['home']);
        }
      }).catch((error) => {
        console.log(error.message);
      })
  }

  sendCode() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' })
    firebase.auth().signInWithPhoneNumber(this.user.phone, this.reCaptchaVerifier)
      .then((result) => {
        console.log(result);
        localStorage.setItem('verificationId', result.verificationId)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

}
