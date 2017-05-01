import { Component } from '@angular/core';
import { Peril } from './peril';
import { Bonds } from './bonds';
import { DataService } from "./DataService";
import { GridOptions } from "ag-grid";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],

})

export class AppComponent {
  dateObj: number = Date.now();
  buildNumber = '0.0.0';
  private gridOptions: GridOptions;
  selectedPeril: Peril = new Peril('P-DEF', 'P DEF Details');
  // selectedBond: Bonds = new Bonds('B-ABC 1','P-ABC','B ABC Details 1');
  perils: Peril[];
  bonds: Bonds[];
  pcodenamevalue:string;
  constructor(private _dataService: DataService) {
    this.perils = this._dataService.getPerils();
  }


  onSelect(pcode) {
    this.bonds = this._dataService.getBonds().filter((item) => item.pcode == pcode);
  }

  onEvaluate(){
    alert('clicked');
    console.log('clicked....');
  }

}
