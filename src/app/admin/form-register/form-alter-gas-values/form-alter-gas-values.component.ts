import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {GasStationService} from '../../../core/gas-station/gas-station.service';
import {GasStation} from '../../../core/gas-station/gas-station';
import {getCurrentRegionOfUser} from '../../../core/utils';

@Component({
  selector: 'app-form-alter-gas-values',
  templateUrl: './form-alter-gas-values.component.html',
  styleUrls: ['./form-alter-gas-values.component.css']
})
export class FormAlterGasValuesComponent implements OnInit {
  formAlterGasStationValues: FormGroup;
  userActualRegion: string;
  gasStations$: Observable<GasStation[]>;
  gasolineValues;

  constructor(
    private formBuilder: FormBuilder,
    private gasStationService: GasStationService
  ) {
  }

  ngOnInit(): void {
    this.userActualRegion = getCurrentRegionOfUser();
    this.gasStations$ = this.gasStationService.getGasStationsOfRegion(this.userActualRegion);
    this.formAlterGasStationValues = this.formBuilder.group({
      gasStation: ['', Validators.required],
      Credit: [null, Validators.required],
      MoneyDebit: [null, Validators.required],
      promotions: ['']
    });
  }

  alterGasStationValues(): void {
    const key = this.formAlterGasStationValues.get('gasStation').value;
    const region = this.userActualRegion;
    this.gasStationService.setGasStationsValues(key, region, {
      gasoline: {
        Credit: this.formAlterGasStationValues.get('Credit').value,
        MoneyDebit: this.formAlterGasStationValues.get('MoneyDebit').value
      },
      promotions: this.formAlterGasStationValues.get('promotions').value
    });
    this.formAlterGasStationValues.reset();
    this.gasolineValues = null;
  }

  onSelectGasStation(): void {
    const value = this.formAlterGasStationValues.value;
    this.gasStationService.getGasStationsValues(this.userActualRegion, value.gasStation).subscribe(
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
