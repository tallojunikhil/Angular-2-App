import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-mlse',
  templateUrl: './mlse.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class MlseComponent implements OnInit {

  title = 'MLSE';
  constructor() { }

  ngOnInit() {
  }

}
