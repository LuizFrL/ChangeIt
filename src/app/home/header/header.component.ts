import { Component, OnInit } from '@angular/core';
import { mainTitle } from '../../core/utils';
import {UserService} from '../../core/user/user.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FeedbackComponent} from '../../feedback/feedback/feedback.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainTitle = mainTitle;
  isAdminUser$;
  user;
  menuOpen = false;
  constructor(
    private userService: UserService,
    public router: Router,
    public dialog: MatDialog
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

  toggleMenu(): void{
    this.menuOpen = !this.menuOpen;
  }

  openDialog() {
    this.dialog.open(FeedbackComponent, {
      height: '700px',
      width: '400px',
    });
  }
}
