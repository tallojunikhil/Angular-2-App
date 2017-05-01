import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-notional-exposure',
  templateUrl: './notional-exposure.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class NotionalExposureComponent implements OnInit {

  title = 'Notional Exposure';
  constructor() { }

  ngOnInit() {
  }

}
