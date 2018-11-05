import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MoviePipe } from './movie.pipe';

import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CharactersComponent } from './characters/characters.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { AdminComponent } from './admin/admin.component';
import { EditorComponent } from './editor/editor.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CharactersComponent,
    WelcomeComponent,
    NavbarComponent,
    MoviePipe,
    AddCharacterComponent,
    AdminComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

