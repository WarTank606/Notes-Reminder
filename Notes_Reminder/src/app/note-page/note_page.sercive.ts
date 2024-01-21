import { NoteModel } from './Note.model';
import { EventEmitter } from '@angular/core'

export class NotePageService {

    NoteUpdated = new EventEmitter<NoteModel[]>()
    Index: number;
    EditMode: boolean;
    Name: string;
    Content: string;
    NewPageName: string;

  private NoteModel: NoteModel[] = [
    new NoteModel('A Test Name', 'A Test Note'),
    new NoteModel('A Test Name 2', 'A Test Note 2'),
    new NoteModel('A Test Name 3', 'A Test Note 3'),
  ];


  //Get a copy of the notearray
  getNote()
  {
    return this.NoteModel.slice();
  }

  //Get the note at the given index
  getEditItem(index: number)
  {
    this.Name = this.NoteModel[index].name
    this.Content = this.NoteModel[index].note
    return this.NoteModel[index];
  }

  //Creates new note
  onAddNote(Note: NoteModel)
  {
    this.NoteModel.push(Note);
    this.NoteUpdated.emit(this.NoteModel.slice())
  }

  //Changes note at given index
  onEditNote(Note: NoteModel, Index: number)
  {
    this.NoteModel.splice(Index, 1, Note);
    this.NoteUpdated.emit(this.NoteModel.slice())
  }


  //Deletes notes at givem index
  onDeleteNote(Index: number)
  {
    this.NoteModel.splice(Index, 1);
    this.NoteUpdated.emit(this.NoteModel.slice())
  }

  //Passes the Index and EditMode of the note to the services, 
  //so that it can be used by other components
  Note_Index(index: number, EditMode: boolean)
  {
    this.Index = index;
    this.EditMode = EditMode;
  }

}
