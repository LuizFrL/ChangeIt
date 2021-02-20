import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GasStationService} from '../core/gas-station/gas-station.service';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../core/user/user.service';
import {map} from 'rxjs/operators';

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

  priceOrdersAvailable: object = {
    credit: 'Values.gasoline.Credit',
    moneyDebit: 'Values.gasoline.MoneyDebit'
  };

  actualOrder = 'Values.gasoline.MoneyDebit';
  creditChecked = false;
  moneyDebitChecked = true;

  constructor(
    private formBuilder: FormBuilder,
    private gasStationService: GasStationService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.currentRegion$.subscribe(
      region => {
        // '-158|-480'
        this.gasStations$ = this.gasStationService.getAllByRegion(region).pipe(
          map(gasStations => {
              this.lookingForGasStation = false;
              this.hasGasStation = !!gasStations.length;
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
}
