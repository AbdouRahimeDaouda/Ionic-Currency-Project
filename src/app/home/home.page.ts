import { Component } from '@angular/core';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public res: string = null;
  public dev: string = null;
  public dev2: string = null;
  //public txt: string = 'Today, 1 Dollar USD worth';
  constructor(private exchangeServ: ExchangeService) {}
  getCurrency(val) {
     const s = 'USD' + val;
     this.exchangeServ.getAllCurrencies().subscribe(
       (response) => {
         console.log(response['quotes'][s]);
         this.res = 'Today, 1 Dollar USD worth ' + response['quotes'][s];
         this.dev = this.getDevise(val);
      },
      (error) => {
        console.log('Erreur lie a l\'API');
      },
    );
  }
    getDevise(dev) {
    // tslint:disable-next-line: no-conditional-assignment
    if (dev === 'EUR') {
      return this.dev2 = 'Euro';
    }
    else if(dev === 'TND') {
       return this.dev2 = 'Dianr';
    }
    else if(dev === 'GBP') {
       return this.dev2 = 'Livre sterling';
    }
   else if(dev === 'CNY') {
       return this.dev2 = 'Yuan';
    }
    else if (dev === 'EGP') {
       return this.dev2 = 'Livre égyptienne';
    }
    else if(dev === 'JPY') {
       return this.dev2 = 'Yen';
        }
     }
}
