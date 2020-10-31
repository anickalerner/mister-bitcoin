import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ChartService {
    constructor(private http: HttpClient) {
    }

    private _mpChart$ = new BehaviorSubject(null)
    public mpChart$ = this._mpChart$.asObservable()

    public loadMPChart(){
        var url = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
        this.loadChart(url, this._mpChart$);
    }

    private _tvChart$ = new BehaviorSubject(null)
    public tvChart$ = this._tvChart$.asObservable()

    public loadTVChart() {
        var url = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true';
        this.loadChart(url, this._tvChart$);
    }
    private _absChart$ = new BehaviorSubject(null)
    public absChart$ = this._absChart$.asObservable()

    public loadABSChart() {
        var url = 'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true';
        this.loadChart(url, this._absChart$);
    }

    public loadChart(url: string, observable) {
        this.http.get(url)
            .pipe(map(chart => chart),
                catchError(this.handleError('loadChart', []))
        ).subscribe(chart => {
            observable.next(chart);
        })
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(operation, error);
            return of(result as T);
        };
    }

}