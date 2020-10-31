import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Move } from 'src/app/models/move.module';
import { AuthService } from 'src/app/services/auth.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  bitcoinSubscription: Subscription;
  errorSubscription: Subscription;
  user: User = null;
  error;
  model = { name: ''};
  btc: number = 0;
  moves: Move[];
  listTitle: string = '';
  constructor(
    private bitcoinService: BitcoinService, 
    private userService: UserService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = user
      if (user){
        this.bitcoinService.getRate(this.user.coins);
        this.bitcoinSubscription = this.bitcoinService.btc$.subscribe(btc => this.btc = btc );
        this.moves = this.user.moves.sort((move1, move2) => move2.at - move1.at).slice(0, 3);
        this.listTitle = 'Your latest transfers';
      }
    });
    this.errorSubscription = this.authService.error$.subscribe(error =>{
      this.error = error;
    })
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

  login(){
    this.authService.login(this.model);
    this.model.name = '';
  }

}
