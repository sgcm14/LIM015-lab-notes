import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from  'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private servicesAuth: AngularFireAuth) { }

  async loginWithGoogle(email: string, password: string){
    try{
      return await this.servicesAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err){
      console.log("error ", err);
      return null;
    }
  }
}
