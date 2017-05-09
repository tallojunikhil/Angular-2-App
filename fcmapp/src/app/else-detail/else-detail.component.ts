import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";
import { Portfoliocodes } from "../portfoliocode";
import { Peril } from "../peril";

@Component({
  selector: 'app-else-detail',
  templateUrl: './else-detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class ElseDetailComponent implements OnInit {

  title = 'Else Detail';

  selectedPortfoliocodes: Portfoliocodes = new Portfoliocodes('', '');
  selectedPeril: Peril = new Peril('', '');

  portfoliocodes: Portfoliocodes[];
  perils: Peril[];
  pcodenamevalue:string;
  constructor(private _dataService: DataService) {
    this.portfoliocodes = this._dataService.getPortfoliocodes();
      this.perils = this._dataService.getPerils();
    }
  ngOnInit() {
  }

}
