import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  note;
  notes;
  constructor(private _noteService : NoteService){}
  ngOnInit(){
    this.note = ""
    this._noteService.getNotes().then(data => {
      console.log(data)
      this.notes = data['notes']
    })
  }
  addNote(){
    this._noteService.createNote(this.note).then(data => {
      console.log(data)
      this.notes = data['notes']
    })
  }



}
