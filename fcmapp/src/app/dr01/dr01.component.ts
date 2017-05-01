import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-dr01',
  templateUrl: './dr01.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class DR01Component implements OnInit {

  title = 'DR01';
  constructor() { }

  ngOnInit() {
  }

}
