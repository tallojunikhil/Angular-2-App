import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-mlse-detail',
  templateUrl: './mlse-detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class MlseDetailComponent implements OnInit {
  title = 'MLSE Detail';

  pcodes = [
    {
      name: "A",
      value: "a"
    },
    {
      name: "A + AY",
      value: "aay"
    },
    {
      name: "AY",
      value: "ay"
    },
    {
      name: "C",
      value: "c"
    },
    {
      name: "G",
      value: "g"
    }, {
      name: "GS",
      value: "gs"
    },
    {
      name: "MKT",
      value: "mkt"
    },
    {
      name: "P",
      value: "p"
    },
    {
      name: "SRBB",
      value: "srbb"
    },
    {
      name: "SRGL",
      value: "srgl"
    }



  ];
  dates = [
    {
      name:new Date(2017, 4, 16),
      value: new Date(2017, 4, 16)
    },
    {
      name:new Date(2017, 3, 16),
      value: new Date(2017, 3, 16)
    },
    {
      name:new Date(2017, 2, 16),
      value: new Date(2017, 2, 16)
    },
    {
      name:new Date(2016, 5, 16),
      value: new Date(2016, 5, 16)
    },
    {
      name:new Date(2015, 5, 16),
      value: new Date(2015, 5, 16)
    }

  ];
  perilcodes = [
    {
      name: 'CAQ',
      value: 'caq'
    },
    {
      name: 'EUW',
      value: 'euw'
    },
    {
      name: 'FLW',
      value: 'flw'
    },
    {
      name: 'JPQ',
      value: 'jpq'
    },
    {
      name: 'JPW',
      value: 'jpw'
    },
    {
      name: 'MAW',
      value: 'maw'
    },
    {
      name: 'NCW',
      value: 'ncw'
    },
    {
      name: 'NEQ',
      value: 'neq'
    },
    {
      name: 'NEW',
      value: 'new'
    },
    {
      name: 'NMQ',
      value: 'nmq'
    },
    {
      name: 'NYW',
      value: 'nyw'
    },
    {
      name: 'PWQ',
      value: 'pwq'
    },
    {
      name: 'SCQ',
      value: 'scq'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
