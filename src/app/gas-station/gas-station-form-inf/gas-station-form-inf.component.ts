import {Component, Input, OnInit} from '@angular/core';
import {getDistance} from '../../core/utils';
import {UserService} from '../../core/user/user.service';
import {Observable} from 'rxjs';
import {GasStationService} from '../../core/gas-station/gas-station.service';


@Component({
  selector: 'app-gas-station-form-inf',
  templateUrl: './gas-station-form-inf.component.html',
  styleUrls: ['./gas-station-form-inf.component.css']
})
export class GasStationFormInfComponent implements OnInit {
  @Input() gasStation;
  @Input() distanceRadius: number;

  isAdminUser: Observable<boolean>;
  constructor(
    private userService: UserService,
    private gasStationService: GasStationService
  ) {
  }

  ngOnInit(): void {
    this.isAdminUser = this.userService.isAdminUser$;
    this.userService.currentPosition$.subscribe( position => {
      if (position) {
        this.gasStation.coordinates.actualUserDistance = getDistance(position, this.gasStation.coordinates);
      }
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

  updateDateOfGasStation(): void {
    this.gasStationService.updateDateOfGasStation(this.userService.currentRegion$.getValue(), this.gasStation.key, Date.now());
  }
}
