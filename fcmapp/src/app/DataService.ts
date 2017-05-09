/**
 * Created by penug on 4/25/2017.
 */
import { Injectable } from '@angular/core'
import {Peril} from './peril'
import {Bonds} from './bonds'
import { Portfoliocodes } from './portfoliocode'

@Injectable()
export class DataService{


  getPerils(){
    return [

      new Peril('P-ABC','P ABC Details'),
      new Peril('P-DEF','P DEF Details'),
      new Peril('P-GHI','P GHI Details'),
      new Peril('P-KLM','P KLM Details'),
      new Peril('P-NOP','P NOP Details'),
      new Peril('P-STU','P STU Details'),
      new Peril('P-XYZ','P XYZ Details')
    ];
  }

  getBonds(){
    return [

      new Bonds('B-ABC 1','P-ABC','B ABC Details 1'),
      new Bonds('B-ABC 2','P-ABC','B ABC Details 2'),
      new Bonds('B-ABC 3','P-DEF','B ABC Details 3'),
      new Bonds('B-ABC 4','P-ABC','B ABC Details 4')


    ];
  }
  getPortfoliocodes(){
    return[
      new Portfoliocodes( 'A','20170331'),
      new Portfoliocodes( 'AY','20170430'),
      new Portfoliocodes( 'G','20170501'),
      new Portfoliocodes( 'GS','20170601'),
      new Portfoliocodes( 'MKT','20170701'),
      new Portfoliocodes( 'P','20170701'),
      new Portfoliocodes( 'SRBB','20170801')
    ];
  }

}
