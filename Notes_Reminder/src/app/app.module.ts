import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NewNotesComponent } from './new-notes/new-notes.component';
import { AppRouteringModule } from './app-routing.modules';
import { NotePageComponent } from './note-page/note-page.component';
import { FormsModule } from '@angular/forms';
import { NotePageService } from './note-page/note_page.sercive';
import { NewNoteStartComponent } from './new-note-start/new-note-start.component';


@NgModule({
  declarations: [
    AppComponent,
    NewNotesComponent,
    NotePageComponent,
    NewNoteStartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRouteringModule,
    FormsModule
  ],
  providers: [NotePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
