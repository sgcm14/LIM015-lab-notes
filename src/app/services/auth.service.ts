import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from  'firebase/compat/app';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private authService: AngularFireAuth,
              private router:Router) { }

  async loginWithGoogle(){
    try{
      return await this.authService.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err){
      console.log("error ", err);
      return null;
    }
  }

  async logout(){
    try{
      return await this.authService.signOut().then(() => {
        this.router.navigate(['login']);
      });
    } catch (err){
      console.log("error ", err);
      return null;
    }
  }

  // si usuario esta autenticado redirige a HOME
  async isLogueado(){
    try{
      return await this.authService.onAuthStateChanged((user)=> {
        if(user){
          console.log(user);
          this.router.navigate(['home']);
        }
      });
    } catch(err){
      console.log("error ", err);
      return null;
    }
  }
  
// si usuario no esta autenticado redirige a LOGIN
  async checkLogin(){
    try{
      return await this.authService.onAuthStateChanged((user)=> {
        if(!user){
          console.log(user);
          this.router.navigate(['login']);
        }
      });
    } catch(err){
      console.log("error ", err);
      return null;
    }
  }

}
