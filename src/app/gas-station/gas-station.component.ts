import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GasStationService} from '../core/gas-station/gas-station.service';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../core/user/user.service';
import {map} from 'rxjs/operators';
import {getDistance} from '../core/utils';

@Component({
  selector: 'app-gas-station',
  templateUrl: './gas-station.component.html',
  styleUrls: ['./gas-station.component.css']
})
export class GasStationComponent implements OnInit {
  gasStations$: Observable<any>;
  actualDistance: number;

  lookingForGasStation = true;
  hasGasStation;

  priceOrdersAvailable = {
    credit: 'Values.gasoline.Credit',
    moneyDebit: 'Values.gasoline.MoneyDebit',
    nearby: 'coordinates.actualUserDistance'
  };

  actualOrder = 'Values.gasoline.MoneyDebit';
  creditChecked = false;
  moneyDebitChecked = true;

  constructor(
    private formBuilder: FormBuilder,
    private gasStationService: GasStationService,
    public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.currentRegion$.subscribe(
      region => {
        this.gasStations$ = this.gasStationService.getAllByRegion(region).pipe(
          map(gasStations => {
              this.lookingForGasStation = false;
              this.hasGasStation = !!gasStations.length;
              gasStations.forEach(
                gasStation => {
                  gasStation.coordinates.actualUserDistance = getDistance(this.userService.currentPosition$.getValue(),
                    gasStation.coordinates);
                }
              );
              return gasStations;
            }
          )
        );
      }
    );
  }

  onChangeWantedDistance(wantedDistanceKm: number): void {
    if (wantedDistanceKm) {
      this.actualDistance = Number(wantedDistanceKm);
    } else {
      this.actualDistance = 0;
    }
  }

  clickDebit(): void {
    // @ts-ignore
    this.actualOrder = this.priceOrdersAvailable.moneyDebit;
    this.moneyDebitChecked = true;
    if (this.creditChecked) {
      this.creditChecked = false;
    }
  }

  clickCredit(): void {
    // @ts-ignore
    this.actualOrder = this.priceOrdersAvailable.credit;
    this.creditChecked = true;
    if (this.moneyDebitChecked) {
      this.moneyDebitChecked = false;
    }
  }

  clickNearby(): void {
    this.actualOrder = this.priceOrdersAvailable.nearby;
    this.moneyDebitChecked = false;
    this.creditChecked = false;
  }
}
