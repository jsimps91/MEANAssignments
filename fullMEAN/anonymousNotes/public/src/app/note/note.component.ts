import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() thisNote;
  constructor() { }

  ngOnInit() {
  }

}
