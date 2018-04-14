import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
  getTasks(){
    return this._http.get('/tasks')
 }
 getTaskById(id){
  return this._http.get(`/tasks/${id}`);
  
}

  constructor(private _http: HttpClient) {
  

   }

   
  
}
