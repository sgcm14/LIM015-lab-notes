import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  saveInfoGoogle(info: any){
    return this.firestore.collection('users').add(info);
  }

  saveInfoEmail(info: any){
    return this.firestore.collection('users').add(info);
  }

  // Trae la colección de usuarios
  getUsers(): Observable<any> {
    return this.firestore.collection('users').snapshotChanges();
  }

}
