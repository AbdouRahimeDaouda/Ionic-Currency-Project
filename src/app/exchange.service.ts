import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
link = 'http://apilayer.net/api/live?access_key=eb795cacc1b078cd09a1393ff9146511';
  constructor(private http: HttpClient) { }

  getAllCurrencies() {
    return this.http.get(this.link);
  }
}
