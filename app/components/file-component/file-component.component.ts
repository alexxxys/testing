import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-component',
  templateUrl: './file-component.component.html',
  styleUrls: ['./file-component.component.css']
})
export class FileComponentComponent implements OnInit {

  constructor() { }

  @Input() files: File[];

  ngOnInit() {
  }

}
