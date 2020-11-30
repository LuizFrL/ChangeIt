import { Component, OnInit } from '@angular/core';
import { mainTitle } from '../../core/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mainTitle = mainTitle;
  isAdminUser = true;
  constructor() { }

  ngOnInit(): void {
  }

}
