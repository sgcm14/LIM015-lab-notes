import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Note } from '../model/note';


@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  saveInfoUser(info: any){
    return this.firestore.collection('users').add(info);
  }

  // Trae la colección de usuarios
  getUsers(): Observable<any> {
    return this.firestore.collection('users').snapshotChanges();
  }

  getNotes(idUser: string): Observable<any> {
    return this.firestore.collection('notes', ref => ref.where('idUser','==',idUser).orderBy('order','desc')).valueChanges();
  }

  saveNote(note: Note){
    return this.firestore.collection('notes').add(note);
  }

  updateNote(id: string, note:object){
    return this.firestore.collection('notes').doc(id).update(note);
  }

  deleteNote(id: string){
    return this.firestore.collection('notes').doc(id).delete();
  }

}
