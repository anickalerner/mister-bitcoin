import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
@Input() contacts: Contact[];
@Output() onDelete: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteContact(contact){
    this.onDelete.emit(contact);
  }

}
