import { Component, OnInit } from '@angular/core';
import {UserService} from '../core/user/user.service';
import {FeedbackComponent} from '../feedback/feedback/feedback.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  lottieConfig: object;

  constructor(
    public userService: UserService,
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.lottieConfig = {
      path: 'https://res.cloudinary.com/knowgas/raw/upload/v1613934214/Know%20Gas/Animations/Login_offrhc.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  openFeedback(): void {
    this.dialog.open(FeedbackComponent, {
      height: '700px',
      width: '400px',
    });
  }

  logOut(): void {
    this.userService.logOut();
  }

  SignIn(): void {
    this.userService.googleSignin();
  }
}
