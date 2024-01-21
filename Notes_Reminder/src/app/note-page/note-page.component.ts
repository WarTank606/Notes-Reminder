import { Component, OnInit } from '@angular/core';
import { NoteModel } from './Note.model';
import { NotePageService } from './note_page.sercive';


@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css'],
})
export class NotePageComponent implements OnInit {

  Note: NoteModel[];

  EditMode: boolean;
  Index: number;
  Delete_Selection: boolean;
  Name: string;
  PageName:string;
  EditPageButton: boolean;
  EditPageName: boolean;
  OldPageName: string;


  constructor(
    private NoteService: NotePageService) {}

  ngOnInit() {
    
    // Resets all item to their default states
    this.EditMode = false;
    this.Delete_Selection = false;
    this.Note = this.NoteService.getNote();

    //Check if the Note page already has a name, if not a default name is given
    if (this.NoteService.NewPageName == '' || this.NoteService.NewPageName == null)
    {
      this.PageName = 'Temp Name';
    }
    else
    {
      this.PageName = this.NoteService.NewPageName;
    }
  }

//The Original source of the index of the Note in the array
  NoteSelected(index: number) {
    this.Index = index; //Need local Ref
  }

  //Sends user to New Note page and changes/clears past settings
  //Setting must be sent to create a new note, edit an existing note, or delete a note
  CreateNote()
  {
    this.EditMode = false;
    this.Index = null;
    this.NoteService.Note_Index(this.Index, this.EditMode)
  }

  //Triggered by the edit button, it send the required data to edit the note at the given index
  EditMode_Selector()
  {
    this.EditMode = true;
    this.NoteService.Note_Index(this.Index, this.EditMode)
  }

  //Triggered by the delete button, it GET'S the name of the note and setup the confirm deletion page
  Delete_Item()
  {
    this.Delete_Selection = true;
    this.NoteService.getEditItem(this.Index)
    this.Name = this.NoteService.Name;
  }

    //Triggered by CONFIRM button in the confirm deletion page, this method delete the note at the given index
  ConfirmDeletion()
  {
    this.NoteService.onDeleteNote(this.Index)
    this.Note = this.NoteService.getNote();
    this.Delete_Selection = false;
    this.EditMode = false;
    this.Index = null;
  }

  //Triggered by the cancel button, it closes the confirm deletion page
  CancelDeletion()
  {
    this.Delete_Selection = false;
  }

  //Clicking the note page name will trigger a CHANGE PAGE NAME button to appear, right now you cannot change the name
  SelectName()
  {
    this.EditPageButton = true;
    console.log('SelectName')
    console.log('EditPageButton: ' + this.EditPageButton)
  }

  //CHANGE PAGE NAME was clicked and you can now edit the page name, record of the old name is kept
  ChangePageName()
  {
    this.EditPageName = true;
    this.OldPageName = this.PageName;
  }

//Saves the new page name, and sends it to the service component
  OnSavePageName()
  {
    this.EditPageName = false;
    this.EditPageButton = false;
    this.NoteService.NewPageName = this.PageName;
  }

  //Cancels the new page name, replaces it with the old name
  OnCancelPageName()
  {
    this.PageName = this.OldPageName;
    this.EditPageName = false;
    this.EditPageButton = false;
  }

}
