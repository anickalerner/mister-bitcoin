import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  userSubscription: Subscription;
  user: User = null;
  error: boolean = false;
  transfer = {
    coins: 0
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

  onTransfer() {
    if (this.transfer.coins === 0) return;
    if (this.transfer.coins <= this.user.coins) {
      this.error = false;
      this.userService.transfer(this.transfer.coins, this.contact);
    }
    else {
      this.error = true;
    }
  }

}
