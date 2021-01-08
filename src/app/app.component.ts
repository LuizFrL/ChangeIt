import {Component, OnInit} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {titleMainPage, descriptionMainPage} from './core/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}
  ngOnInit(): void {
    const baseUrl = window.location.protocol + '//' + window.location.hostname;
    const imageUrl = baseUrl + '/fuel.png';
    this.titleService.setTitle(titleMainPage);
    this.metaService.addTags([
      {property: 'og:description', content: descriptionMainPage},
      {property: 'og:image', content: imageUrl, itemprop: 'image'},
      {property: 'og:url', content: baseUrl},
      {property: 'og:site_name', content: titleMainPage},
      {property: 'og:type', content: 'website'},
      {property: 'og:updated_time', content: String(Date.now())},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ]);
  }
}
