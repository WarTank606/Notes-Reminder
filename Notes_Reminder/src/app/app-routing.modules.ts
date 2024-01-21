import { Routes, RouterModule } from "@angular/router";
import { NewNotesComponent } from "./new-notes/new-notes.component";
import { NgModule } from "@angular/core";
import { NotePageComponent } from "./note-page/note-page.component";
import { NewNoteStartComponent } from "./new-note-start/new-note-start.component";


const appRoutes: Routes = [
    {path: '', redirectTo: 'note_page', pathMatch: 'full' },
    {path: 'note_page', component: NotePageComponent, children: 
    [
        {path: ':id', component: NotePageComponent}
    ]},
    {path: 'new_notes', component: NewNotesComponent},

    

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouteringModule
{

}

// {path: '', redirectTo: 'note_page', pathMatch: 'full' },
// {path: 'note_page', component: NotePageComponent, children: 
// [{path: ':id', component: NotePageComponent},]},
// {path: 'new_notes', component: NewNotesComponent, children: 
//     [{path: ':id', component: NewNotesComponent}]
// }