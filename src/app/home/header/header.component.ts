import {Component, Input, OnInit} from '@angular/core';
import {mainTitle} from '../../core/utils';
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
  user;
  menuOpen = false;
  @Input() drawer;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }


  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
