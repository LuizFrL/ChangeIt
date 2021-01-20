import { Component, OnInit } from '@angular/core';
import { mainTitle } from '../../core/utils';
import {UserService} from '../../core/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainTitle = mainTitle;
  isAdminUser$;
  user;
  constructor(
    private userService: UserService
  ) {
    userService.user$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.isAdminUser$ = this.userService.isAdminUser$;
  }

  login(): void {
    this.userService.googleSignin();
  }

  logOut(): void {
    this.userService.logOut();
  }
}
