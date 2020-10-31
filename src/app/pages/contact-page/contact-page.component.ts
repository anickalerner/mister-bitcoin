import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  subscription: Subscription;
  contacts: Contact[] = [];
  faPlus = faPlus;
  
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts;
    });
  }
  
  onFilterHandler(filterBy) {
    this.contactService.loadContacts(filterBy)
  }

  onAddContact(){
    this.router.navigate(['/contact/edit'])
  }

  onDeleteContact(contact){
    this.contacts = this.contacts.filter(c => c !== contact);
  }
}
