import { Component, OnInit } from '@angular/core';
import { faHome, faUserFriends, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userSubscription: Subscription;
  user: User = null;
  faHome = faHome;
  faUserFriends = faUserFriends;
  faChartLine = faChartLine;
  
  constructor(private userService: UserService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user => {
      this.user = user;
    })
    this.userService.getUser();
  }

  logout(){
    this.authService.logout();
  }

}
