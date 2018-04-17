import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class NoteService {

  constructor(private _http : Http) { }

  createNote(note){
    return this._http.post('/api/notes', {note : note}).map(data => data.json()).toPromise();
  }
  getNotes(){
    return this._http.get('/api/notes').map(data => data.json()).toPromise();
  }

}
