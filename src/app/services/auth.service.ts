import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router';
import { getAuth } from "firebase/auth";
import firebase from  'firebase/compat/app';
import { Subject } from 'rxjs';
import { User } from '../model/user';
// import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isAuth = new Subject<boolean>();

  constructor(private auth: AngularFireAuth,
              private router:Router 
              // private firestoreService:FirestoreService
              ) {}

async registerWithEmail(email: string, password: string){
    try{
      return await this.auth.createUserWithEmailAndPassword(email, password)
    } catch (err){
      console.log("error register email", err);
      return null;
    }
  }

  async loginWithEmail(email: string, password: string){
    try{
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (err){
      console.log("error login email", err);
      return null;
    }
  }
              
  async loginWithGoogle(){
    try{
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err){
      console.log("error login google ", err);
      return null;
    }
  }

  async logout(){
    try{
      return await this.auth.signOut().then(() => {
      });
    } catch (err){
      console.log("error logout ", err);
      return null;
    }
  }

  // si usuario esta autenticado redirige a HOME
  async isLogueado(){
    try{
      return await this.auth.onAuthStateChanged((user)=> {
        if(user){
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
      return await this.auth.onAuthStateChanged((user:any)=> {
        console.log('user1---->',user.displayName);
        if(!user){
          //this.router.navigate(['login']);
        }
      });
    } catch(err){
      console.log("error ", err);
      return null;
    }
  }

  async dataUser(): Promise<User> {
    return await new Promise((resolve, reject) => {
      let dataUser: User = new User();
      this.auth.onAuthStateChanged((userFire: any)=> {
        
        if(userFire){          
            dataUser.uid = userFire.uid;
            dataUser.displayName = (userFire.displayName !== null) ? userFire.displayName : 'x';
            dataUser.email = (userFire.email !== null) ? userFire.email : 'x';
            dataUser.photoURL = (userFire.photoURL !== null) ? userFire.photoURL : 'x'; 
            resolve(dataUser);         
        }
        
      });
    })
    
    
  

  }

  test() {
    console.log('testtttttttttttt');
    
  }

  // async dataUser(){
  //   try{
  //     return await this.auth.onAuthStateChanged((user)=> {
  //       if(user){
  //         console.log(user);
  //         const idUser = user.uid;
          // recorre coleccion USER de firestore donde idUser(usuario logueado) = uid(usuario en USER)
          // this.firestoreService.getUsers().where('uid', '==', idUser).get()
          //   .then((data: any) => {
          //     data.forEach((hijo: any) => {
          //       // console.log(hijo.data());
          //       const datosUser = hijo.data();
          //       console.log(datosUser.fullName);
          //       // document.querySelector('#photoProfile').innerHTML = `<img src= '${datosUser.photo}' />`;
          //     });
          //   });
  //       }
  //     });
  //   } catch(err){
  //     console.log("error ", err);
  //     return null;
  //   }
  // }

}
