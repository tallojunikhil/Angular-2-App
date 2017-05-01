import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-mlse-detail',
  templateUrl: './mlse-detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class MlseDetailComponent implements OnInit {
  title = 'MLSE Detail';
  constructor() { }

  ngOnInit() {
  }

}
