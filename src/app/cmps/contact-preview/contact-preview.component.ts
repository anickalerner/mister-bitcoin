import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  closeResult = '';
  constructor(private location: Location,
    private router: Router,
    private modalService: NgbModal,
    private contactService: ContactService) { }

  ngOnInit(): void {
  }

  get image() {
    return this.contactService.getImage(this.contact.name);
  }

  onContactClick(event) {
    event.stopPropagation();
    this.router.navigateByUrl(`contact/${this.contact._id}`);
  }

  onContactEdit(event) {
    this.router.navigateByUrl(`contact/edit/${this.contact._id}`);
  }

  onContactDelete(event) {
    event.stopPropagation();
    const modalRef = this.modalService.open(DeleteConfirmationComponent);
    modalRef.result.then((result) => {
      // ok
      this.contactService.deleteContact(this.contact._id).subscribe(
        () => this.onDelete.emit(this.contact)
      );
    }, (reason) => {
      // cancel
    });
    modalRef.componentInstance.contactName = this.contact.name;
  }

}
