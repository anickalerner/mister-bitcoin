import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { retry, catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {
  }

  private BASE_URL = '//localhost:3030/api/contact';
  //private BASE_URL = '/api/contact';
    

  private _contacts$ = new BehaviorSubject<Contact[]>([])
  public contacts$ = this._contacts$.asObservable()

  public loadContacts(filterBy = { name: '', phone: '' }) {
    this.http.get<Contact[]>(this.BASE_URL)
      .pipe(
        map(contacts => {
          if (filterBy.name !== '') {
            return contacts.filter(({ name }) => {
              return name.toLowerCase().includes(filterBy.name.toLowerCase());
            })
          }
          else if (filterBy.phone !== '') {
            return contacts.filter(({ phone }) => {
              return phone.includes(filterBy.phone);
            })
          }
          else {
            return contacts;
          }
        })
      ).subscribe(contacts => {
        this._contacts$.next(contacts);
      })
  }

  public getById(id: string) {
    return this.http.get<Contact>(`${this.BASE_URL}/${id}`)
      .pipe(
        retry(1),
        catchError(() => throwError(`User id ${id} not found`))
      );
  }

  public deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`).pipe(
      tap(_ => console.log(`Deleted contact with id ${id}`)),
      catchError(() => throwError(`Couldn't delete contact with id=${id}`))      
    )
  }

  public saveContact(contact: Contact): Observable<any> {
    return contact._id ? this._updateContact(contact) : this._addContact(contact)
  }

  private _updateContact(contact: Contact): Observable<any> {
    return this.http.put(`${this.BASE_URL}/${contact._id}`, contact).pipe(
      tap(_ => console.log(`Updated contact with id=${contact._id}`)),
      catchError(()=>throwError(`Couldn't update contact with id=${contact._id}`))
    )
  }

  private _addContact(contact: Contact): Observable<any> {
    return this.http.post(`${this.BASE_URL}`, contact).pipe(
      tap((newContact: Contact) => console.log(`Added contact with id=${newContact._id}`)),
      catchError(() => throwError(`Couldn't add contact ${contact.name}`))
    )
  }

  public getImage(name: string) {
    var firstName = name.split(' ')[0]
    var lastLetter = firstName.substr(firstName.length - 1, 1)
    var sex = (lastLetter === 'a' || lastLetter === 'e') ? 'female' : 'male';
    return `https://avatars.dicebear.com/api/${sex}/${name}.svg?mood[]=happy`;
  }

}