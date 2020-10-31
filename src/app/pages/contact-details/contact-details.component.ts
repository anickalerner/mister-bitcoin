import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Move } from 'src/app/models/move.module';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = null;
  userSubscription: Subscription;
  moves: Move[] = [];
  listTitle: string = '';

  constructor(private route: ActivatedRoute,
    private location: Location,
    private userService: UserService, 
    private router: Router,
    private contactService: ContactService) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.contactService.getById(id).subscribe(contact => {
      this.contact = contact;
      this.getContactMoves();
    });
  }

  goBack() {
    this.location.back();
  }

  get image() {
    return this.contactService.getImage(this.contact.name);
  }

  onContactEdit(){
    this.router.navigateByUrl(`contact/edit/${this.contact._id}`)
  }
  
  getContactMoves(){
    this.userSubscription = this.userService.user$.subscribe(user => {
      if (user) {
        this.moves = user.moves?.filter(m => {
          const move = new Move(m);
          return move.toId === this.contact._id
        });
        this.listTitle = `Your transfers to ${this.contact.name}`
      }
      else {
        this.router.navigateByUrl('/home');
      }
    })
  }

}
