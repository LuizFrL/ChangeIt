import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-looking-for-gas-station',
  templateUrl: './looking-for-gas-station.component.html',
  styleUrls: ['./looking-for-gas-station.component.css']
})
export class LookingForGasStationComponent implements OnInit {
  lottieConfig: object;

  constructor() { }

  ngOnInit(): void {
    this.lottieConfig = {
      path: 'https://res.cloudinary.com/knowgas/raw/upload/v1613108594/Know%20Gas/looking_for_gs_hpwzwc.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

}
