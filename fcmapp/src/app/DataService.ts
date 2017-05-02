/**
 * Created by penug on 4/25/2017.
 */
import {Injectable} from '@angular/core'
import {Peril} from './peril'
import {Bonds} from './bonds'
import {portfolios} from './portfolios'
// import {states} from "./ilw/ilw.component";
@Injectable()
export class DataService {


  getPerils() {
    return [

      new Peril('P-ABC', 'P ABC Details'),
      new Peril('P-DEF', 'P DEF Details'),
      new Peril('P-GHI', 'P GHI Details'),
      new Peril('P-KLM', 'P KLM Details'),
      new Peril('P-NOP', 'P NOP Details'),
      new Peril('P-STU', 'P STU Details'),
      new Peril('P-XYZ', 'P XYZ Details')
    ];
  }

  getBonds() {
    return [

      new Bonds('B-ABC 1', 'P-ABC', 'B ABC Details 1'),
      new Bonds('B-ABC 2', 'P-ABC', 'B ABC Details 2'),
      new Bonds('B-ABC 3', 'P-DEF', 'B ABC Details 3'),
      new Bonds('B-ABC 4', 'P-ABC', 'B ABC Details 4')


    ];
  }

  getPortfolios() {

    return [

      new portfolios('A', new Date(2017, 5, 16)),
      new portfolios('AB', new Date(2014, 5, 16)),
      new portfolios('AY', new Date(2012, 4, 21)),
      new portfolios('CA', new Date(2017, 5, 6)),
      new portfolios('AD', new Date(2017, 5, 26)),
      new portfolios('AZ', new Date(2011, 8, 16)),
      new portfolios('FA', new Date(2017, 5, 16)),
      new portfolios('MA', new Date(2017, 5, 16))

    ];
  }
  //
  // getStates() {
  //   return [
  //     new states('AL', 'Alabama'),
  //     new states('AK', 'Alaska'),
  //     new states('AS', 'American Samoa'),
  //     new states('AZ', 'Arizona'),
  //     new states('AR', 'Arkansas'),
  //     new states('CA', 'California'),
  //     new states('CO', 'Colorado'),
  //     new states('CT', 'Connecticut'),
  //     new states('DE', 'Delaware'),
  //     new states('DC', 'District Of Columbia'),
  //     new states('FM', 'Federated States Of Micronesia'),
  //     new states('FL', 'Florida'),
  //     new states('GA', 'Georgia'),
  //     new states('GU', 'Guam'),
  //     new states('HI', 'Hawaii'),
  //     new states('ID', 'Idaho'),
  //     new states('IL', 'Illinois'),
  //     new states('IN', 'Indiana'),
  //     new states('IA', 'Iowa'),
  //     new states('KS', 'Kansas'),
  //     new states('KY', 'Kentucky'),
  //     new states('LA', 'Louisiana'),
  //     new states('ME', 'Maine'),
  //     new states('MH', 'Marshall Islands'),
  //     new states('MD', 'Maryland'),
  //     new states('MA', 'Massachusetts'),
  //     new states('MI', 'Michigan'),
  //     new states('MN', 'Minnesota'),
  //     new states('MS', 'Mississippi'),
  //     new states('MO', 'Missouri'),
  //     new states('MT', 'Montana'),
  //     new states('NE', 'Nebraska'),
  //     new states('NV', 'Nevada'),
  //     new states('NH', 'New Hampshire'),
  //     new states('NJ', 'New Jersey'),
  //     new states('NM', 'New Mexico'),
  //     new states('NY', 'New York'),
  //     new states('NC', 'North Carolina'),
  //     new states('ND', 'North Dakota'),
  //     new states('MP', 'Northern Mariana Islands'),
  //     new states('OH', 'Ohio'),
  //     new states('OK', 'Oklahoma'),
  //     new states('OR', 'Oregon'),
  //     new states('PW', 'Palau'),
  //     new states('PA', 'Pennsylvania'),
  //     new states('PR', 'Puerto Rico'),
  //     new states('RI', 'Rhode Island'),
  //     new states('SC', 'South Carolina'),
  //     new states('SD', 'South Dakota'),
  //     new states('TN', 'Tennessee'),
  //     new states('TX', 'Texas'),
  //     new states('UT', 'Utah'),
  //     new states('VT', 'Vermont'),
  //     new states('VI', 'Virgin Islands'),
  //     new states('VA', 'Virginia'),
  //     new states('WA', 'Washington'),
  //     new states('WV', 'West Virginia'),
  //     new states('WI', 'Wisconsin'),
  //     new states('WY', 'Wyoming')
  //
  //   ]
  // }


}
