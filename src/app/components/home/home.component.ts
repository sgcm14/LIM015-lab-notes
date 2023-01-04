import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
// import { getAuth } from "firebase/auth";

import { User } from 'src/app/model/user';
import { Note } from 'src/app/model/note';


export class MyCustomPaginatorIntl extends MatPaginatorIntl {
  showPlus: boolean = false

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 of ${length}`; }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    const final = Math.ceil(length / pageSize);
    //return `${startIndex + 1} - ${endIndex} de ${length} total`;
    //return `${startIndex + 1} DE ${endIndex}`;
    return `${page + 1} de ${final}`;

  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: MatPaginatorIntl, useValue: new MyCustomPaginatorIntl() }
  ]
})

export class HomeComponent implements OnInit, OnDestroy {

  dataUser: User = new User();
  notes: any[] = [];
  myNotes: Note[] = [];
  actualizado: boolean = false;
  copiado: boolean = false;
  eliminado: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<any>

  myCustomPaginatorIntl: MyCustomPaginatorIntl;


  constructor(
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private auth: AngularFireAuth,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    matPaginatorIntl: MatPaginatorIntl,
  ) { this.myCustomPaginatorIntl = <MyCustomPaginatorIntl>matPaginatorIntl; }

  ngOnInit(): void {
    //this.authService.checkLogin(); // si usuario no esta autenticado redirige a LOGIN
    this.auth.onAuthStateChanged((user: any) => {
      if (!user) {
        this.router.navigate(['login']);
      }
    });

    this.authService.dataUser().then((data: User) => {
      this.dataUser = data;
      console.log("this.dataUser", this.dataUser)
      this.getNotes();
    });
  }

  logout() {
    this.authService.logout()
  }

  getNotes() {
    this.firestoreService.getNotes(this.dataUser.uid).subscribe(data => {
      this.myNotes = data;

      this.dataSource = new MatTableDataSource<any>(this.myNotes);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    });
  }

  getNotesbyUser() {
    return this.notes.reverse().filter((item) => item.idUser == this.dataUser.uid);
  }

  addNote() {
    let note: Note = new Note();
    note.idUser = this.dataUser.uid;
    // if (this.myNotes[0]) console.log('---->', this.myNotes[0]);

    let nro = (this.myNotes.length > 0) ? (this.myNotes[0].order) : 0;
    note.titleNote = "Mi Nota #" + (nro + 1);
    note.order = nro + 1;
    this.firestoreService.saveNote({ ...note }).then(res => {
      // console.log('res-->', res.id);
      note.idNote = res.id;
      this.myNotes.unshift(note);
      this.firestoreService.updateNote(res.id, { idNote: res.id });

    });


  }

  updateNote(note: Note) {
    this.firestoreService.updateNote(note.idNote, { ...note });
    this.actualizado = true;
    setTimeout(() => {
      this.actualizado = false;
    }, 1000);
  }

  deleteNote(note: Note) {
    const index = this.myNotes.indexOf(note);
    if (index !== -1) {
      this.myNotes.splice(index, 1);
      this.firestoreService.deleteNote(note.idNote);
      this.eliminado = true;
      setTimeout(() => {
        this.eliminado = false;
      }, 1000);
    }

  }

  copyOnClickBoard(note: any) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = note;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copiado = true;
    setTimeout(() => {
      this.copiado = false;
    }, 1000);
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  togglePlus() {
    this.myCustomPaginatorIntl.showPlus = !this.myCustomPaginatorIntl.showPlus;
    this.myCustomPaginatorIntl.changes.next();
  }

}
