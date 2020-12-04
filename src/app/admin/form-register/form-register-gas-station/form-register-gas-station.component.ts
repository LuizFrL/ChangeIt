import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GasStationInf} from '../../../core/gas-station/GasStationInf';
import {GasStationService} from '../../../core/gas-station/gas-station.service';

@Component({
  selector: 'app-form-register-gas-station',
  templateUrl: './form-register-gas-station.component.html',
  styleUrls: ['./form-register-gas-station.component.css']
})
export class FormRegisterGasStationComponent implements OnInit {
  formRegisterGasStation: FormGroup;
  formGasStationInf: FormGroup;

  regions = [];
  filter = '';
  constructor(
    private formBuilder: FormBuilder,
    private gasStationService: GasStationService
  ) {}

  ngOnInit(): void {
    this.formGasStationInf = this.formBuilder.group({
      gasStationName: ['', Validators.required],
      location: ['', Validators.required]
    });
    this.formRegisterGasStation = this.formBuilder.group({
      region: ['', Validators.required],
      inf: this.formBuilder.group(this.formGasStationInf.controls)
    });
    this.gasStationService.getRegions().subscribe(value => {
      this.regions = value;
    });
  }

  addGasStation(): void {
    const gasStationInf = this.formRegisterGasStation.getRawValue() as GasStationInf;
    this.gasStationService.insertGasStation(gasStationInf);
    this.formRegisterGasStation.reset();
    this.formGasStationInf.reset();
  }

}
