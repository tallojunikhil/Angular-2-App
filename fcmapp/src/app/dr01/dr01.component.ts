import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";
import {portfolios} from "../portfolios";

@Component({
  selector: 'app-dr01',
  templateUrl: './dr01.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class DR01Component extends DataService implements OnInit {

  title = 'DR01';

  portfolios: portfolios[];
  selectedPortfolio: portfolios = new portfolios('A',new Date(2017,5,16));

  constructor( private _dataService: DataService) {
    super();
    this.portfolios = this._dataService.getPortfolios();
  }


  ngOnInit() {
  }

}
