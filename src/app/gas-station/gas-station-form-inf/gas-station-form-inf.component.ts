import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-gas-station-form-inf',
  templateUrl: './gas-station-form-inf.component.html',
  styleUrls: ['./gas-station-form-inf.component.css']
})
export class GasStationFormInfComponent implements OnInit {
  @Input() gasStation;
  constructor() { }

  ngOnInit(): void {

  }

  redirectToMaps(latitude: number, longitude: number): void {
    window.open(`https://www.google.com.br/maps/search/${latitude},+${longitude}`);
  }

  share(latitude: string, longitude: string): void {
    if (!('share' in navigator)) {
      alert('Share API not supported.');
      return;
    }

    navigator.share({
      title: 'Economize dinheiro!!',
      text: 'O preço mais barato para abastecer seu carro você encontra aqui!',
      url: `https://www.google.com.br/maps/search/${latitude},+${longitude}`
    })
      .catch(error => alert('Error sharing: ' + error));
  }
}
