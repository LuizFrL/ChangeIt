import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-register-gas-station',
  templateUrl: './form-register-gas-station.component.html',
  styleUrls: ['./form-register-gas-station.component.css']
})
export class FormRegisterGasStationComponent implements OnInit {
  formRegisterGasStation: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formRegisterGasStation = this.formBuilder.group({
      region: ['', Validators.required],
      gasStationName: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

}
