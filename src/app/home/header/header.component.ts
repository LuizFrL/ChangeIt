import {Component, Input, OnInit} from '@angular/core';
import {mainTitle} from '../../core/utils';
import {UserService} from '../../core/user/user.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {FeedbackComponent} from '../../feedback/feedback/feedback.component';
import {MatDrawer} from '@angular/material/sidenav';
import {HeaderService} from '../../core/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainTitle = mainTitle;
  user;
  @Input() drawer;

  constructor(
    public headerService: HeaderService
  ) {
  }

  ngOnInit(): void {
  }


  toggleMenu(): void {
    this.headerService.changeMenu(!this.drawer.opened);
    this.drawer.toggle();
  }
}
