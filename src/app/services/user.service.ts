import { Injectable } from '@angular/core';
import { Observable, Subscription, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';
import { Move } from '../models/move.module';
import { Contact } from '../models/contact.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userSubscription: Subscription;
  user: User;
  constructor(private http: HttpClient,
    private storageService: StorageService) {
    this.userSubscription = this.user$.subscribe(user => {
      this.user = user
    })
  }

  //private BASE_URL = '//localhost:3030/api/user';
  private BASE_URL = '/api/user'

  private _user$ = new BehaviorSubject<User>(null)
  public user$ = this._user$.asObservable()

  public getUser() {
    const storedUser = this.storageService.loadFromStorage('loggedUser');
    if (storedUser) {
      this.setUser(new User(storedUser));
    }
  }

  public setUser(user) {
    this._user$.next(user);
    this.storageService.saveToStorage('loggedUser', user);
  }

  public transfer(amount, contact: Contact) {
    if (this.user.coins >= amount) {
      this.user.coins -= amount;
      const move = new Move({toId: contact._id, to: contact.name, amount});
      this.user.addMove(move);
      
      this._updateUser().subscribe(        
        (user) => {
          this.setUser(new User(user));
        }
      );
    }
  }

  private _updateUser(): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${this.user.name}`, this.user).pipe(
      catchError(() => throwError(`Couldn't update user ${this.user.name}`))
    )
  }}
