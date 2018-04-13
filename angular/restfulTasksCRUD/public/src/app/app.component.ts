import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  task: string
  tasks;
  newTask;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = { title: "", description: "" }
    // this.getTasksFromService();
    // this.getSingleTask("5acf9d5c37c38756141c0552")
  }
  onSubmit() {
    console.log("in component, task: ", this.newTask)
   this._httpService.createTask(this.newTask)
   
    this.newTask = { title: "", description: "" }
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
     this.tasks = data;
    });
}
  getSingleTask(id){
    let observable = this._httpService.getTaskById(id);
    observable.subscribe(data => {
      console.log("Got our single task!", data['title'])
      this.task = data['title']
  })
  }
}
