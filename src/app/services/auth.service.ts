import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

// import { FirestoreService } from './firestore.service';
// import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { Subject } from 'rxjs';

import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isAuth = new Subject<boolean>();

  constructor(private auth: AngularFireAuth,
    private router: Router
    // private firestoreService:FirestoreService
  ) { }

  async registerWithEmail(email: string, password: string) {
    try {
      return await this.auth.createUserWithEmailAndPassword(email, password)
    } catch (err) {
      console.log("error register email", err);
      return null;
    }
  }

  async loginWithEmail(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error login email", err);
      return null;
    }
  }

  async loginWithGoogle() {
    try {
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("error login google ", err);
      return null;
    }
  }

  async logout() {
    try {
      return await this.auth.signOut().then(() => {
      });
    } catch (err) {
      console.log("error logout ", err);
      return null;
    }
  }

  // si usuario esta autenticado redirige a HOME
  async isLogueado() {
    try {
      return await this.auth.onAuthStateChanged((user) => {
        if (user) {
          this.router.navigate(['home']);
        }
      });
    } catch (err) {
      console.log("error ", err);
      return null;
    }
  }

  // si usuario no esta autenticado redirige a LOGIN
  async checkLogin() {
    try {
      return await this.auth.onAuthStateChanged((user: any) => {
        console.log('user1---->', user.displayName);
        if (!user) {
          //this.router.navigate(['login']);
        }
      });
    } catch (err) {
      console.log("error ", err);
      return null;
    }
  }

  async dataUser(): Promise<User> {
    return await new Promise((resolve, reject) => {
      let dataUser: User = new User();
      this.auth.onAuthStateChanged((userFire: any) => {

        if (userFire) {
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

}
