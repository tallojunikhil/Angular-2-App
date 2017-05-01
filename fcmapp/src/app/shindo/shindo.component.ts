import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-shindo',
  templateUrl: './shindo.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class ShindoComponent implements OnInit {

  title = 'Shindo';
  constructor() { }

  ngOnInit() {
  }

}
