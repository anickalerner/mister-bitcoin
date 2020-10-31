import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  model = { name: '' };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(){
     this.authService.signup(this.model.name);
     this.router.navigateByUrl('/');
  }

}
