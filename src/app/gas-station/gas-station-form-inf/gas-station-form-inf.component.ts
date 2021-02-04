import {Component, Input, OnInit} from '@angular/core';
import {getDistance} from '../../core/utils';


@Component({
  selector: 'app-gas-station-form-inf',
  templateUrl: './gas-station-form-inf.component.html',
  styleUrls: ['./gas-station-form-inf.component.css']
})
export class GasStationFormInfComponent implements OnInit {
  @Input() gasStation;
  distance: string;
  constructor() {
  }

  ngOnInit(): void {
    const watchId = navigator.geolocation.watchPosition(userLocation => {
      this.gasStation.coordinates.actualUserDistance = getDistance(userLocation.coords, this.gasStation.coordinates);
    });
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
      text: `O preço mais agradavel para abastecer seu carro você encontra bem aqui!`,
      url: `https://www.google.com.br/maps/search/${latitude},+${longitude}`
    })
      .catch(error => console.log('Error sharing: ' + error));
  }
}
