import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {GasStationService} from '../../../core/gas-station/gas-station.service';
import {GasStation} from '../../../core/gas-station/gas-station';
import {UserService} from '../../../core/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form-alter-gas-values',
  templateUrl: './form-alter-gas-values.component.html',
  styleUrls: ['./form-alter-gas-values.component.css']
})
export class FormAlterGasValuesComponent implements OnInit {
  formAlterGasStationValues: FormGroup;
  gasStations$: Observable<GasStation[]>;
  gasolineValues;

  constructor(
    private formBuilder: FormBuilder,
    private gasStationService: GasStationService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.userService.currentRegion$.subscribe(region => {
      this.gasStations$ = this.gasStationService.getGasStationsOfRegion(region);
    });
    this.formAlterGasStationValues = this.formBuilder.group({
      gasStation: ['', Validators.required],
      Credit: [null, Validators.required],
      MoneyDebit: [null, Validators.required],
      promotions: ['']
    });

    this.activatedRoute.queryParams.subscribe( params => {
      if (params.gasStation) {
        this.formAlterGasStationValues.controls.gasStation.setValue(params.gasStation);
        this.onSelectGasStation(params.gasStation);
      }
    });
  }

  alterGasStationValues(): void {
    const key = this.formAlterGasStationValues.get('gasStation').value;
    this.gasStationService.setGasStationsValues(key, this.userService.currentRegion$.getValue(), {
      gasoline: {
        Credit: this.formAlterGasStationValues.get('Credit').value,
        MoneyDebit: this.formAlterGasStationValues.get('MoneyDebit').value
      },
      promotions: this.formAlterGasStationValues.get('promotions').value
    });
    this.formAlterGasStationValues.reset();
    this.gasolineValues = null;
  }

  onSelectGasStation(gasStation: string): void {
    this.gasStationService.getGasStationsValues(this.userService.currentRegion$.getValue(), gasStation).subscribe(
      gasolineValues => {
        this.gasolineValues = gasolineValues[0];
        this.formAlterGasStationValues.controls.Credit.setValue(
          this.gasolineValues?.gasoline?.Credit ? this.gasolineValues?.gasoline?.Credit : null
        );
        this.formAlterGasStationValues.controls.MoneyDebit.setValue(
          this.gasolineValues?.gasoline?.MoneyDebit ? this.gasolineValues?.gasoline?.MoneyDebit : null
        );
        this.formAlterGasStationValues.controls.promotions.setValue(
          this.gasolineValues?.promotions ? this.gasolineValues?.promotions : ''
        );
      });
  }
}
