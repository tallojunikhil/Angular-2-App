import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";
import { Portfoliocodes } from "../portfoliocode";

@Component({
  selector: 'app-tvar',
  templateUrl: './tvar.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class TvarComponent implements OnInit {
  title = 'TVaR';
  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');

  portfoliocodes: Portfoliocodes[];
  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
  }

  ngOnInit() {
  }

}
