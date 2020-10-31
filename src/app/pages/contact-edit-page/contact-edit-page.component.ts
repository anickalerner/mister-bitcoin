import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {
  contact: Contact = new Contact();
  contactForm: FormGroup;
  phoneRegex = /^[+]?[0-9]*[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  buttonText: string = 'Save';
  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private fb: FormBuilder, 
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.contactService.getById(id).subscribe(contact => {
        this.contact = contact;
        this.setForm();
      });
    }
    else{
      this.setForm();
    }
  }

  setForm(){
    this.contactForm = this.fb.group({
      name: [this.contact.name, [Validators.required, Validators.maxLength(50)]],
      phone: [this.contact.phone, [Validators.required, Validators.pattern(this.phoneRegex)]],
      email: [this.contact.email, [Validators.required, Validators.email]]
    })
  }
  
  onSave() {
    var data = this.contactForm.value
    if (this.contact._id){
      data = {...data, _id: this.contact._id};
    }
    this.contactService.saveContact(data).subscribe(
      () => this.router.navigateByUrl('contacts')
    );
  }

  get image() {
    return this.contactService.getImage(this.contact.name);
  }

  goBack(){
    this.location.back();
  }

}
