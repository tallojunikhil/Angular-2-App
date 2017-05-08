import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";
import {IMyDateModel, IMyOptions} from "mydatepicker";

@Component({
  selector: 'app-seasonality',
  templateUrl: './seasonality.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class SeasonalityComponent implements OnInit {
  title = 'Seasonality';

  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'mm/dd/yyyy',
    inline: false

  }
  bondcodes = [
    {
      name:'VENTERRA 13-1A',
      value:'venterra'
    }
  ];
  constructor() {

  }
  onDateChanged(event: IMyDateModel){

  }

  ngOnInit() {
  }

}
