import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GasStationService} from '../core/gas-station/gas-station.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../core/user/user.service';

@Component({
  selector: 'app-gas-station',
  templateUrl: './gas-station.component.html',
  styleUrls: ['./gas-station.component.css']
})
export class GasStationComponent implements OnInit {
  gasStations$: Observable<any>;
  formSelectPriceOrder: FormGroup;
  priceOrdersAvailable: object[] = [
    {
      displayName: 'Credito',
      pathOrder: 'Values.gasoline.Credit'
    },
    {
      displayName: 'Debito',
      pathOrder: 'Values.gasoline.MoneyDebit'
    }
  ];
  actualOrder = 'Values.gasoline.MoneyDebit';

  constructor(
    private formBuilder: FormBuilder,
    private gasStationService: GasStationService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.currentRegion$.subscribe(
      region => {
        this.gasStations$ = this.gasStationService.getAllByRegion(region);
      }
    );
    this.formSelectPriceOrder = this.formBuilder.group({
      priceOrder: ['', Validators.required]
    });

    this.formSelectPriceOrder.valueChanges.subscribe(value => {
      this.actualOrder = value.priceOrder;
    });
  }

}
