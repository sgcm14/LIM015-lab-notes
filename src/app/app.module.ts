import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//----------------------------Modulos----------------------------
import { AppRoutingModule } from './app-routing.module';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { provideStorage,getStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

// CON LA VERSION ANTERIOR
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//----------------------------Componentes----------------------------
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // CON LA VERSION ANTERIOR
    AngularFirestoreModule, // CON LA VERSION ANTERIOR
    FormsModule
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),
    // provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
