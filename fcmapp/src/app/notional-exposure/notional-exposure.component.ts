import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";
import { Portfoliocodes } from "../portfoliocode";

@Component({
  selector: 'app-notional-exposure',
  templateUrl: './notional-exposure.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class NotionalExposureComponent implements OnInit {

  title = 'Notional Exposure';
  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');

  portfoliocodes: Portfoliocodes[];
  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
  }


  ngOnInit() {
  }

}
