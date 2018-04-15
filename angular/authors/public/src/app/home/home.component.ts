import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authorService : AuthorService) { }
  authors;
  ngOnInit() {
    this._authorService.getAuthors().then(response => {
      this.authors = response['authors']
    })
  }
  delete(id){
    this._authorService.deleteAuthor(id).then(response => {
      if(response['status'] =='success'){
        this.authors = response['authors']
      }
      
    })
  }

}
