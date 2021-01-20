import {Component, Input, OnInit} from '@angular/core';


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
      this.gasStation.coordinates.actualUserDistance = this.getDistance(userLocation.coords, this.gasStation.coordinates);
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

  getDistance(geolocation1, geolocation2): string {
    const rad = (x) => {
      return x * Math.PI / 180;
    };

    const R = 6378.137;
    const dLat = rad(geolocation2.latitude - geolocation1.latitude);
    const dLong = rad(geolocation2.longitude - geolocation1.longitude);
    // tslint:disable-next-line:max-line-length
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(geolocation1.latitude)) * Math.cos(rad(geolocation2.latitude)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d.toFixed(2);
  }
}
