import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-tvar',
  templateUrl: './tvar.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class TvarComponent implements OnInit {
  title = 'TVaR';
  constructor() { }

  ngOnInit() {
  }

}
