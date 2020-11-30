import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormRegisterComponent} from './form-register.component';
import {FormRegisterGasStationComponent} from './form-register-gas-station/form-register-gas-station.component';
import { FormAlterGasValuesComponent } from './form-alter-gas-values/form-alter-gas-values.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [FormRegisterComponent, FormRegisterGasStationComponent, FormAlterGasValuesComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FormRegisterModule { }
