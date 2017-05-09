import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";
import { Portfoliocodes } from "../portfoliocode";
import {IMyOptions, IMyDateModel} from 'mydatepicker';

@Component({
  selector: 'app-celp',
  templateUrl: './celp.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class CELPComponent implements OnInit {

  title = 'CELP';
  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');

  portfoliocodes: Portfoliocodes[];
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };
  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
  }
  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
  }

  ngOnInit() {
  }

}
