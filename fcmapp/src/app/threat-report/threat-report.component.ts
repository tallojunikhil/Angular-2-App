import { Component, OnInit } from '@angular/core';
import {DataService} from "../DataService";

@Component({
  selector: 'app-threat-report',
  templateUrl: './threat-report.component.html',
  styleUrls: ['../app.component.css'],
  providers: [DataService],
})
export class ThreatReportComponent implements OnInit {
  title = 'Threat Report';
  constructor() { }

  ngOnInit() {
  }

}
