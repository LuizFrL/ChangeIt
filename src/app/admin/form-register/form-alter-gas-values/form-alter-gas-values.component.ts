import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-alter-gas-values',
  templateUrl: './form-alter-gas-values.component.html',
  styleUrls: ['./form-alter-gas-values.component.css']
})
export class FormAlterGasValuesComponent implements OnInit {
  formAlterGasStationValues: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formAlterGasStationValues = this.formBuilder.group({
      teste: ['', Validators.required],
      // cardDescription: ['', Validators.required]
    });
  }

}
