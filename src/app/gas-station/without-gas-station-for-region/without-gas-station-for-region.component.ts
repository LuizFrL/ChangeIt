import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-without-gas-station-for-region',
  templateUrl: './without-gas-station-for-region.component.html',
  styleUrls: ['./without-gas-station-for-region.component.css']
})
export class WithoutGasStationForRegionComponent implements OnInit {
  lottieConfig: object;
  constructor() { }

  ngOnInit(): void {
    this.lottieConfig = {
      path: 'https://assets8.lottiefiles.com/private_files/lf30_zffx4ete.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

}
