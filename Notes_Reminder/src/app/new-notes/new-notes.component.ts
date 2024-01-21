import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotePageService } from '../note-page/note_page.sercive';
import { NoteModel } from '../note-page/Note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.component.html',
  styleUrls: ['./new-notes.component.css'],
})
export class NewNotesComponent implements OnInit {

Index: number
EditMode: boolean
EditName: string
EditNote: string
EditedNote: NoteModel
  
  constructor(
    private NoteService: NotePageService,
    private Router: Router
    ) 
  {

  }

  ngOnInit() 
  {

    //Updates local ref's with new data from services
    this.Index = this.NoteService.Index
    this.EditMode = this.NoteService.EditMode


    //Check EditMode to see if the input field should be populated
    // to edit notes or left empty for new notes
    if (this.EditMode == true)
    {
      this.EditedNote = this.NoteService.getEditItem(this.Index);
      this.EditName = this.EditedNote.name
      this.EditNote = this.EditedNote.note
    }
    else if (this.EditMode == false)
    {
      this.EditedNote = null;
      this.EditName = null;
      this.EditNote = null;
    }

  }

//Submits a note to the array
  onSaveNote(Form: NgForm) 
  {
    const value = Form.value;
    const New_Note = new NoteModel(value.note_name, value.note);

    //Submits edited note to the array
    if (this.EditMode == true)
    {
      this.NoteService.onEditNote(New_Note, this.Index);

    }
    //Submits a new note to the array
    else if (this.EditMode == false)
    {
      this.NoteService.onAddNote(New_Note);
    }
    this.Router.navigate(['/note_page'])
  }



}
