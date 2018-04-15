import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name;
  message;
  constructor(
    private _authorService : AuthorService,
    private _router : Router
  ) { }

  ngOnInit() {
  }
  createAuthor(){
    console.log(this.name)
    this._authorService.createAuthor(this.name).then((response => {
      console.log(response)
      if(response['message'] == 'success'){
        this._router.navigateByUrl('')
      }
      else{
        this.message = "There was a problem saving author. Please try again."
      }
    }))
  }

}
