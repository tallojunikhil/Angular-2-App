import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-else-detail',
  templateUrl: './else-detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class ElseDetailComponent implements OnInit {

  title = 'Else Detail';
  constructor() { }

  ngOnInit() {
  }

}
