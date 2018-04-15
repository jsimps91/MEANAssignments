import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthorService {

  constructor(private _http: Http) { }
  createAuthor(name){
    return this._http.post('/api/authors', {name : name}).map(data => data.json()).toPromise();
  }
  getAuthors(){
    return this._http.get('/api/authors').map(data => data.json()).toPromise();
  }
  deleteAuthor(id){
    return this._http.delete(`/api/authors/${id}`).map(data => data.json()).toPromise();
  }
  getAuthorById(id){
    return this._http.get(`/api/authors/${id}`).map(data => data.json()).toPromise();
  }
  updateAuthor(id, name){
    console.log('in service ', id, name)
    return this._http.put(`/api/authors/${id}`, {name : name}).map(data => data.json()).toPromise();
  }
}
