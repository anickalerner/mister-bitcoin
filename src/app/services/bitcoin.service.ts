import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  private BASE_URL = 'https://blockchain.info/tobtc?currency=USD&value='
  
  private _btc$ = new BehaviorSubject<number>(1)
  public btc$ = this._btc$.asObservable()

  constructor(private http: HttpClient) { }

  getRate(coins: number){
    var url = this.BASE_URL + coins.toString();
    this.http.get<number>(url).pipe(
      retry(1),
      catchError(() => throwError('rate not found!'))
    ).subscribe(rate => {
      this._btc$.next(rate);
    })
  }

  getMarketPrice(){

  }

  getConfirmedTransactions(){

  }
}
