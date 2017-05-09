import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";
import {  Portfoliocodes } from "../portfoliocode";

@Component({
  selector: 'app-mlse',
  templateUrl: './mlse.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class MlseComponent implements OnInit {

  title = 'MLSE';
  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');

  portfoliocodes: Portfoliocodes[];
  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
  }

  ngOnInit() {
  }

}
