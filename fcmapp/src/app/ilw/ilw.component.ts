import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-ilw',
  templateUrl: './ilw.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class IlwComponent implements OnInit {
  title = 'ILW';
  constructor() { }

  ngOnInit() {
  }

}
