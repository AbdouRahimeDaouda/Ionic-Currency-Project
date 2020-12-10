import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.page.html',
  styleUrls: ['./edit-currency.page.scss'],
})
export class EditCurrencyPage implements OnInit {
  currencyApiUrl = '';
  currencyData = {
  sources: '',
  quotes: []
  };
  constructor(private http: HttpClient) { 
  this.currencyApiUrl = 'http://apilayer.net/api/live?access_key=eb795cacc1b078cd09a1393ff9146511';
  this.http.get(this.currencyApiUrl).
  subscribe((data) => {
    console.log(data);
      });
  }

  ngOnInit() {
  }
  readAPI(URL: string) {
  return this.http.get(URL);
}

}
