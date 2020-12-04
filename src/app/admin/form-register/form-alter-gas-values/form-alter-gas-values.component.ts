import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {GasStationService} from '../../../core/gas-station/gas-station.service';
import {GasStation} from '../../../core/gas-station/gas-station';

@Component({
  selector: 'app-form-alter-gas-values',
  templateUrl: './form-alter-gas-values.component.html',
  styleUrls: ['./form-alter-gas-values.component.css']
})
export class FormAlterGasValuesComponent implements OnInit {
  formAlterGasStationValues: FormGroup;
  regions$: Observable<string[]>;
  gasStations$: Observable<GasStation[]>;

  constructor(
    private formBuilder: FormBuilder,
    private gasStationService: GasStationService
  ) {
  }

  ngOnInit(): void {
    this.formAlterGasStationValues = this.formBuilder.group({
      region: ['', Validators.required],
      gasStation: ['', Validators.required]
    });
    this.regions$ = this.gasStationService.getRegions();
    this.formAlterGasStationValues.valueChanges.subscribe(
      value => {
        if (value.region) {
          this.gasStations$ = this.gasStationService.getGasStationsOfRegion(value.region);
        }
      }
    );
  }

}
