import { Component } from '@angular/core';
// import { Firestore, doc, onSnapshot, DocumentReference, docSnapshots } from '@angular/fire/firestore';

// CON LA VERSION ANTERIOR
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-notes';
  
  /*
  doc: DocumentReference;
  constructor(firestore: Firestore) {
    this.doc = doc(firestore, 'usuarios/ZvmuzCvmApZTBT0RR1vs');
    console.log(this.doc);
        docSnapshots(this.doc).subscribe(
          data => {
            console.log(data);
            
          }
        );
  }
  */
  
  // CON LA VERSION ANTERIOR
  // items: Observable<any[]>;
  // constructor(firestore: AngularFirestore) {
  //   this.items = firestore.collection('usuarios').valueChanges();
  //   // console.log(this.items);
  // }

}
