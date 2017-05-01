import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-celp',
  templateUrl: './celp.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class CELPComponent implements OnInit {

  title = 'CELP';
  constructor() { }

  ngOnInit() {
  }

}
