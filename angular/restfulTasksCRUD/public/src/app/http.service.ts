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

createTask(task){
  console.log("in service ", task)
  return this._http.post('/tasks/', task)
}

  constructor(private _http: HttpClient) {
  

   }

   
  
}
