import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private storageService: StorageService,
        private userService: UserService
    ) { }

    //private BASE_URL = '//localhost:3030/api/auth';
    private BASE_URL = '/api/auth'

    private _error$ = new BehaviorSubject<any>('');
    public error$ = this._error$.asObservable();

    public login(model) {
        return this.http.post<any>(this.BASE_URL + '/login', model).pipe(
            catchError(err => {
                if (err.status === 401) this._error$.next('This name doesn\'t exist in our records');
                return throwError('Couldn\'t signup a user')
            })
        ).subscribe(auth => {
            this.userService.setUser(new User(auth));
            this.storageService.saveToStorage('loggedUser', auth);
        })
    }

    public signup(name) {
        const newUser = { name, coins: 100, moves: [] }
        return this.http.post<any>(this.BASE_URL + '/signup', newUser).pipe(
            catchError(err => {
                this._error$.next(err);
                return throwError('Couldn\'t signup a user')
            })
        ).subscribe(auth => {
            this.userService.setUser(new User(auth));
        })
    }

    public logout() {
        return this.http.post<any>(this.BASE_URL + '/logout', {}).pipe(
            catchError(err => {
                this._error$.next(err);
                return throwError('Couldn\'t log out a user');
            })
        ).subscribe(() => {
            this.userService.setUser(null);
            this.storageService.saveToStorage('loggedUser', null);
        })
    }
}
