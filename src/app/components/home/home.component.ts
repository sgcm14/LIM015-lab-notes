import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { getAuth } from "firebase/auth";
import { User } from 'src/app/model/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  dataUser: User = new User();
  notes:any[] = [];
  myNotes: Note[] = [];
  actualizado: boolean = false;

  constructor(private authService: AuthService,
              private firestoreService: FirestoreService,
              private auth: AngularFireAuth,
              private router:Router  ) { }

  ngOnInit(): void { 
    //this.authService.checkLogin(); // si usuario no esta autenticado redirige a LOGIN
    this.auth.onAuthStateChanged((user:any)=> {
      //console.log('user1---->',user.displayName);
      if(!user){
        this.router.navigate(['login']);
      }
    });

    this.authService.dataUser().then( (data: User) => {
      console.log('data--->',data);
      
        this.dataUser = data;
        this.getNotes();
        
        

    });

    
    

  }

  logout(){
    this.authService.logout()
  }

  getNotes2() {

  }

  getNotes(){
    this.firestoreService.getNotes(this.dataUser.uid).subscribe(data => {

      console.log('-->notas',data);
      
      this.myNotes = data;
       
      //this.myNotes = this.notes;

    });
  }

  getNotesbyUser() {
    return this.notes.reverse().filter((item) => item.idUser == this.dataUser.uid);
  }

  addNote(){
    console.log('añadiendo nota');  

    let note: Note = new Note();
    note.idUser = this.dataUser.uid;
    if(this.myNotes[0]) console.log('---->',this.myNotes[0]);
    
    let nro = (this.myNotes.length > 0) ? (this.myNotes[0].order) : 0;
    note.titleNote = "Mi Nota #"+ (nro + 1);
    note.order = nro + 1;
    this.firestoreService.saveNote({...note}).then(res => {
      console.log('res-->', res.id);
      note.idNote = res.id;
      this.myNotes.unshift(note);
      this.firestoreService.updateNote(res.id, {idNote: res.id});
      
    });

 
  }

  updateNote(note: Note){
    console.log('modificando nota--->',note);  
    this.firestoreService.updateNote(note.idNote, {...note});
    this.actualizado = true;
    setTimeout(() => {
      this.actualizado = false;
    }, 1000);
  }

  deleteNote(note: Note){
    console.log('eliminando nota--->',note);  
    const index = this.myNotes.indexOf(note);
    if(index !== -1) {
      this.myNotes.splice(index,1);
      this.firestoreService.deleteNote(note.idNote);
    }
   
  }

}
