import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-seasonality',
  templateUrl: './seasonality.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class SeasonalityComponent implements OnInit {
  title = 'Seasonality';
  constructor() { }

  ngOnInit() {
  }

}
