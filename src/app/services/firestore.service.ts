import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestoreService: AngularFirestore) { }

  saveInfoGoogle(info: any){
    return this.firestoreService.collection('users').add(info);
  }

}
